import { Link } from 'react-router-dom';

export const RandomBreed = () => {
   return (
      <div className="random-breed">
         <h2>Try your luck and look at a random breed</h2>
         {/* {error && <p>{error}</p>} */}
         <Link to="/breed">
            <button className="btn">Show</button>
         </Link>
      </div>
   );
};
