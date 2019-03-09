import { Recipes } from '../../types';

export interface FetchRecipes {
  data: Recipes;
  isRequesting: boolean;
}
