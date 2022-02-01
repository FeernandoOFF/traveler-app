import { useRouter } from 'next/router';
import {
  BellOutlined,
  FilterOutlined,
  HeartOutlined,
  SearchOutlined,
  UserOutlined,
} from '@ant-design/icons/lib/icons';
import { AutoComplete, Popover, Result, Slider } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import { motion } from 'framer-motion';
import Head from 'next/head';
import { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import {
  getAutoComplete,
  getPlacesByRadius,
  getPlacesData,
} from '../utils/api';
import { useAppContext } from '../utils/appContext';
import { useFavorites } from '../utils/favoritePlaces';

export default function Home() {
  const [categories, setCategories] = useState('tourism.attraction');
  const { coordenades, locationError } = useAppContext();
  const [places, setPlaces] = useState([]);
  const [km, setKM] = useState(1);

  useEffect(async () => {
    if (!coordenades[0]) return;
    const places = await getPlacesByRadius({
      lat: coordenades[0],
      lng: coordenades[1],
      radius: km * 1000,
      filter: categories,
    });
    setPlaces(places);
  }, [coordenades, categories, km]);

  return (
    <div className="bg-gray-100">
      <Head>
        <title>Traveler App | FeernandoOFF</title>
        <meta
          name="description"
          content="If your gonna travel around the world or your city you absoloutley neet this Traveler's app to know where your going"
        />
      </Head>

      <main className=" min-h-[100vh]  w-11/12 mx-auto">
        <Header />
        <SearchComponent />
        <h5 className="subtitle">Categories</h5>
        <CategoriesComponent
          categories={categories}
          setCategories={setCategories}
        />
        {locationError ? (
          <div className="min-w-screen  min-h-screen flex justify-center items-center  ">
            <Result
              status={'warning'}
              title="Please grant the location permission"
            />
          </div>
        ) : (
          <ResultsComponent places={places} km={km} setKM={setKM} />
        )}
      </main>
    </div>
  );
}

// * PAGE COMPONENTS  ----
export const Header = () => {
  return (
    <header className="py-6">
      <nav className="flex justify-between  mx-auto items-center">
        <div className="left flex justify-between items-center">
          <Avatar
            className="flex items-center justify-center shadow-md cursor-pointer"
            style={{ backgroundColor: '#ff8348' }}
            icon={<UserOutlined />}
          />

          <p className="ml-4 font-semibold">Hi, Jennifer!</p>
        </div>
        <div className="right">
          <motion.div
            whileTap={{
              scale: 1.14,
              backgroundColor: '#F12222',
              color: '#fff',
            }}
            className="p-3  flex items-center rounded-full bg-white text-red-400 shadow-md shadow-red-100 cursor-pointer"
          >
            <BellOutlined />
          </motion.div>
        </div>
      </nav>
    </header>
  );
};
export const SearchComponent = () => {
  const router = useRouter();

  const [autocomplete, setAutocomplete] = useState([]);

  async function handleSearch(value) {
    if (!value | (value?.length < 3)) return;

    const res = await getAutoComplete(value);
    setAutocomplete(res);
  }
  return (
    <div className="mt-[3vh]">
      <h5 className="font-bold text-3xl">
        Where do
        <br /> you want to go?
      </h5>
      <motion.div
        className="relative my-[5vh] "
        whileFocus={{ backgroundColor: 'red' }}
      >
        <AutoComplete
          options={autocomplete?.map((place) => ({
            value: place?.formatted,
            option: { lat: place?.lat, lng: place.lon },
          }))}
          onSelect={(e, { option }) => {
            // console.log('select', {});
            router.push({
              pathname: '/explore',
              query: { lat: option.lat, lng: option.lng },
            });
          }}
          placeholder="Search a place"
          className=" mx-auto px-2 py-4 rounded-xl shadow-sm border-none outline-none bg-white text-gray-700 w-full font-semibold "
          onChange={(e) => handleSearch(e)}
        />
        <motion.div
          whileHover={{
            transform: 'rotateY(360deg)',
            transition: { duration: 0.6 },
          }}
          className="absolute right-3 top-2 flex justify-center items-center p-3 rounded-full bg-white shadow-sm shadow-yellow-500 text-yellow-600 font-semibold"
        >
          <SearchOutlined className="" />
        </motion.div>
      </motion.div>
    </div>
  );
};
export const CategoriesComponent = ({
  categories,
  setCategories,
  className = '',
}) => {
  return (
    <div
      className={`categories_list flex justify-start flex-nowrap overflow-x-scroll ${className}`}
    >
      <CategoryIcon
        value={'tourism.attraction'}
        name={'attractions'}
        setCategories={setCategories}
        categories={categories}
      />
      <CategoryIcon
        value={'accommodation.hotel'}
        name={'hotels'}
        setCategories={setCategories}
        categories={categories}
      />
      <CategoryIcon
        value={'catering.restaurant'}
        name={'restaurants'}
        setCategories={setCategories}
        categories={categories}
      />
    </div>
  );
};
export const ResultsComponent = ({ places, setKM }) => {
  const { favorites, handleFavorite } = useFavorites();

  //* _ MENU
  const StarsMenu = (
    <div>
      <h2>Search by KM</h2>
      <Slider
        defaultValue={1}
        max={5}
        step={1}
        onChange={(value) => setKM(value)}
      />
    </div>
  );
  //* _PLACES_
  return (
    <div className="mt-[5vh]">
      <div className="flex justify-between px-2 items-center">
        <h5 className="subtitle">Locatios close to You</h5>
        <div className="mr-4">
          <Popover
            content={StarsMenu}
            title="Rating"
            placement="left"
            trigger={'click'}
          >
            <FilterOutlined className="text-lg " />
          </Popover>
        </div>
      </div>
      <div className="topTrip_container flex flex-wrap w-full justify-between ">
        {places?.map(({ properties }, i) => (
          <ResultItem
            name={properties.name}
            distance={properties.distance}
            setFavorites={() => handleFavorite(properties)}
            isFavorite={favorites?.find(
              (item) => item.place_id === properties.place_id
            )}
            key={i}
          />
        ))}
      </div>
    </div>
  );
};

//* SINGLE COMPONENTS ----

function CategoryIcon({ value, setCategories, categories, name }) {
  return (
    <motion.div
      onClick={() => setCategories(value)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`
    categories_item lg:min-w-[200px] min-w-[150px] min-h-[40px] p-3 rounded-xl bg-white flex items-center mx-4 my-4
    ${categories == value && 'bg-gray-300 shadow-lg'}`}
    >
      <div className="image h-[35px] w-[35px] bg-gray-200 rounded-lg "></div>
      <p className="font-medium lg:ml-4 lg:text-base ml-2 capitalize">{name}</p>
    </motion.div>
  );
}

function ResultItem({ name, distance, setFavorites, isFavorite }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 0.4, delay: 0.3 }}
      whileInView={{ opacity: 1 }}
      className="topTrip_item bg-gray-50 rounded-lg p-2 w-[48%] lg:min-w-[300px] lg:max-w-[200px] my-8 shadow-md"
    >
      <div className="topTrip_image min-w-full min-h-[140px] bg-gray-400 rounded-md relative shadow-lg">
        <p
          className="right-2 top-2 p-1  inline-block rounded-md bg-white text-xs absolute  bg-clip-padding text-gray-500 opacity-80"
          style={{
            backdropFilter: 'blur(100px)',
            backgroundColor: 'rgb(255 255 255 / 56%)',
          }}
        >
          $120
        </p>
        <img
          className="max-w-[100%] rounded-md"
          src="https://images.unsplash.com/photo-1557456170-0cf4f4d0d362?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
          alt="Background"
        />
      </div>
      <div className="topTrip_info py-3">
        <div className="left relative mt-3">
          <h6 className="font-semibold text-sm pr-1 ">{name}</h6>
          <span className="text-gray-400 font-normal text-xs">
            {distance} m
          </span>
          <HeartOutlined
            onClick={setFavorites}
            className={`${
              !isFavorite ? 'bg-white text-red-400 ' : 'bg-red-400 text-white'
            } absolute bottom-0 right-0 w-[30px] h-[30px] flex items-center justify-center  rounded-full text-xs shadow-md shadow-red-100`}
          />
        </div>
      </div>
    </motion.div>
  );
}

export function StarRating({ setStars, stars, value, children }) {
  return (
    <p
      className={`my-2 text-gray-700 font-semibold ${
        stars == value && 'text-blue-400'
      }`}
      onClick={({ target }) => setStars(target.dataset.value)}
      data-value={value}
    >
      {children ? children : ` Above ${value} stars`}
    </p>
  );
}
