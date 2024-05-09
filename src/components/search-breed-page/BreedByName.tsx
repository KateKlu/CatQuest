export const BreedByName = () => {
   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
   };

   return (
      <form className="search-breed-form" onSubmit={handleSubmit}>
         <input
            type="text"
            name=""
            id="breedName"
            className="breed-name"
            placeholder="breed name"
         />
         <input type="submit" value="🔎" className="btn" />
      </form>
   );
};
