import React, { useState, useEffect } from 'react';
import { ChefHat, Sparkles, TrendingUp, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import MealCard from '../components/MealCard';
import MealDetail from '../components/MealDetail';
import SearchBar from '../components/SearchBar';
import mealsData from '../data/meals.json';

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

const Index = () => {
  const { user, signOut } = useAuth();
  const [meals, setMeals] = useState<Meal[]>(mealsData);
  const [filteredMeals, setFilteredMeals] = useState<Meal[]>(mealsData);
  const [selectedMeal, setSelectedMeal] = useState<Meal | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSignOut = async () => {
    await signOut();
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    filterMeals(query, { type: '', diet: '' });
  };

  const handleFilterChange = (filters: { type: string; diet: string }) => {
    filterMeals(searchQuery, filters);
  };

  const filterMeals = (query: string, filters: { type: string; diet: string }) => {
    let filtered = meals;

    // Search filter
    if (query) {
      filtered = filtered.filter(meal =>
        meal.name.toLowerCase().includes(query.toLowerCase()) ||
        meal.category.toLowerCase().includes(query.toLowerCase()) ||
        meal.ingredients.some(ingredient => 
          ingredient.toLowerCase().includes(query.toLowerCase())
        ) ||
        meal.tags.some(tag => 
          tag.toLowerCase().includes(query.toLowerCase())
        )
      );
    }

    // Type filter
    if (filters.type) {
      filtered = filtered.filter(meal => meal.type === filters.type);
    }

    // Diet filter
    if (filters.diet) {
      filtered = filtered.filter(meal => meal.diet === filters.diet);
    }

    setFilteredMeals(filtered);
  };

  const handleMealClick = (meal: Meal) => {
    setSelectedMeal(meal);
  };

  const handleCloseMealDetail = () => {
    setSelectedMeal(null);
  };

  const featuredMeals = filteredMeals.slice(0, 3);
  const popularCategories = ['Italian', 'Indian', 'Thai', 'Mediterranean'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50">
      {/* Header with Sign Out */}
      <header className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <ChefHat className="w-8 h-8 text-orange-600" />
            <h1 className="text-2xl font-bold text-gray-800">Meal Finder</h1>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-600">Welcome, {user?.email}</span>
            <Button variant="outline" onClick={handleSignOut}>
              <LogOut className="w-4 h-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-red-600/20"></div>
        <div className="relative container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-4">
              Discover Delicious Recipes
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Search by ingredients, cuisine, or dietary preferences to find your perfect meal.
            </p>
            <SearchBar onSearch={handleSearch} onFilterChange={handleFilterChange} />
          </div>
        </div>
      </div>

      {/* Featured Section */}
      {!searchQuery && (
        <div className="container mx-auto px-4 py-16">
          <div className="flex items-center mb-8">
            <Sparkles className="text-yellow-500 mr-3" size={28} />
            <h2 className="text-3xl font-bold text-gray-800">Featured Recipes</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {featuredMeals.map((meal) => (
              <MealCard key={meal.id} meal={meal} onClick={handleMealClick} />
            ))}
          </div>

          {/* Popular Categories */}
          <div className="flex items-center mb-8">
            <TrendingUp className="text-green-500 mr-3" size={28} />
            <h2 className="text-3xl font-bold text-gray-800">Popular Cuisines</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {popularCategories.map((category) => (
              <button
                key={category}
                onClick={() => handleSearch(category)}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="text-4xl mb-3">
                  {category === 'Italian' && '🍝'}
                  {category === 'Indian' && '🍛'}
                  {category === 'Thai' && '🍜'}
                  {category === 'Mediterranean' && '🥗'}
                </div>
                <h3 className="font-semibold text-gray-800">{category}</h3>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Search Results */}
      {searchQuery && (
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Search Results for "{searchQuery}" ({filteredMeals.length} found)
          </h2>
        </div>
      )}

      {/* Meals Grid */}
      <div className="container mx-auto px-4 pb-16">
        {filteredMeals.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(searchQuery ? filteredMeals : filteredMeals.slice(3)).map((meal) => (
              <MealCard key={meal.id} meal={meal} onClick={handleMealClick} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">No meals found</h3>
            <p className="text-gray-600">Try searching for something else or adjust your filters.</p>
          </div>
        )}
      </div>

      {/* Meal Detail Modal */}
      {selectedMeal && (
        <MealDetail meal={selectedMeal} onClose={handleCloseMealDetail} />
      )}
    </div>
  );
};

export default Index;
