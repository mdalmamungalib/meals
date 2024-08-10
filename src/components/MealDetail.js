"use client";

import { fetchMealDetails } from "@/app/services/detailsMeal";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import LoadingPage from "./LoadingPage";
const MealDetail = ({ params }) => {
  const [mealDetail, setMealDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMealDetails = async () => {
      try {
        const data = await fetchMealDetails(params?.idMeal);
        setMealDetail(data?.meals[0]); // Assuming API returns an array under `meals`
      } catch (err) {
        setError("Failed to load meal details.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    getMealDetails();
  }, [params?.idMeal]);

  if (loading) return <LoadingPage />;
  if (error) return <div>{error}</div>;
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Meal Image */}
      <div className="relative w-full h-96">
        <Image
          src={mealDetail?.strMealThumb}
          alt={mealDetail?.strMeal}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>

      {/* Meal Details */}
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4 text-black">
          {mealDetail?.strMeal}
        </h1>
        <div className="flex space-x-4 mb-4">
          <span className="bg-blue-500 text-white px-3 py-1 rounded">
            {mealDetail?.strCategory}
          </span>
          <span className="bg-green-500 text-white px-3 py-1 rounded">
            {mealDetail?.strArea}
          </span>
        </div>

        <h2 className="text-xl font-semibold mb-2">
          Instructions:
        </h2>
        <p className="text-gray-700 leading-relaxed">
          {mealDetail?.strInstructions}
        </p>
      </div>
    </div>
  );
};

export default MealDetail;
