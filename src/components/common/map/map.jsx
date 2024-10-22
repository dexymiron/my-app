// src/components/MyMap.js
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

// Импортируем стили для карты
import "leaflet/dist/leaflet.css";

// Исправляем проблему с маркерами, так как иконки не всегда работают по умолчанию в Webpack (React)
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const MyMap = () => {
  return (
    <MapContainer
      center={[40.73778760500479, -73.98842674662643]}
      zoom={20}
      style={{
        height: "auto",
        width: "100%",
        marginTop: "5px",
        border: "2px solid rgba(0, 0, 0, 0.5",
      }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[40.73778760500479, -73.98842674662643]}>
        <Popup>
          <b>NY, USA</b>
          <br />
          228 Park Ave S
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MyMap;
