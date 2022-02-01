import { HeartOutlined } from '@ant-design/icons';
import axios from 'axios';
import Head from 'next/head';
import React, { useEffect } from 'react';
import { Menu } from '../components/Menu';
import { useFavorites } from '../utils/favoritePlaces';

export default function Favorites() {
  const { favorites, handleFavorite } = useFavorites();
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Favorites | Traveler App</title>
        <meta name="description" content="Your list of favorite places" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h5 className="font-bold text-3xl text-center pt-[10vh] mb-[5vh]">
        Favorites
      </h5>
      <div className="w-10/12 max-w-[420px] mx-auto">
        {favorites.map((fav) => {
          console.log({ fav });
          const isFavorite = favorites?.find(
            (item) => item.place_id === fav?.place_id
          );

          return (
            <div
              className="w-full rounded-md bg-white px-5 py-4 my-3 relative"
              key={fav.place_id}
            >
              <h3>{fav.name}</h3>
              <HeartOutlined
                onClick={() => handleFavorite(fav)}
                className={`${
                  !isFavorite
                    ? 'bg-white text-red-400 '
                    : 'bg-red-400 text-white'
                } absolute bottom-0 right-0 w-[30px] h-[30px] flex items-center justify-center  rounded-full text-xs shadow-md shadow-red-100`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
