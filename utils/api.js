import axios from 'axios';
import { API } from '../pages/explore';

const URL = 'https://travel-advisor.p.rapidapi.com/hotels/list-in-boundary';

export const getPlacesData = async (
  sw,
  ne,
  filter = 'catering.restaurant',
  limit = 40
) => {
  try {
    const data = await axios.get(
      `https://api.geoapify.com/v2/places?categories=${filter}&filter=rect:${sw.lng},${sw.lat},${ne.lng},${ne.lat}&limit=${limit}&apiKey=${process.env.NEXT_PUBLIC_GEOAPIFY}`
    );
    return await data.data.features;
  } catch (error) {
    console.log(error);
  }
};
export const getPlacesByRadius = async ({
  lat,
  lng,
  radius = 1000,
  filter = 'tourism.attraction',
  limit = 40,
}) => {
  try {
    const data = await axios.get(
      `https://api.geoapify.com/v2/places?categories=${filter}&filter=circle:${lng},${lat},${radius}&bias=proximity:${lng},${lat}&limit=${limit}&apiKey=${process.env.NEXT_PUBLIC_GEOAPIFY}`
    );
    return data.data.features;
  } catch (error) {
    console.log(error);
  }
};

export const getAutoComplete = async (query) => {
  try {
    const {
      data: { results },
    } = await axios.get(
      `https://api.geoapify.com/v1/geocode/autocomplete?text=${query}&format=json&apiKey=${process.env.NEXT_PUBLIC_GEOAPIFY}`
    );
    return results;
  } catch (error) {
    console.log(error);
  }
};
