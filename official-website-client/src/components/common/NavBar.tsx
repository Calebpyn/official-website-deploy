//Imports
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

//Assets
import mainLogo from "../../assets/logo-main.jpg";

//Langauge
import { useTranslation } from "react-i18next";

//Icons
import { GrLanguage } from "react-icons/gr";
import { MdMail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { TiArrowSortedDown } from "react-icons/ti";
import { GoDotFill } from "react-icons/go";

function NavBar() {
  //Navigation
  const navigate = useNavigate();

  //Translation
  const { t, i18n } = useTranslation();

  //Contact Link
  const contactUrl = "https://wa.me/526461839897";

  //Change lenguage function
  const changeLanguage = (lng: string): void => {
    i18n.changeLanguage(lng);
  };

  //Language menu ref
  const dropdownMenuRef = useRef<HTMLDivElement>(null);

  //Sidebar ref
  const sideBarRef = useRef<HTMLDivElement>(null);

  //Services ref
  const servicesRef = useRef<HTMLDivElement>(null);

  //Language menu
  const [selectingLang, setSelectingLang] = useState<boolean>(false);

  //Services menu
  const [servicesOpen, setServicesOpen] = useState<boolean>(false);

  //Sidebar state
  const [sideBarOpen, setSideBarOpen] = useState<boolean>(false);

  //Mobile screen state
  const [isMobile, setIsMobile] = useState<boolean>(false);

  //Clicking out of the menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownMenuRef.current &&
        !dropdownMenuRef.current.contains(event.target as Node)
      ) {
        setSelectingLang(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownMenuRef]);

  //Clicking out of the services menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(event.target as Node)
      ) {
        setServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [servicesRef]);

  //Clicking out of the sidebar
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sideBarRef.current &&
        !sideBarRef.current.contains(event.target as Node)
      ) {
        setSideBarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sideBarRef]);

  //Is screen on mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // URLS
  const Facebook = "https://www.facebook.com/gvictoricabajaservices";

  const Youtube = "https://www.youtube.com/@GvBajaRealty";

  const Tik_Tok = "https://www.tiktok.com/@gvbajarealty?_t=8nrROaEGxBF&_r=1";

  const Instagram =
    "https://www.instagram.com/gvbajarealty?igsh=YjlvcXZobDkwNmtm";

  const Google_Business =
    "https://maps.app.goo.gl/GrY4qNVTVKDKUhd6A?g_st=com.google.maps.preview.copy";

  return (
    <div className="max-w-screen-2xl w-full fixed z-[999]">
      {/* Header */}
      <div className="flex justify-between px-5 bg-[#072C4F] items-center h-[60px]">
        <div
          className="text-white flex items-center hover:bg-black hover:bg-opacity-25 py-1 px-2 cursor-pointer rounded-md tr relative"
          onClick={() => setSelectingLang(!selectingLang)}
          ref={dropdownMenuRef}
        >
          <GrLanguage />
          <span className="ml-2 font-light select-none">{t("language")}</span>

          {/* Dropdown menu */}
          {selectingLang ? (
            <div className="bg-white absolute w-auto h-auto top-8 left-8 shadow-xl text-black p-1 rounded-sm">
              <ul>
                <li
                  className="hover:bg-black hover:bg-opacity-25 tr mb-1 px-1 rounded-sm"
                  onClick={() => changeLanguage("es")}
                >
                  {t("spanish")}
                </li>
                <li
                  className="hover:bg-black hover:bg-opacity-25 tr px-1 rounded-sm"
                  onClick={() => changeLanguage("en")}
                >
                  {t("english")}
                </li>
              </ul>
            </div>
          ) : null}
        </div>

        <div className="hidden md:flex items-center">
          <span className="flex items-center mr-5">
            <MdMail className="text-[#e6a146]" />
            {/* Mail could change later */}
            <span className="text-white font-light text-sm ml-1">
              gvbajaservices@gmail.com
            </span>
          </span>

          <span className="flex items-center mr-5">
            <FaPhone className="text-[#e6a146]" />
            {/* Phones will change later */}
            <span className="text-white font-light text-sm ml-1">
              US (760) 315-0576
            </span>
          </span>

          <span className="flex items-center">
            <FaPhone className="text-[#e6a146]" />
            {/* Phones will change later */}
            <span className="text-white font-light text-sm ml-1">
              MX (646) 183-9897
            </span>
          </span>
        </div>
      </div>

      {/* NavBar */}
      <div className="bg-[#174067] h-[110px] flex items-center justify-between px-5">
        <div className="flex items-center">
          {/* Logo will change later */}
          <span>
            <span
              className="font-black text-3xl text-white cursor-pointer"
              onClick={() => navigate("/")}
            >
              <img src={mainLogo} className="rounded-full h-[80px]" />
            </span>
          </span>

          <div className="bg-white h-[60px] w-[2px] mx-3"></div>

          <span
            className="text-white flex items-center hover:bg-[#072C4F] py-1 px-2 rounded-md tr cursor-pointer relative"
            onClick={() => setServicesOpen(!servicesOpen)}
          >
            <span className="mr-2 text-lg select-none">{t("services")}</span>
            <TiArrowSortedDown />

            {servicesOpen ? (
              <div
                ref={servicesRef}
                className="absolute top-0 mt-[38px] w-auto p-1 gap-2 bg-white shadow-md rounded-sm"
              >
                <ul className="text-black">
                  <li className=" hover:bg-black hover:bg-opacity-25 p-1 rounded-sm tr" onClick={() => navigate('for_sale')}>
                    {t("real_estate")}
                  </li>
                  <li className=" hover:bg-black hover:bg-opacity-25 p-1 rounded-sm tr pl-5 flex items-center" onClick={() => navigate('for_sale')}>
                    <GoDotFill className="text-xs mr-1"/>
                    {t('for_sale')}
                  </li>
                  <li className=" hover:bg-black hover:bg-opacity-25 p-1 rounded-sm tr pl-5 flex items-center" onClick={() => navigate('for_rent')}>
                    <GoDotFill className="text-xs mr-1"/>
                    {t('for_rent')}
                  </li>
                  <li className="text-nowrap hover:bg-black hover:bg-opacity-25 p-1 rounded-sm tr" onClick={() => navigate('property_m')}>
                    {t("property_management")}
                  </li>
                  <li className="text-nowrap hover:bg-black hover:bg-opacity-25 p-1 rounded-sm tr" onClick={() => navigate('relocation')}>
                    {t("relocation")}
                  </li>
                </ul>
              </div>
            ) : null}
          </span>
        </div>

        <div className="md:flex items-center justify-between hidden">
          <div className="flex mr-8 text-white text-lg gap-5">
            <FaFacebookF
              className="cursor-pointer tr hover:scale-105"
              onClick={() => window.open(Facebook, "_blank")}
            />
            <FaInstagram
              className="cursor-pointer tr hover:scale-105"
              onClick={() => window.open(Instagram, "_blank")}
            />
            <FaTiktok
              className="cursor-pointer tr hover:scale-105"
              onClick={() => window.open(Tik_Tok, "_blank")}
            />
            <FaYoutube
              className="cursor-pointer tr hover:scale-105"
              onClick={() => window.open(Youtube, "_blank")}
            />
            <FaGoogle
              className="cursor-pointer tr hover:scale-105"
              onClick={() => window.open(Google_Business, "_blank")}
            />
          </div>

          <div
            className="bg-[#FDB42D] text-sm text-white flex text-center px-8 py-1 rounded-full shadow-lg hover:scale-105 tr cursor-pointer"
            onClick={() => window.open(contactUrl, "_blank")}
          >
            <span>
              {t("book")}
              <br />
              {t("consultation")}
            </span>
          </div>
        </div>

        <div className="flex-col md:hidden">
          <RxHamburgerMenu
            className="text-white text-[40px]"
            onClick={() => setSideBarOpen(true)}
          />
        </div>
      </div>

      {/* SideBar for movil only */}
      <div
        className={`absolute right-0 top-0 w-[60%] h-screen bg-black bg-opacity-40 backdrop-blur-md z-[999] tr ${
          sideBarOpen ? "" : "translate-x-[100%]"
        } ${isMobile ? "" : "hidden"}`}
        ref={sideBarRef}
      >
        <div className="h-full w-full flex flex-col items-center justify-start">
          <div className="p-5 mt-4 text-[35px] text-white w-full flex justify-start">
            <IoClose onClick={() => setSideBarOpen(false)} />
          </div>

          <div
            className="bg-[#FDB42D] text-sm text-white flex text-center justify-center items-center py-1 rounded-full shadow-lg hover:scale-105 tr cursor-pointer max-w-[200px] w-full"
            onClick={() => window.open(contactUrl, "_blank")}
          >
            <span>
              {t("book")}
              <br />
              {t("consultation")}
            </span>
          </div>

          <div className="w-[90%] bg-white bg-opacity-40 h-[1px] my-5"></div>

          <div className="flex-col w-full items-center text-white text-xl">
            <span
              className="flex justify-center items-center mb-5 hover:scale-110 tr"
              onClick={() => window.open(Facebook, "_blank")}
            >
              <FaFacebookF />
              <span className="text-md font-light ml-4">Facebook</span>
            </span>

            <span
              className="flex justify-center items-center mb-5 hover:scale-110 tr"
              onClick={() => window.open(Instagram, "_blank")}
            >
              <FaInstagram />
              <span className="text-md font-light ml-4">Instagram</span>
            </span>

            <span
              className="flex justify-center items-center mb-5 hover:scale-110 tr"
              onClick={() => window.open(Tik_Tok, "_blank")}
            >
              <FaTiktok />
              <span className="text-md font-light ml-4">Tik Tok</span>
            </span>

            <span
              className="flex justify-center items-center mb-5 hover:scale-110 tr"
              onClick={() => window.open(Youtube, "_blank")}
            >
              <FaYoutube />
              <span className="text-md font-light ml-4">Youtube</span>
            </span>

            <span
              className="flex justify-center items-center mb-5 hover:scale-110 tr"
              onClick={() => window.open(Google_Business, "_blank")}
            >
              <FaGoogle />
              <span className="text-md font-light ml-4">Google</span>
            </span>
          </div>

          <div className="w-[90%] bg-white h-[1px] mb-5 bg-opacity-40"></div>

          <div className="w-full pb-5 pr-4">
            <div className="flex flex-col justify-end w-full items-end gap-3">
              <span className="flex items-center">
                <span className="text-white font-light text-sm mr-1">
                  gvbajaservices@gmail.com
                </span>

                <MdMail className="text-[#e6a146]" />
              </span>

              <span className="flex items-center">
                <span className="text-white font-light text-sm mr-1">
                  US (760) 315-576
                </span>

                <FaPhone className="text-[#e6a146]" />
              </span>

              <span className="flex items-center">
                <span className="text-white font-light text-sm mr-1">
                  MX (646) 183-9897
                </span>

                <FaPhone className="text-[#e6a146]" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
