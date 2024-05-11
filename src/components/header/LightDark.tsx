import { useEffect, useState } from 'react';

export const LightDark = () => {
   const [modeLabel, setModeLabel] = useState<'Light 🌞' | '🌜 Dark'>(
      'Light 🌞'
   );
   const [prefersLight, setPrefersLight] = useState<boolean>(
      window.matchMedia('(prefers-color-scheme: light)').matches
   );
   const body = document.querySelector('body');

   useEffect(() => {
      const updatePrefersLight = (event: MediaQueryListEvent) => {
         setPrefersLight(event.matches);
      };

      const mediaQueryList = window.matchMedia('(prefers-color-scheme: light)');
      mediaQueryList.addEventListener('change', updatePrefersLight);

      return () => {
         mediaQueryList.removeEventListener('change', updatePrefersLight);
      };
   }, []);

   useEffect(() => {
      if (prefersLight) {
         setModeLabel('🌜 Dark');
         body?.classList.remove('light-mode');
         return;
      }
      if (!prefersLight) {
         setModeLabel('Light 🌞');
         body?.classList.remove('dark-mode');
         return;
      }
   }, [prefersLight, body?.classList]);

   const handleClick = () => {
      if (!prefersLight) {
         body?.classList.toggle('light-mode');
         setModeLabel((prevMode) =>
            prevMode === 'Light 🌞' ? '🌜 Dark' : 'Light 🌞'
         );
         return;
      }

      if (prefersLight) {
         body?.classList.toggle('dark-mode');
         setModeLabel((prevMode) =>
            prevMode === '🌜 Dark' ? 'Light 🌞' : '🌜 Dark'
         );
      }
   };
   return (
      <button className="light-dark" onClick={handleClick}>
         {modeLabel}
      </button>
   );
};
