import { Recipe } from '../../common/type';

export interface FetchRecipe {
  data?: Recipe;
  isRequesting: boolean;
}
