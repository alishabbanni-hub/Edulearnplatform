import { Clock, Users, Star, BookOpen } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export interface Course {
  id: number;
  title: string;
  instructor: string;
  image: string;
  duration: string;
  students: number;
  rating: number;
  reviews: number;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  category: 'teachers' | 'leaders' | 'students';
}

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group cursor-pointer">
      <div className="relative overflow-hidden aspect-video">
        <ImageWithFallback
          src={course.image}
          alt={course.title}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-5">
<h3 className="text-lg font-bold text-gray-900 mb-1 line-clamp-3 group-hover:text-blue-600 transition-colors">
           {course.title}
         </h3> 
        {course.subtitle && (
        <p className="text-sm font-bold text-gray-700 mb-2 line-clamp-2">{course.subtitle}</p>        )}
        <p className="text-sm text-gray-600 mb-4">By {course.instructor}</p>

        <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{course.students.toLocaleString()}</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(course.rating)
                      ? 'text-yellow-400 fill-yellow-400'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm font-semibold text-gray-900">{course.rating}</span>
            <span className="text-sm text-gray-500">({course.reviews})</span>
          </div>
        </div>
      </div>
    </div>
  );
}
