import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface BreedByNameProps {
   nameValue: string;
}
export const BreedByName: React.FC<BreedByNameProps> = ({ nameValue }) => {
   const [breedName, setBreedName] = useState(nameValue);
   const navigate = useNavigate();

   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      navigate('/search-breed/results', { state: { parameters: breedName } });
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
         {/* {click && (
            <Navigate
               to="/search-breed/results"
               state={{ parameters: breedName }}
            />
         )} */}
      </form>
   );
};
