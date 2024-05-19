import { useState } from 'react';
import { Navigate } from 'react-router-dom';

export const BreedByName = () => {
   const [breedName, setBreedName] = useState('');
   const [click, setClick] = useState(false);
   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setClick(true);
   };

   return (
      <form className="search-breed-form" onSubmit={handleSubmit}>
         <input
            type="text"
            id="breedName"
            value={breedName}
            onChange={(e) => setBreedName(e.target.value)}
            className="breed-name"
            placeholder="breed name"
            autoComplete="off"
            autoCorrect="off"
         />
         <input type="submit" value="🔎" className="btn" />
         {click && <Navigate to="results" state={{ parameters: breedName }} />}
      </form>
   );
};
