import axios from "axios";

const axiosInstancia = axios.create({
  // creamos la base de axios, con una ruta base del backend, extraidas de las variables de entorno
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 5000,
});

axiosInstancia.interceptors.request.use(
  (config) => {
    const dataDelUsuario = localStorage.getItem("data_usuario"); // traemos la data del usuario logueado, donde incluye el token => {user,token}
    if (dataDelUsuario) {
      // si hay token, lo incluimos en la consulta, sino no
      const dataTransformada = JSON.parse(dataDelUsuario)
      config.headers.Authorization = `Bearer ${dataTransformada.token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default axiosInstancia; // exportamos la configuracion para usarla en cualquier parte del codigo
