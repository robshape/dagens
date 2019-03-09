import { useEffect, useState } from 'react';

import { FetchRecipes, Recipes } from '../../types';

const useFetchRecipes = (): FetchRecipes => {
  const [data, setData] = useState<Recipes>([]);
  const [isRequesting, setIsRequesting] = useState(false);

  const request = async (): Promise<void> => {
    setIsRequesting(true);

    // 6479=Billig, 6480=Enkel, 6495=Lättlagat, 6500=Snabb, 7020=Lunch, 7023=Middag
    const response = await fetch('https://www.arla.se/webappsfacet/api/recipes?skip=0&tags[]=6479&tags[]=6480&tags[]=6495&tags[]=6500&tags[]=7020&tags[]=7023');
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
