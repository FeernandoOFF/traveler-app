import GoogleMapReact from 'google-map-react';
import React from 'react';
import { Menu } from '../components/Menu';

export default function Explore() {
  return (
    <div>
      <Map />
      explore
      <Menu />
    </div>
  );
}

function Map() {
  const coordenades = { lat: 0, lng: 0 };

  return (
    <div className="min-w-[100vw] min-h-[100vh] w-[100vw] h-[100vh]">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDqP5bHVCYXLH0zuVsbNQpS0ZWVNbW-hRs' }}
        center={coordenades}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        defaultCenter={coordenades}
        options={{}}
        onChange={() => {}}
        onChildClick={() => {}}
      ></GoogleMapReact>
    </div>
  );
}
