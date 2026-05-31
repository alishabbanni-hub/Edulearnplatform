import { CourseCard, Course } from './CourseCard';
import type { CategoryType } from './CategoryTabs';

interface CoursesGridProps {
  category: CategoryType;
  onCourseSelect?: (course: Course) => void;
}

export function CoursesGrid({ category, onCourseSelect }: CoursesGridProps) {
  const allCourses: Course[] = [
    // Teacher Development Courses
    {
      id: 1,
      title: 'Self-Directed Learning',
      subtitle: 'Students as Drivers of Their Own Transformation',
      instructor: 'Dr. Sarah Johnson',
      image: '/self-directed-learning.png',      
      duration: '6 weeks',
      students: 3245,
      rating: 4.8,
      reviews: 892,
      level: 'Intermediate',
      category: 'teachers'
    },
    {
      id: 2,
      title: 'Project-Based Learning in Action',
      subtitle: "Fostering Deep Engagement",
      instructor: 'Michael Chen',
      image: 'https://plus.unsplash.com/premium_photo-1664910131883-132940940995?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      duration: '4 weeks',
      students: 2890,
      rating: 4.9,
      reviews: 1024,
      level: 'Beginner',
      category: 'teachers'
    },
    {
      id: 3,
      title: 'Climate Education for a Changing World',
      subtitle: 'Sustainability, Systems Thinking, and Youth Action',
      instructor: 'Emily Rodriguez',
      image: '/no-planet-b.png',
      duration: '8 weeks',
      students: 4120,
      rating: 4.7,
      reviews: 756,
      level: 'Advanced',
      category: 'teachers'
    },
    {
      id: 4,
      title: 'Neurodiversity and Learning Differences',
      subtitle: 'Building Classrooms Where Every Mind Thrives',
      instructor: 'Dr. James Williams',
      image: '/neurodiversity.png',
      duration: '5 weeks',
      students: 2567,
      rating: 4.6,
      reviews: 643,
      level: 'Intermediate',
      category: 'teachers'
    },
    {
      id: 5,
      title: 'Teaching for a Planet in Transition',
      subtitle: 'Climate Literacy, Green Skills, and Youth Action',
      instructor: 'Lisa Martinez',
      image: '/teaching-for-green.png',
      duration: '6 weeks',
      students: 3890,
      rating: 4.9,
      reviews: 1203,
      level: 'Beginner',
      category: 'teachers'
    },
    {
      id: 6,
      title: 'The End of Homework?',
      subtitle: 'Rethinking Learning in the AI Era',
      instructor: 'Dr. Amanda Thompson',
      image: 'https://images.pexels.com/photos/8535577/pexels-photo-8535577.jpeg',
      duration: '7 weeks',
      students: 3456,
      rating: 4.8,
      reviews: 967,
      level: 'Intermediate',
      category: 'teachers'
    },
{
      id: 19,
      title: 'Bullying Beyond the Playground',
      subtitle: "How Online Conflict Follows Students' Home",
      instructor: 'Dr. Julia Chastein',
      image: '/Bullying.png',
      duration: '4 weeks',
      students: 1500,
      rating: 4.8,
      reviews: 320,
      level: 'Beginner',
      category: 'teachers'
    },
    {
      id: 20,
      title: "The Decisions We Don't Know We Are Making",
      subtitle: 'Bias, Belonging, and Inclusive Classrooms',
      instructor: 'Dr. Scot Harvey',
      image: '/bias.png',
      duration: '6 weeks',
      students: 1500,
      rating: 4.8,
      reviews: 320,
      level: 'Beginner',
      category: 'teachers'
    },
    
    // Leadership Development Courses
    {
      id: 7,
      title: 'Strategic School Leadership',
      instructor: 'Principal Robert Davis',
      image: 'https://images.unsplash.com/photo-1590650213165-c1fef80648c4?w=1080',
      duration: '10 weeks',
      students: 1890,
      rating: 4.9,
      reviews: 445,
      level: 'Advanced',
      category: 'leaders'
    },
    {
      id: 8,
      title: 'Building Inclusive School Teams',
      instructor: 'Dr. Patricia Green',
      image: 'https://images.unsplash.com/photo-1742558869030-a0615dd4df00?w=1080',
      duration: '6 weeks',
      students: 2145,
      rating: 4.7,
      reviews: 523,
      level: 'Intermediate',
      category: 'leaders'
    },
    {
      id: 9,
      title: 'Educational Leadership & Change Management',
      instructor: 'Dr. Marcus Johnson',
      image: 'https://images.unsplash.com/photo-1738963785992-dd0132bbac3d?w=1080',
      duration: '8 weeks',
      students: 1567,
      rating: 4.8,
      reviews: 389,
      level: 'Advanced',
      category: 'leaders'
    },
    {
      id: 10,
      title: 'Data-Driven Decision Making for Educational Leaders',
      instructor: 'Linda Washington',
      image: 'https://images.unsplash.com/photo-1708062831981-ec4742a52d9b?w=1080',
      duration: '5 weeks',
      students: 1923,
      rating: 4.6,
      reviews: 412,
      level: 'Intermediate',
      category: 'leaders'
    },
    {
      id: 11,
      title: 'Instructional Leadership Essentials',
      instructor: 'Dr. Kevin Brown',
      image: 'https://images.unsplash.com/photo-1656812205901-73e9531acf13?w=1080',
      duration: '7 weeks',
      students: 2234,
      rating: 4.9,
      reviews: 578,
      level: 'Beginner',
      category: 'leaders'
    },
    {
      id: 12,
      title: 'Equity & Justice in School Leadership',
      instructor: 'Dr. Monica Harris',
      image: 'https://images.unsplash.com/photo-1590650213165-c1fef80648c4?w=1080',
      duration: '9 weeks',
      students: 1678,
      rating: 4.8,
      reviews: 434,
      level: 'Advanced',
      category: 'leaders'
    },

    // Youth Development Courses
    {
      id: 13,
      title: 'Effective Communication Skills for Students',
      instructor: 'Coach Sarah Miller',
      image: 'https://images.unsplash.com/photo-1776178320206-f42b9a9cf996?w=1080',
      duration: '4 weeks',
      students: 5678,
      rating: 4.9,
      reviews: 1456,
      level: 'Beginner',
      category: 'students'
    },
    {
      id: 14,
      title: 'Conflict Resolution & Peer Mediation',
      instructor: 'Jennifer Adams',
      image: 'https://images.unsplash.com/photo-1758270705172-07b53627dfcb?w=1080',
      duration: '3 weeks',
      students: 4234,
      rating: 4.7,
      reviews: 987,
      level: 'Beginner',
      category: 'students'
    },
    {
      id: 15,
      title: 'Project Management for Young Leaders',
      instructor: 'David Kim',
      image: 'https://images.unsplash.com/photo-1758270705317-3ef6142d306f?w=1080',
      duration: '5 weeks',
      students: 3890,
      rating: 4.8,
      reviews: 1123,
      level: 'Intermediate',
      category: 'students'
    },
    {
      id: 16,
      title: 'Building Confidence & Self-Esteem',
      instructor: 'Dr. Rachel Green',
      image: 'https://images.unsplash.com/photo-1758525861882-39151c7a9804?w=1080',
      duration: '4 weeks',
      students: 6123,
      rating: 4.9,
      reviews: 1678,
      level: 'Beginner',
      category: 'students'
    },
    {
      id: 17,
      title: 'Time Management & Study Skills',
      instructor: 'Alex Turner',
      image: 'https://images.unsplash.com/photo-1776178320221-624f85a0028f?w=1080',
      duration: '3 weeks',
      students: 5234,
      rating: 4.6,
      reviews: 1234,
      level: 'Beginner',
      category: 'students'
    },
    {
      id: 18,
      title: 'Teamwork & Collaboration Skills',
      instructor: 'Michelle Lopez',
      image: 'https://images.unsplash.com/photo-1776178320206-f42b9a9cf996?w=1080',
      duration: '4 weeks',
      students: 4567,
      rating: 4.8,
      reviews: 1089,
      level: 'Intermediate',
      category: 'students'
    }
  ];

  const filteredCourses = allCourses.filter(course => course.category === category);

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            {category === 'teachers' && 'Teacher Development Courses'}
            {category === 'leaders' && 'Leadership Development Courses'}
            {category === 'students' && 'Youth Development Courses'}
          </h2>
          <span className="text-gray-600">
            {filteredCourses.length} courses available
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => {
            if (course.id === 1 && onCourseSelect) {
              return (
                <div
                  key={course.id}
                  onClick={() => onCourseSelect(course)}
                  className="cursor-pointer"
                >
                  <CourseCard course={course} />
                </div>
              );
            }
            return <CourseCard key={course.id} course={course} />;
          })}
        </div>
      </div>
    </section>
  );
}
