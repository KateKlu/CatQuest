// import { useState } from 'react';

// export const FetchData = async (url: string) => {
//    const [data, setData] = useState('');
//    try {
//       const response = await fetch(url);

//       if (response.ok) {
//          const fetchedData = await response.json();

//          setData(fetchedData);
//       } else {
//          console.error('Failed to fetch data:', response.statusText);
//       }
//    } catch (error) {
//       console.error('Error fetching cat fact:', error);
//    }

//    return data;
// };
///////////////////////////

export const FetchData = async (url: string) => {
   try {
      const response = await fetch(url);
      if (!response.ok) {
         throw new Error('Failed to fetch data: ' + response.statusText);
      }
      const fetchedData = await response.json();
      return fetchedData;
   } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
   }
};
