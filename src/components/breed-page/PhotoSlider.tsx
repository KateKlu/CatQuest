import FetchData from '../../utils/fetch';
import { PhotoSliderContent } from './PhotoSliderContent';

interface PhotoRes {
   url: string;
}

interface PhotoSliderProps {
   breedId: string;
}

export const PhotoSlider: React.FC<PhotoSliderProps> = ({ breedId }) => {
   const reqUrl = `https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=${breedId}`;
   const { data, error } = FetchData<PhotoRes[]>(reqUrl);

   if (error) {
      console.error(`Error fetching data: ${error.message}`);
      return <p className="message">Some error occurred</p>;
   }
   if (data) {
      return <PhotoSliderContent images={data.map((item) => item.url)} />;
   } else {
      return <p className="message">Loading...</p>;
   }
};
