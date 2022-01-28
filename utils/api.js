import axios from 'axios';
import { API } from '../pages/explore';

const URL = 'https://travel-advisor.p.rapidapi.com/hotels/list-in-boundary';

export const getPlacesData = async (sw, ne, filter = 'catering.restaurant') => {
  console.log(sw, ne);
  try {
    const data = await axios.get(
      `https://api.geoapify.com/v2/places?categories=${filter}&filter=rect:${sw.lng},${sw.lat},${ne.lng},${ne.lat}&limit=100&apiKey=${process.env.NEXT_PUBLIC_GEOAPIFY}`
    );
    return await data.data.features;
  } catch (error) {
    console.log(error);
  }
};
