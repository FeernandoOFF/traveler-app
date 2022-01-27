import axios from 'axios';
import { API } from '../pages/explore';

const URL = 'https://travel-advisor.p.rapidapi.com/hotels/list-in-boundary';

export const getPlacesData = async (sw, ne) => {
  const options = {
    params: {
      // bl_latitude: sw.lat,
      // bl_longitude: sw.lng,
      // tr_longitude: ne.lat,
      // tr_latitude: ne.lng,
      bl_latitude: '11.847676',
      bl_longitude: '108.473209',
      tr_longitude: '109.149359',
      tr_latitude: '12.838442',
      limit: '30',
    },
    headers: {
      'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
      'x-rapidapi-key': 'f20596972dmsh5b99a42f12b7552p15cbdfjsn8d56df9f2def',
    },
  };
  // console.log(options);

  try {
    const c = {
      method: 'get',
      url: `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522%2C151.1957362&radius=1500&type=restaurant&keyword=cruise&key=${API}`,
      headers: {},
    };
    const data = await axios(c);
    console.log(data);
    return [];
    //   const {
    //     data: { data },
    //   } = await axios(URL, options);
    //   console.log(data);
    //   return data;
  } catch (error) {
    console.log(error);
  }
};
