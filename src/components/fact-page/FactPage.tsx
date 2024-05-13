import { Link } from 'react-router-dom';
import { CatPhoto } from './CatPhoto';
import { CatFact } from './CatFact';
import './fact-page.css';

function FactPage() {
   return (
      <div className="container fact-page">
         <h1>Did you know that?</h1>
         <CatPhoto />
         <CatFact />
         <Link to="/cat-facts">
            <button className="btn">Back</button>
         </Link>
      </div>
   );
}
export default FactPage;

//////////////////////////////////

// import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { FetchData } from './fetch';
// import { CatPhoto } from './CatPhoto';
// import { CatFact } from './CatFact';
// import { CatRandomFact, CatRandomPhoto } from './fact-page.types';
// import './fact-page.css';

// function FactPage() {
//    const [catPhoto, setCatPhoto] = useState<string>('');
//    const [catFact, setCatFact] = useState<string>('');
//    const [photoError, setPhotoError] = useState<string | null>(null);
//    const [factError, setFactError] = useState<string | null>(null);

//    useEffect(() => {
//       const fetchData = async () => {
//          try {
//             const photoData: CatRandomPhoto[] = await FetchData(
//                'https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1'
//             );
//             setCatPhoto(photoData[0].url);
//          } catch (photoError) {
//             setPhotoError('Something went wrong...');
//          }

//          try {
//             const factData: CatRandomFact = await FetchData(
//                'https://catfact.ninja/fact'
//             );
//             setCatFact(factData.fact);
//          } catch (factError) {
//             setFactError('Something went wrong...');
//          }
//       };

//       fetchData();
//    }, []);

//    return (
//       <div className="container fact-page">
//          <h1>Did you know that?</h1>
//          <CatPhoto photoUrl={catPhoto} error={photoError} />
//          <CatFact fact={catFact} error={factError} />
//          <Link to="/cat-facts">
//             <button className="btn">Back</button>
//          </Link>
//       </div>
//    );
// }

// export default FactPage;

// catch (photoError) {
// if (error.message === 'Photo not found') {
//    setPhotoError('Photo not found');
// } else {
//    setFactError('Failed to fetch fact');
// }
//    setPhotoError('Something went wrong...');
// }
