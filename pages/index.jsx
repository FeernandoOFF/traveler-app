import {
  BellOutlined,
  HeartOutlined,
  SearchOutlined,
  UserOutlined,
} from '@ant-design/icons/lib/icons';
import { AutoComplete } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import Head from 'next/head';
import Image from 'next/image';
import { Menu } from '../components/Menu';

export default function Home() {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Traveler App | FeernandoOFF</title>
        <meta
          name="description"
          content="If your gonna travel around the world or your city you absoloutley neet this Traveler's app to know where your going"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=" min-h-[100vh]  w-11/12 mx-auto">
        <Header />
        <SearchComponent />
        <CategoriesComponent />
        <ResultsComponent />
        <Menu />
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
            className="flex items-center justify-center shadow-md"
            style={{ backgroundColor: '#ff8348' }}
            icon={<UserOutlined />}
          />

          <p className="ml-4 font-semibold">Hi, Jennifer!</p>
        </div>
        <div className="right">
          <div className="p-3  flex items-center rounded-full bg-white text-red-400 shadow-md shadow-red-100">
            <BellOutlined />
          </div>
        </div>
      </nav>
    </header>
  );
};
export const SearchComponent = () => {
  return (
    <div className="mt-[3vh]">
      <h5 className="font-bold text-3xl">
        Where do
        <br /> you want to go?
      </h5>
      <AutoComplete className="my-[5vh] w-full  mx-auto " options={[]}>
        <input
          type="text"
          className="px-3 py-4 rounded-xl shadow-sm border-none outline-none bg-white text-gray-800 w-full relative"
          placeholder="Search for places"
        />
      </AutoComplete>
    </div>
  );
};
export const CategoriesComponent = () => {
  return (
    <div className="mt-4">
      <h5 className="subtitle">Categories</h5>
      <div className="categories_list flex justify-start flex-nowrap overflow-x-scroll">
        {CategoryIcon()}
        {CategoryIcon()}
        {CategoryIcon()}
      </div>
    </div>
  );
};
export const ResultsComponent = () => {
  return (
    <div className="mt-[5vh]">
      <div>
        <h5 className="subtitle">Top trips</h5>
      </div>
      <div className="topTrip_container flex flex-wrap w-full justify-between ">
        {ResultItem()}
        {ResultItem()}
        {ResultItem()}
        {ResultItem()}
      </div>
    </div>
  );
};

//* SINGLE COMPONENTS ----

function CategoryIcon() {
  return (
    <div className="categories_item lg:min-w-[200px] min-w-[130px] min-h-[40px] p-3 rounded-xl bg-white flex items-center mx-4">
      <div className="image h-[35px] w-[35px] bg-gray-300 rounded-lg "></div>
      <p className="font-medium lg:ml-4 lg:text-base ml-2">Hotels</p>
    </div>
  );
}

function ResultItem() {
  return (
    <div className="topTrip_item bg-gray-50 rounded-lg p-2 w-[48%] lg:min-w-[300px] lg:max-w-[200px] my-8 shadow-md">
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
        ></img>
      </div>
      <div className="topTrip_info py-3">
        <div className="left relative mt-3">
          <h6 className="font-semibold text-sm ">Banijr Kanal </h6>
          <span className="text-gray-400 font-normal text-xs">Camp</span>
          <HeartOutlined className="absolute bottom-0 right-0 p-2 bg-white rounded-full text-xs text-red-400 shadow-md shadow-red-100" />
        </div>
      </div>
    </div>
  );
}
