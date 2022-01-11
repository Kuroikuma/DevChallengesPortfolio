import React, { useState } from "react";
import "./profile.css";
import mailImg from "../../../assets/email.png";
import phoneImg from "../../../assets/phone-call.png";

export const Profile = (props) => {
  const {
    img,
    display = "Flex",
    name,
    occupation,
    mail,
    phone,
    description,
  } = props;

  return (
    <>
      {display === "Flex" ? (
        <div className="ContainerProfileFlex">
          <img src={img} alt="profile" />
          <div className="ContainerProfileFlex__info">
            <div className="ContainerProfileFlex__info__top">
              <div className="ContainerProfileFlex__info__top__left">
                <h3>{name}</h3>
                <p>{occupation}</p>
              </div>
              <div className="ContainerProfileFlex__info__top__right">
                <div className="ContainerProfileFlex__info__top__right__item">
                  <img src={mailImg} alt="mail" />
                  <p>{mail}</p>
                </div>
                <div className="ContainerProfileFlex__info__top__right__item">
                  <img src={phoneImg} alt="phone" />
                  <p>{phone}</p>
                </div>
              </div>
            </div>
            <div className="ContainerProfileFlex__info__bottom">
              {description &&
                description.map((item, index) => <p key={index}>{item}</p>)}
            </div>
          </div>
        </div>
      ) : (
        <div className="ContainerProfileColumn">
          <img src={img} alt="profile" />
          <div className="ContainerProfileColumn__info">
            <div className="ContainerProfileColumn__info__top">
              <div className="ContainerProfileColumn__info__top__left">
                <h3>{name}</h3>
                <p>{occupation}</p>
              </div>
              <div className="ContainerProfileColumn__info__top__right">
                <div className="ContainerProfileColumn__info__top__right__item">
                  <img src={mailImg} alt="mail" />
                  <p>{mail}</p>
                </div>
                <div className="ContainerProfileColumn__info__top__right__item">
                  <img src={phoneImg} alt="phone" />
                  <p>{phone}</p>
                </div>
              </div>
            </div>
            <div className="ContainerProfileColumn__info__bottom">
              <p>{description[0]}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
