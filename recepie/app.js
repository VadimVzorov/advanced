/*

IP - name, ingredients, steps
OP - object with keys: name, steps, ingredients + methods: stepsHTML, ingridientsHTML


*/

function recipeFactory(name, ingredients, steps) {
  return {
    name: name,
    steps: steps,
    ingredients: ingredients,

    stepsHtml: function (){
      return "<ol>"+steps.map(function (x){return "<li>"+x+"</li>";}).join("")+"</ol>";
    },

    ingredientsHtml: function (){
      return ingredients.join(", ")
    }

  }
}

/*

 //empty object for future recipe

function recipeFactory(name, ingredients, steps) {
  var recipe = {};
  recipe.name = name;
  recipe.steps = steps;
  recipe.ingredients = ingredients;

  function genHTMLSteps (array){
    var htmlCode;
    for (i=0; i<array.length; i++){
      htmlCode += "<li>"+array[i]+"</li>"; // why it doesn't work with return?
    };
    var htmlCodeFinal = "<ol>"+htmlCode+"</ol>";
    return htmlCodeFinal;
  }

  recipe.stepsHTML = genHTMLSteps(steps);

  function genHTMLIng (array){
    var htmlCode;
    for (i=0; i<array.length; i++){
      if (i!=array.length-1){
        htmlCode += array[i]+",";
      } else {htmlCode += array[i]+".";}
    }
    return htmlCode;
  }

  recipe.ingredientsHtml = genHTMLIng(ingredients);

  return recipe;
}

recipeFactory(
    'grilled cheese',
    ['2 slices bread', 'butter', '1 slice cheese'],
    ['Butter bread', 'Put cheese between bread', 'Toast bread on stove']
  ); 

console.log (recipe.stepsHTML)

*/