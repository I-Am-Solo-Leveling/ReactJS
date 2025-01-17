import { useEffect } from 'react';
import axios from 'axios';
// limit, if 429 wait for 15 min and try again
const url = 'https://www.course-api.com/react-store-products';

const FirstRequest = () => {
  //alternate declare this function outside useEffect and call in
  /*    const fetchData = async () => {
      try {
        const response = await axios(url);
        console.log(response);
      } catch (error) {
        console.log(error.response);
      }
    };*/

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios(url);
        const data = response.data;
        console.log(data);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, []);

  return <h2 className="text-center">first request</h2>;
};
export default FirstRequest;
