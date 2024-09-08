//Map marker component

//Hooks
import { useEffect, useState } from "react";

//Google maps api
import {
  GoogleMap,
  InfoWindowF,
  MarkerF,
  useLoadScript,
} from "@react-google-maps/api";

//Axios
import axios from "axios";

//Types
import { allLocationsType } from "../../types/common/ComplexMarkerMapTypes";
import { useNavigate } from "react-router-dom";

//Initial location
const center: any = {
  lat: 31.857777777778,
  lng: -116.60583333333,
};

function ComplexMarkerMap() {
  //Load map
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  //Navigate
  const navigate = useNavigate();

  //Active marker for displaying name and link state
  const [activeMarker, setActiveMarker] = useState<number | null>(null);

  //Set current selection
  const handleActiveMarker = (marker: number) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  //All locations state
  const [allLocations, setAllLocations] = useState<allLocationsType[]>([]);

  const handleAllLocations = async () => {
    const response = await axios
      .get(`${import.meta.env.VITE_REACT_APP_API_URL}/all_locations`)
      .catch((err) => {
        console.log(err, "axios error");
        alert("Something went wrong...");
      });
    setAllLocations(response!.data);
  };

  //Mount
  useEffect(() => {
    handleAllLocations();
  }, []);

  if (!isLoaded) return <div>Sorry something went wrong...</div>;
  return (
    <GoogleMap
      center={center}
      zoom={10}
      // onClick={() => setActiveMarker(null)}
      mapContainerStyle={{ width: "100%", height: "500px" }}
    >
      {allLocations.map(({ id, name, location }) => (
        <MarkerF
          key={id}
          position={location}
          onClick={() => handleActiveMarker(id)}
        >
          {activeMarker === id ? (
            <InfoWindowF onCloseClick={() => setActiveMarker(null)}>
              <div className="w-[100px] flex justify-center items-center">
                <span
                  className="hover:scale-110 tr cursor-pointer"
                  onClick={() => {
                    navigate(`/real_estate/${id}`);
                  }}
                >
                  {name}
                </span>
              </div>
            </InfoWindowF>
          ) : null}
        </MarkerF>
      ))}
    </GoogleMap>
  );
}

export default ComplexMarkerMap;
