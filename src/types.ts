import * as t from 'runtypes';

export const Recipe = t
  .Record({
    ImageUrl: t.String,
    Name: t.String,
    PreparationTotalTime: t.String,
    RatingAverage: t.Number,
    Url: t.String,
  })
  .asReadonly()
  .withConstraint((recipe) => !!recipe.ImageUrl)
  .withConstraint((recipe) => !!recipe.Name)
  .withConstraint((recipe) => !!recipe.Url);
export type Recipe = t.Static<typeof Recipe>;

export const Recipes = t
  .Array(Recipe)
  .asReadonly()
  .withConstraint((recipes) => !!recipes.length);
export type Recipes = t.Static<typeof Recipes>;
