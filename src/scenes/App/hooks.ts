import { useEffect, useState } from 'react';

import { FetchRecipes } from './type';
import { randomNumberWithIncrement } from '../../common/number';
import { Recipes } from '../../common/type';

const RECIPES_COUNT = 282; // Total number of recipes provided by API (2019-03-09).
const RECIPES_INCREMENT = 20; // API serves recipes in increments of 20.
const RECIPES_TAGS = '&tags[]=6479&tags[]=6480&tags[]=6495&tags[]=6500&tags[]=7020&tags[]=7023'; // Recipe categories to filter for: 6479=Billig, 6480=Enkel, 6495=Lättlagat, 6500=Snabb, 7020=Lunch, 7023=Middag.

const useFetchRecipes = (): FetchRecipes => {
  const [data, setData] = useState<Recipes>([]);
  const [isRequesting, setIsRequesting] = useState(false);

  const request = async (): Promise<void> => {
    setIsRequesting(true);

    const skip = randomNumberWithIncrement(RECIPES_COUNT, RECIPES_INCREMENT);
    const response = await fetch(`https://www.arla.se/webappsfacet/api/recipes?skip=${skip}${RECIPES_TAGS}`);
    const { recipes } = await response.json();
    setData(recipes);

    setIsRequesting(false);
  };

  useEffect(() => {
    if (data.length) return;
    if (isRequesting) return;

    request();
  }, [data, isRequesting, request]);

  return {
    data,
    isRequesting,
  };
};

export default useFetchRecipes;
