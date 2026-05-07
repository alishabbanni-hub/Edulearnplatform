import { Clock, Users, Star, ArrowLeft } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import type { Course } from './CourseCard';

interface CourseDetailProps {
  course: Course;
  onBack: () => void;
}

export function CourseDetail({ course, onBack }: CourseDetailProps) {
  const levelColors = {
    Beginner: 'bg-green-100 text-green-700',
    Intermediate: 'bg-yellow-100 text-yellow-700',
    Advanced: 'bg-red-100 text-red-700'
  };

  return (
    <section className="bg-gray-50 py-12 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to courses
        </button>

        <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
          <div className="aspect-video w-full overflow-hidden">
            <ImageWithFallback
              src={course.image}
              alt={course.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-8">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {course.title}
                </h1>
                <p className="text-lg text-gray-600">By {course.instructor}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${levelColors[course.level]}`}>
                {course.level}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-6 py-4 border-y border-gray-100 mb-6 text-sm text-gray-700">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-gray-500" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-gray-500" />
                <span>{course.students.toLocaleString()} students</span>
              </div>
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
                <span className="font-semibold text-gray-900">{course.rating}</span>
                <span className="text-gray-500">({course.reviews} reviews)</span>
              </div>
            </div>

            <h2 className="text-xl font-bold text-gray-900 mb-3">About this course</h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              This {course.level.toLowerCase()}-level course on "{course.title}" is led by {course.instructor} and runs for {course.duration}. Join {course.students.toLocaleString()} other learners building practical skills they can use right away. The course is rated {course.rating} out of 5 by past participants.
            </p>

            <button className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity shadow-lg">
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
