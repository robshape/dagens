import { useEffect, useState } from 'react';

import { randomNumber, randomNumberWithIncrement } from './utils';
import { Recipe, Recipes } from '../../../types';

const COUNT = 149; // The total number of recipes provided by the API (2019-08-21).
const INCREMENT = 20; // The API serves recipes in increments of 20.
const TAGS = '&tags[]=6479&tags[]=6480&tags[]=6495&tags[]=6500&tags[]=7020&tags[]=7023'; // The recipe categories to filter on: 6479=Billig, 6480=Enkel, 6495=Lättlagat, 6500=Snabb, 7020=Lunch, 7023=Middag.

type Returns = {
  data?: Recipe;
  error: string;
  isFetching: boolean;
};

export const useFetchRecipe = (): Returns => {
  const [data, setData] = useState<Recipe>();
  const [error, setError] = useState('');
  const [isFetching, setIsFetching] = useState(false);

  useEffect((): void => {
    const fetchData = async (): Promise<void> => {
      setError('');
      setIsFetching(true);

      const skip = randomNumberWithIncrement(COUNT, INCREMENT);
      try {
        const response = await fetch(
          `https://cors-anywhere.herokuapp.com/https://www.arla.se/webappsfacet/api/recipes?skip=${skip}${TAGS}`
        ); // CORS Anywhere enables cross-origin requests to... anywhere!
        const json = await (response.json() as Promise<{ cards: Recipes }>);

        const recipes = Recipes.check(json.cards);
        const index = randomNumber(recipes.length);
        const recipe = recipes[index];

        setData(recipe);
      } catch (err) {
        if ((err as Error)?.message) {
          const message = (err as Error).toString();
          setError(message);
          return;
        }

        setError('Unknown error');
      } finally {
        setIsFetching(false);
      }
    };

    void fetchData();
  }, []);

  return {
    data,
    error,
    isFetching,
  };
};
