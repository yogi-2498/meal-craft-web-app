
import React from 'react';
import { Clock, Users, ChefHat } from 'lucide-react';

interface Meal {
  id: number;
  name: string;
  category: string;
  type: string;
  diet: string;
  cookTime: string;
  difficulty: string;
  servings: number;
  image: string;
  description: string;
}

interface MealCardProps {
  meal: Meal;
  onClick: (meal: Meal) => void;
}

const MealCard: React.FC<MealCardProps> = ({ meal, onClick }) => {
  const getDietColor = (diet: string) => {
    return diet === 'Vegetarian' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800';
  };

  return (
    <div 
      className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
      onClick={() => onClick(meal)}
    >
      <div className="relative overflow-hidden">
        <img 
          src={meal.image} 
          alt={meal.name}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDietColor(meal.diet)}`}>
            {meal.diet}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700">
            {meal.category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors">
          {meal.name}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {meal.description}
        </p>
        
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Clock size={16} />
            <span>{meal.cookTime}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users size={16} />
            <span>{meal.servings}</span>
          </div>
          <div className="flex items-center gap-1">
            <ChefHat size={16} />
            <span>{meal.difficulty}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealCard;
