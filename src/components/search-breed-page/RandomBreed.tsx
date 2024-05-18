import { Link } from 'react-router-dom';
// import FetchData from '../../utils/fetch';
// import { BreedsResponse } from '../search-results-page/search-results.types';
// import { useState } from 'react';

// interface RandomBreedRes {
//    breeds: BreedsResponse[];
// }

// const handleClick = () => {
//    const { data, error } = FetchData<RandomBreedRes[]>(
//       'https://api.thecatapi.com/v1/images/search?limit=1&has_breeds=true&api_key=live_Wb4BneErmU5HaoOQybcKsVsUAqBP6xCmS4Z6E0qWnaigixhsEZqhWYfPp5ejsoiX'
//    );
//    if (error) {
//       console.error(`Error fetching fact: ${error.message}`);
//       return <p className="fact-text">Some error occurred</p>;
//    }
//    if (data) {
//       console.log('resp');
//       console.log(data);
//       const breedInfo: BreedsResponse = data[0].breeds[0];
//       console.log(breedInfo);
//    }
// };

export const RandomBreed = () => {
   return (
      <div className="random-breed">
         <h2>Try your luck and look at a random breed</h2>
         {/* {error && <p>{error}</p>} */}
         <Link to="/breed">
            <button className="btn" /*onClick={handleClick}*/>Show</button>
         </Link>
      </div>
   );
};
