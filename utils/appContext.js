import React, { useContext, createContext, useState, useEffect } from 'react';

//Context
export const AppContext = createContext(null);

//Provider
export const AppContextProvider = ({ children }) => {
  const [coordenades, setCoordenades] = useState([]);
  const [locationError, setError] = useState(false);

  const [variableState, setVariableState] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordenades([latitude, longitude]);
        console.log('USER LOCATION', latitude, longitude);
      },
      () => setError(true)
    );
  }, []);

  //
  const values = React.useMemo(
    () => ({
      variableState, // States que seran visibles en el contexto.
      setVariableState, // Funciones que son exportadas para manejo externo.
      setCoordenades,
      coordenades,
      locationError,
    }),
    [
      variableState,
      setVariableState,
      locationError,
      coordenades,
      setCoordenades,
    ]
  );
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

//
export function useAppContext() {
  const context = useContext(AppContext);

  if (!context) {
    console.error('Error deploying App Context!!!');
  }

  return context;
}
