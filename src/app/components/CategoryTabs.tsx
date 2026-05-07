import { GraduationCap, Briefcase, Users } from 'lucide-react';
import { useState } from 'react';

export type CategoryType = 'teachers' | 'leaders' | 'students';

interface CategoryTabsProps {
  activeCategory: CategoryType;
  onCategoryChange: (category: CategoryType) => void;
}

export function CategoryTabs({ activeCategory, onCategoryChange }: CategoryTabsProps) {
  const categories = [
    {
      id: 'teachers' as CategoryType,
      label: 'Teacher Development',
      icon: GraduationCap,
      description: 'Professional learning for educators'
    },
    {
      id: 'leaders' as CategoryType,
      label: 'Leadership Development',
      icon: Briefcase,
      description: 'Programs for school leaders & administrators'
    },
    {
      id: 'students' as CategoryType,
      label: 'Youth Development',
      icon: Users,
      description: 'Life skills for students & children'
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Explore by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {categories.map((category) => {
            const isActive = activeCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => onCategoryChange(category.id)}
                className={`p-6 rounded-xl border-2 transition-all text-left ${
                  isActive
                    ? 'border-blue-600 bg-blue-50 shadow-md'
                    : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm'
                }`}
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                  isActive ? 'bg-blue-600' : 'bg-gray-100'
                }`}>
                  <category.icon className={`w-6 h-6 ${isActive ? 'text-white' : 'text-gray-600'}`} />
                </div>
                <h3 className={`text-lg font-semibold mb-2 ${isActive ? 'text-blue-900' : 'text-gray-900'}`}>
                  {category.label}
                </h3>
                <p className={`text-sm ${isActive ? 'text-blue-700' : 'text-gray-600'}`}>
                  {category.description}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
