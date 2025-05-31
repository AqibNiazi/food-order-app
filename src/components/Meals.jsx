import React, { useState, useEffect } from "react";

const Meals = () => {
  const [loadedMeals, setLoadedMeals] = useState([]);
  useEffect(() => {
    // Fetch meals from the API
    const fetchMeals = async () => {
      const response = await fetch("http://localhost:3000/meals");

      if (!response.ok) {
        // Handle error
      }

      const meals = await response.json();
      setLoadedMeals(meals);
    };
    fetchMeals();
  }, []);

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <li key={meal.id}>
          <h2>{meal.name}</h2>
        </li>
      ))}
    </ul>
  );
};

export default Meals;
