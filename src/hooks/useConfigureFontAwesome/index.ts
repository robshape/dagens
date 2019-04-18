import { faStar, faStopwatch } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { useEffect } from 'react';

export const useConfigureFontAwesome = (): void => {
  useEffect((): () => void => {
    library.add(
      faStar,
      faStopwatch,
    );

    return (): void => {
      library.reset();
    };
  }, []);
};
