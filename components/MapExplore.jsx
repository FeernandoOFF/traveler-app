import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';
import { getPlacesData } from '../utils/api';

export default function MapExplore({ center, filter }) {
  const [map, setMap] = useState(null);
  const [bounds, setBounds] = useState(null);
  const [places, setPlaces] = useState([]);

  console.log(center);
  const onMove = useCallback(() => {
    setBounds(map.getBounds());
    const { _northEast, _southWest } = map.getBounds();

    getPlacesData(_northEast, _southWest, filter).then((places) => {
      setPlaces(places);
      console.log('PLACES REQUES', places);
    });
  }, [map]);

  useEffect(() => {
    if (!map?.on) return;
    map.on('moveend', onMove);
    const { _northEast, _southWest } = map.getBounds();
    getPlacesData(_northEast, _southWest, filter).then((places) => {
      setPlaces(places);
      console.log('PLACES REQUES', places);
    });
    return () => {
      map.off('move', onMove);
    };
  }, [map, onMove]);

  return (
    <div>
      <MapContainer
        center={center}
        whenCreated={setMap}
        zoom={16}
        style={{ height: '100vh', width: '100vw', zIndex: 0 }}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.NEXT_PUBLIC_MAPBOX}`}
        />
        {places?.map((place) => {
          return (
            <Marker
              position={[
                place.geometry.coordinates[1],
                place.geometry.coordinates[0],
              ]}
              key={place.properties.place_id}
            >
              <Popup>{place.properties.name}</Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}
