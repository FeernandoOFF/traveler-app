import getPlacements from 'antd/lib/tooltip/placements';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import { Menu } from '../components/Menu';
import { getPlacesData } from '../utils/api';

import dynamic from 'next/dynamic';
import Head from 'next/head';

export default function Explore() {
  const MapWithNoSSR = dynamic(() => import('../components/MapExplore.jsx'), {
    ssr: false,
  });
  const [coordenades, setCoordenades] = useState([]);
  const [filter, setFilter] = useState('catering.restaurant');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordenades([latitude, longitude]);
        console.log('USER LOCATION', latitude, longitude);
      },
      (e) => console.log(e)
    );
  }, []);

  if (!coordenades[0]) return <div>Loading...</div>;

  return (
    <div>
      <Head>
        <title>Explore Places | Traveler App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="fixed top-0 p-4 left-0 z-50 w-screen bg-gray-50">
        <ul className="flex w-full justify-between items-center">
          <li
            onClick={() => setFilter('accommodation.hotel')}
            className="p-3 bg-gray-300 rounded-md"
          >
            Hotel
          </li>
          <li>Parking</li>
        </ul>
      </div>
      <MapWithNoSSR center={coordenades} filter={filter} />
    </div>
  );
}
