import getPlacements from 'antd/lib/tooltip/placements';
import { motion } from 'framer-motion';
import GoogleMapReact from 'google-map-react';
import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import { Menu } from '../components/Menu';
import { getPlacesData } from '../utils/api';

export default function Explore() {
  const [coordenades, setCoordenades] = useState({
    // lng: 0,
    // lat: 0,
  });
  const [bounds, setBounds] = useState(null);
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    if (!bounds || !bounds.sw) return;
    getPlacesData(bounds.sw, bounds.ne).then((places) => {
      setPlaces(places);
      console.log('PLACES REQUES', places);
    });
  }, [coordenades, bounds]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordenades({ lat: latitude, lng: longitude });
        console.log('USER LOCATION', latitude, longitude);
      },
      (e) => console.log(e)
    );
  }, []);
  return (
    <div>
      <Map
        setCoordenades={setCoordenades}
        setBounds={setBounds}
        coordenades={coordenades}
      />
    </div>
  );
}

function Map({ setBounds, setCoordenades, coordenades }) {
  // const coordenades = { lat: 19.4978, lng: -99.1269 };

  if (!coordenades.lat) return null;
  return (
    <div className="min-w-[100vw] min-h-[100vh] w-[100vw] h-[100vh]">
      <GoogleMapReact
        bootstrapURLKeys={{ key: API }}
        center={coordenades}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        defaultCenter={coordenades}
        options={{}}
        onChange={(e) => {
          setCoordenades({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={() => {}}
      ></GoogleMapReact>
    </div>
  );
}

export const API = 'AIzaSyDqP5bHVCYXLH0zuVsbNQpS0ZWVNbW-hRs';
