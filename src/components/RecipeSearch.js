import "../styles.css";
import React from "react";

export default class RecipeSearch extends React.Component {
  state = {
    recipes: [
      "Apple Pie",
      "Cherry Pie",
      "Pizza",
      "Burger",
      "Steak",
      "Chocolate"
    ],
    searchTerm: ""
  };

  render() {
    let matchRecipes = this.state.recipes.filter((recipe) => {
      return recipe
        .toLocaleLowerCase()
        .includes(this.state.searchTerm.toLocaleLowerCase());
    });

    let recipes = matchRecipes.map((recipe) => {
      return <p>{recipe}</p>;
    });
    // console.log(this.state.searchTerm);
    return (
      <div className="recipes">
        <h3>Recipe Search App</h3>
        <input
          type="text"
          onChange={(e) => this.setState({ searchTerm: e.target.value })}
        ></input>
        {recipes}
      </div>
    );
  }
}
