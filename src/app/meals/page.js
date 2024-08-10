import Meals from "@/components/Meals";

export const metadata = {
  title: "Meal Search",
  description: "Search for meals using the ThemealDB API",
};

const MealsPage = () => {
  return (
    <div className="min-h-screen py-20 bg-gray-100 flex flex-col items-center text-black">
      <h3 className="text-4xl font-bold mb-6">Choose Your Meals</h3>
      <p className="text-lg mb-6">
        Choose meals of your choice by searching...
      </p>
      <Meals />
    </div>
  );
};

export default MealsPage;
