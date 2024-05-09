import cat from '../../img/CatFactsPage/cat3.jpg';

export const PhotoSlider = () => {
   return (
      <div className="slider">
         <img src={cat} alt="Breed photo" className="breed-img" />
      </div>
   );
};
