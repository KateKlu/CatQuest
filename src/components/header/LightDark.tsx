import { useState } from 'react';

export const LightDark = () => {
   const [modeName, setModeName] = useState<'Light 🌞' | '🌜 Dark'>('Light 🌞');
   const handleClick = () => {
      const body = document.querySelector('body');
      body?.classList.toggle('light-mode');
      setModeName((prevMode) =>
         prevMode === 'Light 🌞' ? '🌜 Dark' : 'Light 🌞'
      );
   };
   return (
      <button className="light-dark" onClick={handleClick}>
         {modeName}
      </button>
   );
};
