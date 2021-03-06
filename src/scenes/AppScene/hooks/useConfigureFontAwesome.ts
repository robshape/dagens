import { faClock, faSadTear, faStar } from '@fortawesome/free-regular-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { useEffect } from 'react';

export const useConfigureFontAwesome = (): void => {
  useEffect((): (() => void) => {
    library.add(faClock, faSadTear, faStar);
    return (): void => {
      library.reset();
    };
  }, []);
};
