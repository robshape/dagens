import { Recipes } from '../../common/type';

export interface FetchRecipes {
  data: Recipes;
  isRequesting: boolean;
}
