import { CatQualities } from './CatQualities';

export const BreedDescription = () => {
   return (
      <div className="breed-description">
         <CatQualities />
         <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, qui provident nam blanditiis, cum itaque distinctio
            error quod ab assumenda quasi perferendis illum accusantium repellat
            quam fugit dolor reprehenderit quo.
         </p>
         <ul className="sorce-links">
            <li>
               <a href="http://" target="_blank" rel="noopener noreferrer">
                  {'VetStreet >>>'}
               </a>
            </li>
            <li>
               <a href="http://" target="_blank" rel="noopener noreferrer">
                  {'Wikipedia >>>'}
               </a>
            </li>
         </ul>
      </div>
   );
};
