import { useEffect, useState } from "react";
import styles from "./Map.module.css";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvents,
} from "react-leaflet";
import { useNavigate } from "react-router-dom";
import { useCities } from "../contexts/CitiesContext";
import Button from "./Button";
function Map() {
  const customClass =
    ".leaflet-popup-content-wrapper leaflet-popup-tip leaflet-popup-content";
  const [mapPosition, setMapPosition] = useState([9.432919,-0.848452]);
  const { cities } = useCities();

  return (
    <div className={styles.map}>
      <Button type='secondary abs'>Use your location</Button>
      <MapContainer
        center={[51.505, -0.09]}
        zoom={8}
        scrollWheelZoom={true}
        className={styles.leaflet}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {cities.map((city) => (
          <Marker
            position={[city.position.lat, city.position.lng]}
            key={city.id}
          >
            <Popup className={styles.customClass}>
              <span>{city.emoji}</span>
              <span>{city.cityName}</span>
            </Popup>
          </Marker>
        ))}
        <ChangeCenter position={mapPosition} />
        <DetectClick />
      </MapContainer>
    </div>
  );
}

function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}

function DetectClick() {
  const navigate = useNavigate();

  useMapEvents({
    click: (e) => navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`),
  });
}

export default Map;
