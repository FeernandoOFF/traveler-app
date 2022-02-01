import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { CategoriesComponent } from './index.jsx';
import { Spin, Result } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { useAppContext } from '../utils/appContext.js';

export default function Explore() {
  const { query } = useRouter();
  const { coordenades, locationError, setCoordenades } = useAppContext();

  let [categories, setCategories] = useState('tourism.attraction');
  const { lat, lng } = query;

  useEffect(() => {
    if ((lat, lng)) {
      setCoordenades([lat, lng]);
    }
  }, []);

  const MapWithNoSSR = dynamic(() => import('../components/MapExplore.jsx'), {
    ssr: false,
  });

  if (locationError)
    return (
      <div className="min-w-screen  min-h-screen flex justify-center items-center  ">
        <Result
          status={'warning'}
          title="Please grant the location permission"
        />
      </div>
    );
  if (!coordenades[0])
    return (
      <div className="min-w-screen  min-h-screen flex justify-center items-center  ">
        <Spin />
      </div>
    );

  return (
    <div className="bg-gray-100">
      <Head>
        <title>Explore Places | Traveler App</title>
      </Head>

      <CategoriesComponent
        categories={categories}
        setCategories={setCategories}
        className="top-0 bg-transparent z-50"
      />
      <MapWithNoSSR center={coordenades} filter={categories} />
    </div>
  );
}
