
import React from 'react';
import { ChefHat, Search, Heart, Users, Clock, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Search className="w-8 h-8 text-orange-500" />,
      title: "Smart Recipe Search",
      description: "Find recipes by ingredients, cuisine, or dietary preferences with our intelligent search."
    },
    {
      icon: <ChefHat className="w-8 h-8 text-red-500" />,
      title: "Step-by-Step Instructions",
      description: "Get detailed cooking instructions with prep time, difficulty level, and serving size."
    },
    {
      icon: <Heart className="w-8 h-8 text-pink-500" />,
      title: "Save Favorites",
      description: "Bookmark your favorite recipes and create your personal cookbook collection."
    },
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: "Community Recipes",
      description: "Discover recipes shared by food lovers from around the world."
    }
  ];

  const stats = [
    { number: "1000+", label: "Recipes" },
    { number: "50+", label: "Cuisines" },
    { number: "10K+", label: "Happy Cooks" },
    { number: "4.9", label: "Rating" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <ChefHat className="w-8 h-8 text-orange-600" />
            <h1 className="text-2xl font-bold text-gray-800">Meal Finder</h1>
          </div>
          <div className="space-x-4">
            <Button variant="ghost" onClick={() => navigate('/auth')}>
              Sign In
            </Button>
            <Button onClick={() => navigate('/auth')}>
              Get Started
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-6">
            Discover Your Next
            <br />
            Favorite Recipe
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Explore thousands of delicious recipes from around the world. Find meals by ingredients you have, 
            dietary preferences, or cuisine type. Start cooking amazing dishes today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6"
              onClick={() => navigate('/auth')}
            >
              Get Started Free
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6"
              onClick={() => navigate('/auth')}
            >
              Browse Recipes
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-gray-800 mb-4">
            Everything You Need to Cook Better
          </h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our platform provides all the tools and resources you need to become a better cook
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/80 transition-all duration-300 hover:scale-105">
              <div className="mb-4">{feature.icon}</div>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h4>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-12 text-center text-white">
          <h3 className="text-4xl font-bold mb-4">Ready to Start Cooking?</h3>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of home cooks discovering amazing recipes every day
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            className="text-lg px-8 py-6"
            onClick={() => navigate('/auth')}
          >
            Get Started Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 border-t border-gray-200">
        <div className="flex items-center justify-center space-x-2 text-gray-600">
          <ChefHat className="w-5 h-5" />
          <span>© 2024 Meal Finder. Made with ❤️ for food lovers.</span>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
