import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StatsSection } from './components/StatsSection';
import { CategoryTabs, CategoryType } from './components/CategoryTabs';
import { CoursesGrid } from './components/CoursesGrid';
import { Footer } from './components/Footer';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('teachers');

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <CategoryTabs
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      <CoursesGrid category={activeCategory} />
      <Footer />
    </div>
  );
}