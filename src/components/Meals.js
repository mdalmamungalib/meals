"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LoadingPage from "./LoadingPage";

const Meals = () => {
  const [search, setSearch] = useState("a");
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchHandler = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  const loadData = async () => {
    if (!search) return;
    setLoading(true);
    setError(null); // Reset error state before fetching

    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      );

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await res.json();
      setMeals(data.meals || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (search) {
      loadData();
    }
  }, [search]);
  return (
    <div>
      <div className="flex flex-col md:flex-row mb-6 w-full max-w-4xl">
        <input
          type="text"
          value={search}
          onChange={searchHandler}
          placeholder="Search for meals..."
          className="text-black p-2 rounded-md flex-grow mr-2 mb-4 md:mb-0"
        />
        <button
          onClick={loadData}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Search
        </button>
      </div>

      {loading ? (
        <LoadingPage />
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
          {meals.map((meal) => (
            <Link href={`/meals/${meal?.idMeal}`} key={meal.idMeal}>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <Image
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  width={500}
                  height={500}
                  className="rounded-md"
                />
                <h4 className="text-xl font-semibold mt-4">
                  {meal.strMeal}
                </h4>
                <p className="mt-2">{meal.strCategory}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Meals;
