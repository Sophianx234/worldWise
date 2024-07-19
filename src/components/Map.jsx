import styles from './Map.module.css'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
function Map() {
  const customClass = '.leaflet-popup-content-wrapper leaflet-popup-tip leaflet-popup-content'
    return (
        <div className={styles.map}>
          

          <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} className={styles.leaflet} >
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[51.505, -0.09]} >
    <Popup className={styles.customClass} >
      A pretty CSS3 popup Damian. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer>
          
        </div>
    )
}

export default Map
