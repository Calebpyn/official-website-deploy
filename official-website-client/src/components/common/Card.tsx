//Description: Card component. Height and width are in px

//Imports
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

//Types
import { cardType } from "../../types/homepage/Section2Types";

//Translation
import { useTranslation } from "react-i18next";

const Card: React.FC<cardType> = ({ width, height, redirect, image, text }) => {
  //Navigation
  const navigate = useNavigate();

  //Translation
  const {t} = useTranslation()

  //Props state
  const [cardOptions] = useState<cardType>({
    width: width,
    height: height,
    redirect: redirect,
    image: image,
    text: text,
  });


  return (
    <div
      className={`shadow-xl rounded-xl overflow-hidden hover:scale-105 tr cursor-pointer relative`}
      onClick={() => navigate(`/${cardOptions.redirect}`)}
      style={{width: `${cardOptions.width}px`, height: `${cardOptions.height}px`}}
    >
      <div className={`w-full h-[75%] relative tr bg-cover bg-center`} style={{backgroundImage: `url(${image})`}}>
        <div className="group absolute w-full h-full hover:bg-[#FDB42D] hover:bg-opacity-40 tr bg-transparent flex justify-center items-center"  onClick={() => navigate(`/${cardOptions.redirect}`)}>
          <button className="group-hover:bg-[#1696FD] px-5 py-3 rounded-full text-white font-bold tracking-widest group-hover:text-lg text-[0] bg-transparent tr">INFO</button>
        </div>
      </div>

      <div className={`p-5 w-full`}>
        <span className={`font-bold lg:text-2xl text-lg text-zinc-700 text-wrap w-full`}>
          {t(`${cardOptions.text}`)}
        </span>
      </div>
    </div>
  );
};

export default Card;
