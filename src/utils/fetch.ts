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

// export const FetchData = async (url: string) => {
//    try {
//       const response = await fetch(url);
//       if (!response.ok) {
//          throw new Error('Failed to fetch data: ' + response.statusText);
//       }
//       const fetchedData = await response.json();
//       return fetchedData;
//    } catch (error) {
//       console.error('Error fetching data:', error);
//       throw error;
//    }
// };
////////////////////////
// export const FetchData = async (url: string) => {
//    try {
//       const response = await fetch(url);
//       if (!response.ok) {
//          if (response.status === 404) {
//             throw new Error(`Data not found`);
//          } else {
//             throw new Error(`Failed to fetch data: ${response.statusText}`);
//          }
//       }
//       const fetchedData = await response.json();
//       return fetchedData;
//    } catch (error) {
//       const typedError = error as Error;
//       console.error(`Error fetching data: ${typedError.message}`);
//       throw typedError;
//    }
// };
//////////////////////
import { useEffect, useState } from 'react';

function FetchData<ResponseType>(url: string) {
   const [data, setData] = useState<ResponseType | null>(null);
   const [error, setError] = useState<Error | null>(null);

   useEffect(() => {
      (async () => {
         const controller = new AbortController();
         const abortSignal = controller.signal;

         try {
            const response = await fetch(url, { signal: abortSignal });

            if (response.ok) {
               const fetchedData = await response.json();
               setData(fetchedData);
            } else {
               console.error('Failed to fetch data:', response.statusText);
            }
         } catch (error) {
            setError(error as Error);
         }
         return () => controller.abort();
      })();
   }, [url]);

   return { data, error };
}

export default FetchData;
