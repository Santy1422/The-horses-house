import React, { useState, useEffect } from 'react';

const GoogleMap = ({ ubicacion }) => {
  const [map, setMap] = useState(null);


  useEffect(() => {
    // Función para cargar el script de Google Maps y crear el mapa
    const loadMap = () => {
      const googleMapScript = document.createElement('script');
      googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY&libraries=places`;
      googleMapScript.async = true;
      googleMapScript.defer = true;
      googleMapScript.onload = () => {
        const map = new window.google.maps.Map(document.getElementById('map'), {
          center: { lat: 0, lng: 0 },
          zoom: 10,
        });
        setMap(map);
      };

      document.head.appendChild(googleMapScript);
    };

    if (!map) {
      // Si el mapa no se ha cargado, carga el mapa
      loadMap();
    } else if (ubicacion && map) {
      // Si hay una ubicación y el mapa se ha cargado, actualiza el mapa
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ address: ubicacion }, (results, status) => {
        if (status === 'OK' && results[0]) {
          map.setCenter(results[0].geometry.location);
          const marker = new window.google.maps.Marker({
            map,
            position: results[0].geometry.location,
          });
        } else {
          console.error('Geocode was not successful for the following reason: ' + status);
        }
      });
    }
  }, [ubicacion, map]);

  return (
    <div className="w-full h-96 mb-4 mt-4">
      <div id="map" className="w-full h-full"></div>
    </div>
  );
};

export default GoogleMap;