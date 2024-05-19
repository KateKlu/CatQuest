// import { useCatQualitiesContext } from '../useCatQualitiesContext';

// interface CatQualityInputProps {
//    quality: string;
// }

// const CatQualityInput: React.FC<CatQualityInputProps> = ({ quality }) => {
//    const { catQualities, setCatQualities } = useCatQualitiesContext();
//    const handleChangeInputValue = (
//       event: React.ChangeEvent<HTMLInputElement>
//    ) => {
//       const { name, value } = event.target;
//       setCatQualities((prevParams) => ({
//          ...prevParams,
//          [name]: +value,
//       }));
//    };
//    return (
//       <input
//          type="range"
//          id={quality}
//          name={quality}
//          min="1"
//          max="5"
//          value={catQualities[quality]}
//          step="1"
//          onChange={handleChangeInputValue}
//       />
//    );
// };

// export default CatQualityInput;

import { useCallback } from 'react';
import { useCatQualitiesContext } from '../useCatQualitiesContext';

interface CatQualityInputProps {
   quality: string;
}

const CatQualityInput: React.FC<CatQualityInputProps> = ({ quality }) => {
   const { catQualities, setCatQualities } = useCatQualitiesContext();

   const handleChangeInputValue = useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
         const { name, value } = event.target;
         setCatQualities((prevParams) => ({
            ...prevParams,
            [name]: +value,
         }));
      },
      [setCatQualities]
   );

   return (
      <input
         type="range"
         id={quality}
         name={quality}
         min="1"
         max="5"
         value={catQualities[quality]}
         step="1"
         onChange={handleChangeInputValue}
      />
   );
};

export default CatQualityInput;
