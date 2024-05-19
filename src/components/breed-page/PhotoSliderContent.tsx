import { useEffect, useRef, useState } from 'react';

interface PhotoSliderContentProps {
   images: string[];
}

export const PhotoSliderContent: React.FC<PhotoSliderContentProps> = ({
   images,
}) => {
   const [currentIndex, setCurrentIndex] = useState<number>(0);
   const timerRef = useRef<number | null>(null);

   const goToNextSlide = () => {
      setCurrentIndex((prevIndex) =>
         prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
   };

   const goToPrevSlide = () => {
      setCurrentIndex((prevIndex) =>
         prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
   };

   useEffect(() => {
      const interval = setInterval(goToNextSlide, 3000);
      timerRef.current = interval;

      return () => {
         if (timerRef.current) {
            clearInterval(timerRef.current);
         }
      };
   }, []);

   const handlePrevClick = () => {
      if (timerRef.current) {
         clearInterval(timerRef.current);
      }
      goToPrevSlide();
   };

   const handleNextClick = () => {
      if (timerRef.current) {
         clearInterval(timerRef.current);
      }
      goToNextSlide();
   };

   return (
      <div className="slider">
         <button onClick={handlePrevClick} className="btn slider-btn">
            {'<'}
         </button>
         <figure className="slider-back">
            <img
               src={images[currentIndex]}
               alt="Breed photo"
               className="breed-img"
            />
         </figure>
         <button onClick={handleNextClick} className="btn slider-btn">
            {'>'}
         </button>
      </div>
   );
};
