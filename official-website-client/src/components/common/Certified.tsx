//Description: This is the certified section, the text has to be updated

//Assets
import checkMark from "../../assets/common_checkmark.png"

function Certified() {
  return (
    <div className="w-full md:h-[200px] flex justify-around items-center my-10 px-3 md:px-0">
      <span className="md:w-[70%] flex justify-center items-center text-left">
        <p className="text-white max-text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia,molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborumnumquam blanditiis harum quisquam eius sed odit
          fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique
          accusantium nemo autem.
        </p>
      </span>
      <img src={checkMark} className="md:w-[200px] w-[100px]"/>
    </div>
  );
}

export default Certified;
