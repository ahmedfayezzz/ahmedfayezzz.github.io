/* eslint-disable no-unused-expressions */

//All kind of fetches for receipts

// eslint-disable-next-line no-lone-blocks
{
  // find N of random meals
'N * single random meal'
('https://www.themealdb.com/api/json/v1/1/random.php')

// find N of meals in category
'all categories => filter by category => search by meal id'
// ('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
// =>('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
// =>('https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772')

// find N of meals in Area
'all Areas => filter by Area => search by meal id'
// ('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
// =>('https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian')
// =>('https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772')

// find N of meals in Ingredient
'all Ingredient => filter by Ingredient => search by meal id'
// ('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
// =>('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast')
// =>('https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772')

}

// search for meals by name
('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')

// search for meals by available ingredients
('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast')