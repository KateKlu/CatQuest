import imgSrc from '../../img/search-breed-cats.jpg';
import './fact-page.css';

export const CatPhoto = () => {
   return <img src={imgSrc} alt="Random cat image" className="cat-img" />;
};
