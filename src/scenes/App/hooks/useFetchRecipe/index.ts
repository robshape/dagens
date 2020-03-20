import { useEffect, useState } from 'react';

import { FetchRecipe } from './type';
import { randomNumber, randomNumberWithIncrement } from './util';
import { Recipe } from '../../../../types/Recipe';
import { RECIPES_COUNT, RECIPES_INCREMENT, RECIPES_TAGS } from './constant';

export const useFetchRecipe = (): FetchRecipe => {
  const [data, setData] = useState<Recipe>();
  const [isFetching, setIsFetching] = useState(false);

  useEffect((): void => {
    const fetchData = async (): Promise<void> => {
      setIsFetching(true);

      const skip = randomNumberWithIncrement(RECIPES_COUNT, RECIPES_INCREMENT);
      // CORS Anywhere enables cross-origin requests to anywhere.
      const response = await fetch(`https://cors-anywhere.herokuapp.com/https://www.arla.se/webappsfacet/api/recipes?skip=${skip}${RECIPES_TAGS}`);
      const { recipes } = await response.json();

      const index = randomNumber(recipes.length);
      const recipe = recipes[index];
      setData(recipe);

      setIsFetching(false);
    };

    fetchData();
  }, []);

  return {
    data,
    isFetching,
  };
};
