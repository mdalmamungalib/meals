import { fetchMealDetails } from "@/app/services/detailsMeal";
import MealDetail from "@/components/MealDetail";

export const generateMetadata = async ({ params }) => {
  try {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params?.idMeal}`
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.statusText}`);
    }

    const metaDetail = await res.json();

    // Check if metaDetail and the properties exist
    if (
      !metaDetail ||
      !metaDetail.meals ||
      metaDetail.meals.length === 0
    ) {
      throw new Error("No data found");
    }

    const meal = metaDetail.meals[0];

    return {
      title: meal.strMeal || "Meal Details",
      description:
        meal.strInstructions || "No description available",
      keywords: [
        meal.strMeal || "",
        meal.strCategory || "",
        meal.strArea || "",
      ],
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "Meal Details",
      description: "No description available",
      keywords: ["meal", "details"],
    };
  }
};

const MealDetailPage = ({ params }) => {
  return (
    <div className="min-h-screen bg-gray-100 py-20">
      <div className="container mx-auto p-4">
        <MealDetail params={params} />
      </div>
    </div>
  );
};

export default MealDetailPage;
