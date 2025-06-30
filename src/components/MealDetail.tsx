
import React from 'react';
import { X, Clock, Users, ChefHat, ArrowLeft } from 'lucide-react';

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
  ingredients: string[];
  instructions: string[];
  tags: string[];
}

interface MealDetailProps {
  meal: Meal;
  onClose: () => void;
}

const MealDetail: React.FC<MealDetailProps> = ({ meal, onClose }) => {
  const getDietColor = (diet: string) => {
    return diet === 'Vegetarian' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800';
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl animate-scale-in">
        {/* Header */}
        <div className="relative">
          <img 
            src={meal.image} 
            alt={meal.name}
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors"
          >
            <X size={20} />
          </button>
          <button 
            onClick={onClose}
            className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors"
          >
            <ArrowLeft size={20} />
          </button>
          <div className="absolute bottom-4 left-6">
            <h1 className="text-3xl font-bold text-white mb-2">{meal.name}</h1>
            <div className="flex gap-3">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDietColor(meal.diet)}`}>
                {meal.diet}
              </span>
              <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                {meal.category}
              </span>
            </div>
          </div>
        </div>

        <div className="p-8">
          {/* Stats */}
          <div className="flex items-center justify-around bg-gray-50 rounded-2xl p-6 mb-8">
            <div className="text-center">
              <Clock className="mx-auto mb-2 text-orange-500" size={24} />
              <p className="text-sm text-gray-600">Cook Time</p>
              <p className="font-semibold">{meal.cookTime}</p>
            </div>
            <div className="text-center">
              <Users className="mx-auto mb-2 text-blue-500" size={24} />
              <p className="text-sm text-gray-600">Servings</p>
              <p className="font-semibold">{meal.servings}</p>
            </div>
            <div className="text-center">
              <ChefHat className="mx-auto mb-2 text-green-500" size={24} />
              <p className="text-sm text-gray-600">Difficulty</p>
              <p className="font-semibold">{meal.difficulty}</p>
            </div>
          </div>

          <p className="text-gray-700 text-lg mb-8 leading-relaxed">{meal.description}</p>

          {/* Ingredients */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Ingredients</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {meal.ingredients.map((ingredient, index) => (
                <div key={index} className="flex items-center bg-gray-50 rounded-lg p-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">{ingredient}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Instructions */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Instructions</h2>
            <div className="space-y-4">
              {meal.instructions.map((instruction, index) => (
                <div key={index} className="flex items-start bg-gray-50 rounded-lg p-4">
                  <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 leading-relaxed">{instruction}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {meal.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealDetail;
