import { useBlockProps } from '@wordpress/block-editor';
import { useState } from '@wordpress/element';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import NodeGeocoder from 'node-geocoder';

// Fix Leaflet icon paths
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

export default function Edit({ attributes, setAttributes }) {
  const { latitude, longitude, address } = attributes;
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = async () => {
    const geocoder = NodeGeocoder({ provider: 'openstreetmap' });

    geocoder.geocode(searchQuery)
      .then((results) => {
        if (results.length > 0) {
          const { latitude: lat, longitude: lon, formattedAddress } = results[0];
          setAttributes({
            latitude: lat,
            longitude: lon,
            address: formattedAddress,
          });
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div {...useBlockProps()}>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search address..."
      />
      <button onClick={handleSearch}>Search</button>

      {address && <p>Address: {address}</p>}

      <div style={{ height: '400px', width: '100%' }}>
        <MapContainer
          center={[latitude, longitude]}
          zoom={13}
          style={{ height: '100%', width: '100%' }}
          attributionControl={false}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[latitude, longitude]}>
            <Popup>{address}</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}