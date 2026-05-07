import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StatsSection } from './components/StatsSection';
import { CategoryTabs, CategoryType } from './components/CategoryTabs';
import { CoursesGrid } from './components/CoursesGrid';
import { CourseDetail } from './components/CourseDetail';
import { Footer } from './components/Footer';
import type { Course } from './components/CourseCard';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('teachers');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {selectedCourse ? (
        <CourseDetail
          course={selectedCourse}
          onBack={() => setSelectedCourse(null)}
        />
      ) : (
        <>
          <HeroSection />
          <StatsSection />
          <CategoryTabs
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
          <CoursesGrid
            category={activeCategory}
            onCourseSelect={setSelectedCourse}
          />
        </>
      )}
      <Footer />
    </div>
  );
}
