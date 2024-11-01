import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Polyline } from '@react-google-maps/api';
import axios from 'axios';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: -34.6037,
  lng: -58.3816
};

function Map() {
  const [espacios, setEspacios] = useState([]);

  useEffect(() => {
    axios.get('/espacios')
      .then(response => {
        // Verificar que la respuesta es un array, en caso contrario asignar un array vacío
        setEspacios(Array.isArray(response.data) ? response.data : []);
      })
      .catch(error => {
        console.error(error);
        // En caso de error, mantener espacios como un array vacío
        setEspacios([]);
      });
  }, []);

  const getColor = (estado) => {
    if (estado === 'libre') return '#0000FF';
    if (estado === 'ocupado') return '#FF0000';
    return '#FFFF00';
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyCyWfLjRUvz_eRsjLXycIaRe6_HDNmWxDw">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
      >
        {espacios.map(espacio => (
          <div key={espacio.id}>
            <Polyline
              path={[{ lat: espacio.latInicio, lng: espacio.lngInicio }, { lat: espacio.latFin, lng: espacio.lngFin }]}
              options={{
                strokeColor: getColor(espacio.estado),
                strokeOpacity: 0.8,
                strokeWeight: 4
              }}
            />
            <button onClick={() => {
              axios.post(`/espacios/${espacio.id}/actualizar`, { estado: 'ocupado' })
                .then(response => {
                  const updatedEspacios = espacios.map(e => e.id === espacio.id ? response.data : e);
                  setEspacios(updatedEspacios);
                })
                .catch(error => console.error(error));
            }}>
              Ocupar Espacio
            </button>
          </div>
        ))}
      </GoogleMap>
    </LoadScript>
  );
}

export default Map;
