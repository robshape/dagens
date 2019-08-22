import { useEffect, useState } from 'react';

import { FetchRecipe } from './type';
import { Recipe } from '../../../../common/type';

const RECIPES_COUNT = 149; // Total number of recipes provided by API (2019-08-21).
const RECIPES_INCREMENT = 20; // API serves recipes in increments of 20.
const RECIPES_TAGS = '&tags[]=6479&tags[]=6480&tags[]=6495&tags[]=6500&tags[]=7020&tags[]=7023'; // Recipe categories to filter for: 6479=Billig, 6480=Enkel, 6495=Lättlagat, 6500=Snabb, 7020=Lunch, 7023=Middag.

const randomNumber = (max: number): number => {
  const number = Math.random() * max;
  return Math.floor(number);
};

const randomNumberWithIncrement = (max: number, increment: number): number => {
  const seed = Math.floor((max - increment) / increment);
  const number = Math.random() * seed;
  return Math.floor(number) * increment;
};

export const useFetchRecipe = (): FetchRecipe => {
  const [data, setData] = useState<Recipe>();
  const [isFetching, setIsFetching] = useState(false);

  useEffect((): void => {
    const fetchData = async (): Promise<void> => {
      setIsFetching(true);

      const skip = randomNumberWithIncrement(RECIPES_COUNT, RECIPES_INCREMENT);
      const response = await fetch(`https://www.arla.se/webappsfacet/api/recipes?skip=${skip}${RECIPES_TAGS}`);
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
