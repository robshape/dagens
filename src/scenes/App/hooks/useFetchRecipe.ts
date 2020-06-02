import { useEffect, useState } from 'react';

import { randomNumber, randomNumberWithIncrement } from './utils';
import { Recipe } from '../../../types';

const COUNT = 149; // Total number of recipes provided by API (2019-08-21).
const INCREMENT = 20; // API serves recipes in increments of 20.
const TAGS = '&tags[]=6479&tags[]=6480&tags[]=6495&tags[]=6500&tags[]=7020&tags[]=7023'; // Recipe categories to filter for: 6479=Billig, 6480=Enkel, 6495=Lättlagat, 6500=Snabb, 7020=Lunch, 7023=Middag.

export const useFetchRecipe = (): { data?: Recipe, isFetching: boolean } => {
  const [data, setData] = useState<Recipe>();
  const [isFetching, setIsFetching] = useState(false);

  useEffect((): void => {
    const fetchData = async (): Promise<void> => {
      setIsFetching(true);

      const skip = randomNumberWithIncrement(COUNT, INCREMENT);
      // CORS Anywhere enables cross-origin requests to... anywhere!
      const response = await fetch(`https://cors-anywhere.herokuapp.com/https://www.arla.se/webappsfacet/api/recipes?skip=${skip}${TAGS}`);
      const { recipes } = await (response.json() as Promise<{ recipes: Recipe[] }>);

      const index = randomNumber(recipes.length);
      const recipe = recipes[index];
      setData(recipe);

      setIsFetching(false);
    };

    void fetchData();
  }, []);

  return {
    data,
    isFetching,
  };
};
