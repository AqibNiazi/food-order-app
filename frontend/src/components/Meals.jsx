import React from "react";
import MealItem from "./MealItem";
import useHTTP from "../hooks/useHTTP";
import Error from "./Error";
const baseUrl = import.meta.env.VITE_API_URL;
const requestConfig = {};

const Meals = () => {
  const {
    data: loadedMeals,
    isLoading,
    error,
  } = useHTTP(`${baseUrl}/api/meals`, requestConfig, []);

  if (isLoading) {
    return <p className="center">Fetching Meals...</p>;
  }

  if (error) {
    return <Error title="Failed to fetch meals" message={error} />;
  }

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
};

export default Meals;
