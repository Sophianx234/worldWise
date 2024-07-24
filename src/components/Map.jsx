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
import { useNavigate, useSearchParams } from "react-router-dom";
import { useCities } from "../contexts/CitiesContext";
import Button from "./Button";
import { useAuth } from "../contexts/AuthenticationContext";
function Map() {
  const customClass =
    ".leaflet-popup-content-wrapper leaflet-popup-tip leaflet-popup-content";
  const [mapPosition, setMapPosition] = useState([9.432919,-0.848452]);
  const [userLocation, setUserLocation] = useState(null);
  const [center, setCenter] = useState(null);
  const { cities } = useCities();
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get('lat')
  const lng = searchParams.get('lng')
  const {user} = useAuth();
  
  function  handleButtonClick(e){
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            const userLocation = { latitude, longitude };
            setUserLocation(userLocation);
          },
          (error) => {
            console.error('Error getting location:', error);
          },
          {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
          }
        );
      } else {
        console.error('Geolocation is not supported by this browser.');
          }
        }
      return (
    <div className={styles.map}>
      <div className={styles.avatar}> <img src={user.avatar} alt="" /> <span>Welcome, {user.name.split(' ')[0]}</span> <button>Logout</button></div>
      <Button type='secondary abs' onclick={handleButtonClick}>Use your location</Button>
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
        <ChangeCenter position={userLocation? [userLocation.latitude, userLocation.longitude]:lat && lng ? [lat, lng]: mapPosition} />
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
    click: (e) =>{
      navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`)
      
    }
  });
}

export default Map;
