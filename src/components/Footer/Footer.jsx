import React from "react";
import n from "./Footer.module.scss";
import logo from "../../assets/images/logo-img.png";
import MyMap from "../common/map/map";
import { ReactComponent as IconFb } from "../../assets/images/icons/ion--social-facebook.svg";
import { ReactComponent as IconGooglePlus } from "../../assets/images/icons/ion--social-googleplus.svg";
import { ReactComponent as IconLd } from "../../assets/images/icons/ion--social-linkedin-outline.svg";
import { ReactComponent as IconTw } from "../../assets/images/icons/ion--social-twitter-outline.svg";

const Footer = () => {
  return (
    <div className={n.FooterWrapperFullWidth}>
      <div className={n.Footer}>
        <div className={n.logoHeaderIcons}>
          <div className={n.logoAndHeader}>
            <img src={logo} className={n.footerLogo} alt="footerLogo"></img>
            <h1 className={n.logoText}>Social</h1>
          </div>
          <div className={n.Icons}>
            <IconFb width="25px" height="25px" className={n.icon} />
            <IconGooglePlus width="25px" height="25px" className={n.icon} />
            <IconLd width="25px" height="25px" className={n.icon} />
            <IconTw width="25px" height="25px" className={n.icon} />
          </div>
        </div>
        <div className={n.map}>
          <MyMap />
        </div>
        <div className={n.contactUs}>
          <h4 className={n.contactUsText}>Contact Us</h4>
          <div className={n.number}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25px"
              height="25px"
              viewBox="0 0 512 512"
            >
              <path
                d="M415.9 335.5c-14.6-15-56.1-43.1-83.3-43.1-6.3 0-11.8 1.4-16.3 4.3-13.3 8.5-23.9 15.1-29 15.1-2.8 0-5.8-2.5-12.4-8.2l-1.1-1c-18.3-15.9-22.2-20-29.3-27.4l-1.8-1.9c-1.3-1.3-2.4-2.5-3.5-3.6-6.2-6.4-10.7-11-26.6-29l-.7-.8c-7.6-8.6-12.6-14.2-12.9-18.3-.3-4 3.2-10.5 12.1-22.6 10.8-14.6 11.2-32.6 1.3-53.5-7.9-16.5-20.8-32.3-32.2-46.2l-1-1.2c-9.8-12-21.2-18-33.9-18-14.1 0-25.8 7.6-32 11.6-.5.3-1 .7-1.5 1-13.9 8.8-24 20.9-27.8 33.2-5.7 18.5-9.5 42.5 17.8 92.4 23.6 43.2 45 72.2 79 107.1 32 32.8 46.2 43.4 78 66.4 35.4 25.6 69.4 40.3 93.2 40.3 22.1 0 39.5 0 64.3-29.9 26-31.4 15.2-50.6-.4-66.7zm-11.5 55.9c-20 24.2-31.5 24.2-52.3 24.2-20.3 0-51.8-14-84.2-37.3-31-22.4-44.8-32.7-75.9-64.6-32.9-33.7-53.6-61.8-76.4-103.5-24.1-44.1-21.4-63.4-16.5-79.3 2.6-8.5 10.4-17.6 21-24.2.5-.3 1-.7 1.6-1 5.3-3.4 14.1-9.1 23.7-9.1 8 0 15.1 4 21.9 12.3l1 1.2c25.5 31.2 45.4 58.8 30.4 79.2-10.6 14.3-16.2 24-15.3 34 .8 9.7 7.3 17 17.1 28l.7.8c16.1 18.2 20.7 23 27.1 29.5 1.1 1.1 2.2 2.3 3.5 3.6l1.8 1.9c7.4 7.7 11.5 11.9 30.3 28.4l1.1 1c8 7 13.9 12.1 22.5 12.1 8.9 0 18.7-5.6 37.3-17.5 1.9-1.2 4.6-1.9 8-1.9 21.7 0 59.1 24.8 72.2 38.3 12 12.2 18 21.4-.6 43.9z"
                fill="red"
              />
            </svg>
            <h4 className={n.numberH4}>+38 099 926 18 47</h4>
          </div>
          <div className={n.mail}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25px"
              height="25px"
              viewBox="0 0 512 512"
            >
              <path
                d="M64 128v256h384V128H64zm192 139.9L93.2 144h325.6L256 267.9zM80 368V154.1l115.1 87.6L127 319l2 2 78.9-69.6L256 288l48.1-36.6L383 321l2-2-68.1-77.4L432 154.1V368H80z"
                fill="red"
              ></path>
            </svg>
            <h4 className={n.mailH4}>dexymiron@gmail.com</h4>
          </div>
          <div className={n.coordinates}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25px"
              height="25px"
              viewBox="0 0 512 512"
            >
              <path
                d="M256 48c34.19 0 66.334 13.314 90.51 37.49S384 141.81 384 176c0 42.92-24.092 107.127-69.67 185.68-22.279 38.396-44.771 71.634-58.332 90.931-13.518-19.232-35.912-52.327-58.161-90.645C152.149 283.281 128 218.976 128 176c0-34.19 13.314-66.334 37.49-90.51S221.81 48 256 48m0-16c-79.529 0-144 64.471-144 144 0 112 144 304 144 304s144-192 144-304c0-79.529-64.471-144-144-144z"
                fill="red"
              ></path>
              <path
                d="M256 112c-35.3 0-64 28.7-64 64s28.7 64 64 64 64-28.7 64-64-28.7-64-64-64zm0 110.9c-25.9 0-46.9-21-46.9-46.9s21-46.9 46.9-46.9 46.9 21 46.9 46.9-21 46.9-46.9 46.9z"
                fill="red"
              ></path>
            </svg>
            <h4 className={n.coordinatesH4}>228 Park Ave S NY, USA</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
