import { Link } from 'react-router-dom';

export const RandomBreed = () => {
   return (
      <div className="random-breed">
         <h2>Try your luck and look at a random breed</h2>
         <button className="btn">
            <Link to="/breed">Show</Link>
         </button>
      </div>
   );
};
