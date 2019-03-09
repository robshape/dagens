export interface FetchRecipes {
  data: Recipes;
  isRequesting: boolean;
}

export type Recipes = {
  Name: string;
}[]
