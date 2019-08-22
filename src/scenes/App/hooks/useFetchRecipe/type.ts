import { Recipe } from '../../../../types/Recipe';

export interface FetchRecipe {
  data?: Recipe;
  isFetching: boolean;
}
