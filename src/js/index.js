// Global app controller
import "../scss/main.scss";
import { axios } from "./vendor";

async function getResults(query) {
   try {
      const res = await axios(
         `https://forkify-api.herokuapp.com/api/search?q=${query}`
      );
      const recipes = res.data.recipes;

      console.log(recipes);
   } catch (error) {
      alert(error);
   }
}

getResults("sweet potato");
