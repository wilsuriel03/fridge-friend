'use client';

import { Map as Mapview } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

export default function Map() {
  return (
    <div className="h-full w-full">
      <Mapview
        initialViewState={{
          longitude: -90.071533,
          latitude: 29.951065,
          zoom: 12,
        }}
        style={{
          width: '100%',
          height: '100vh',
        }}
        scrollZoom={false}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
      ></Mapview>
    </div>
  );
}