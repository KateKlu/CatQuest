import './fact-page.css';

export const CatFact = () => {
   const fact =
      'The richest cat is Blackie who was left £15 million by his owner, Ben Rea.';
   return <p className="fact-text">{fact}</p>;
};
