import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';
import { getPlacesData } from '../utils/api';
import { HeartOutlined } from '@ant-design/icons';
import { useFavorites } from '../utils/favoritePlaces';

export default function MapExplore({ center, filter }) {
  const { favorites, handleFavorite } = useFavorites();

  const [map, setMap] = useState(null);
  const [bounds, setBounds] = useState(null);
  const [places, setPlaces] = useState([]);

  const onMove = useCallback(() => {
    setBounds(map.getBounds());
    const { _northEast, _southWest } = map.getBounds();

    getPlacesData(_northEast, _southWest, filter).then((places) => {
      setPlaces(places);
    });
  }, [map]);

  useEffect(() => {
    if (!map?.on) return;
    map.on('moveend', onMove);
    const { _northEast, _southWest } = map.getBounds();
    getPlacesData(_northEast, _southWest, filter).then((places) => {
      setPlaces(places);
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
          const isFavorite = favorites?.find(
            (item) => item.place_id === place.properties.place_id
          );
          return (
            <Marker
              position={[
                place.geometry.coordinates[1],
                place.geometry.coordinates[0],
              ]}
              key={place.properties.place_id}
            >
              <Popup>
                <div>
                  <p>{place.properties.name}</p>
                  <HeartOutlined
                    onClick={() => handleFavorite(place.properties)}
                    className={`${
                      !isFavorite
                        ? 'bg-white text-red-400 '
                        : 'bg-red-400 text-white'
                    } absolute bottom-0 right-0 w-[30px] h-[30px] flex items-center justify-center  rounded-full text-xs shadow-md shadow-red-100`}
                  />
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}
