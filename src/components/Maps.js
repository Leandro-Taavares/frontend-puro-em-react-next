import React from 'react';
import {GoogleMap, useLoadScript, Marker, LoadScript} from "@react-google-maps/api"

const Map = ({ hideTitle = false, smallSize = false }) => {
  const defaultProps = {
    center: {
      lat: -34.397,
      lng: 150.644,
    },
    zoom: 8,
  };

  return (
    <div className={`map-container ${smallSize ? 'small' : ''}`}>
      {!hideTitle && (
        <div className="onde_encontrar">
          <h3 className="titulo_onde_encontrar">Onde nos encontrar?</h3>
          <div className="seta"></div>
        </div>
      )}
      <div id="map" className="map">
        <LoadScript googleMapsApiKey='AIzaSyCDCkBnwmO2WDKZF9C9H68w-WmeFSrHZfs'>
        <GoogleMap
          mapContainerStyle={{height: '400px', width:'100%' }}
          center={defaultProps.center}
          zoom={defaultProps.zoom}
        >
          <Marker
            lat={-34.397}
            lng={150.644}
            text="Localização"
          />
        </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
};

export default Map;