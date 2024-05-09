import {
   Route,
   createBrowserRouter,
   createRoutesFromElements,
} from 'react-router-dom';
import Root from './Root';
import HomePage from '../home-page/HomePage';
import SearchPage from '../search-page/SearchPage';
import SearchResultsPage from '../search-results-page/SearchResultsPage';
import SearchBreedPage from '../search-breed-page/SearchBreedPage';
import SearchBreedResultsPage from '../search-breed-results-page/SearchBreedResultsPage';
import BreedPage from '../breed-page/BreedPage';
import CatFactsPage from '../cat-facts-page/CatFactsPage';
import FactPage from '../fact-page/FactPage';

export const router = createBrowserRouter(
   createRoutesFromElements(
      <Route path="/" element={<Root />}>
         <Route path="" element={<HomePage />} />
         <Route path="search" element={<SearchPage />} />
         <Route path="search/results" element={<SearchResultsPage />} />
         <Route path="search-breed" element={<SearchBreedPage />} />
         <Route
            path="search-breed/results"
            element={<SearchBreedResultsPage />}
         />
         <Route path="breed" element={<BreedPage />} />
         <Route path="cat-facts" element={<CatFactsPage />} />
         <Route path="cat-facts/fact" element={<FactPage />} />
      </Route>
   )
);
