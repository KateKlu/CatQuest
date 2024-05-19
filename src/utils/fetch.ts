import { useEffect, useState } from 'react';

function FetchData<ResponseType>(url: string) {
   const [data, setData] = useState<ResponseType | null>(null);
   const [error, setError] = useState<Error | null>(null);

   useEffect(() => {
      (async () => {
         const controller = new AbortController();
         const abortSignal = controller.signal;

         try {
            const response = await fetch(
               url,
               { signal: abortSignal }
               // { mode: 'no-cors' }
            );

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
