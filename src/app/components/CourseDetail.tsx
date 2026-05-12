import { useState } from 'react';
import {
  Clock,
  Users,
  Star,
  ArrowLeft,
  BookOpen,
  FileText,
  ListChecks,
  PlayCircle,
  ChevronDown,
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import type { Course } from './CourseCard';

interface CourseDetailProps {
  course: Course;
  onBack: () => void;
}

type TabId = 'about' | 'content' | 'instructor' | 'reviews';

interface Lesson {
  title: string;
  duration: string;
  type: 'video' | 'reading' | 'quiz';
}

interface Module {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
}

const MODULES: Module[] = [
  {
    id: 'm1',
    title: 'Module 1 — Foundations of Self-Directed Learning',
    description:
      'Understand the principles behind student-led classrooms and why they matter.',
    lessons: [
      { title: 'Welcome and course overview', duration: '6 min', type: 'video' },
      { title: 'What does "self-directed" actually mean?', duration: '12 min', type: 'video' },
      { title: 'Reading: Three classic models compared', duration: '15 min', type: 'reading' },
      { title: 'Knowledge check', duration: '5 min', type: 'quiz' },
    ],
  },
  {
    id: 'm2',
    title: 'Module 2 — Designing for Student Agency',
    description:
      'Practical strategies for handing more decisions over to your students.',
    lessons: [
      { title: 'Choice boards and learning menus', duration: '14 min', type: 'video' },
      { title: 'Goal-setting protocols students actually use', duration: '11 min', type: 'video' },
      { title: "Reading: Case study from Mrs. Liang's 5th grade classroom", duration: '20 min', type: 'reading' },
      { title: 'Worksheet: Map a unit to student-led milestones', duration: '25 min', type: 'reading' },
      { title: 'Module quiz', duration: '8 min', type: 'quiz' },
    ],
  },
  {
    id: 'm3',
    title: 'Module 3 — Coaching Instead of Lecturing',
    description:
      'Shift your role from sage-on-the-stage to coach-on-the-side without losing rigor.',
    lessons: [
      { title: 'The art of the open-ended question', duration: '13 min', type: 'video' },
      { title: 'Conferencing routines that scale to 30 students', duration: '17 min', type: 'video' },
      { title: 'Reading: Feedback that builds metacognition', duration: '18 min', type: 'reading' },
      { title: 'Practice scenario: Coaching a stuck learner', duration: '15 min', type: 'quiz' },
    ],
  },
  {
    id: 'm4',
    title: 'Module 4 — Assessment and Reflection',
    description:
      'Make learning visible without flattening it into a single grade.',
    lessons: [
      { title: 'Portfolios, rubrics, and learner-led conferences', duration: '16 min', type: 'video' },
      { title: 'Reading: Standards-based grading in a self-directed context', duration: '22 min', type: 'reading' },
      { title: 'Designing a reflection routine for your classroom', duration: '20 min', type: 'video' },
      { title: 'Final project brief', duration: '10 min', type: 'reading' },
      { title: 'Course-end quiz', duration: '12 min', type: 'quiz' },
    ],
  },
];

const ABOUT = {
  description: [
    'When students are given meaningful agency over what, how, and when they learn, the gains in motivation, retention, and transferable skill are well documented — and so are the pitfalls of doing it badly. This course gives K-12 teachers a structured way to introduce self-directed learning into their classrooms without giving up on rigor or curriculum coverage.',
    'Across four modules, you will study the research base, work through real classroom case studies, and build artifacts you can use in your own classroom on Monday morning: a unit plan, a coaching protocol, a feedback routine, and a portfolio rubric. The course is designed for teachers of grades 3-12 and is equally relevant for traditional, hybrid, and project-based settings.',
  ],
  outcomes: [
    'Define self-directed learning and articulate the research base behind it',
    'Redesign one of your existing units to include meaningful student choice',
    'Run effective one-on-one and small-group coaching conferences',
    'Build a feedback routine that grows student metacognition over time',
    'Use portfolios and learner-led conferences as authentic assessment',
    'Anticipate and respond to common implementation challenges',
  ],
  skills: [
    'Curriculum design',
    'Student conferencing',
    'Formative assessment',
    'Differentiation',
    'Coaching',
    'Classroom routines',
  ],
};

const INSTRUCTOR_BIO =
  'Dr. Sarah Johnson is a former middle school teacher and a professor of curriculum studies at the Bay Area Graduate School of Education. Over the last 15 years she has worked with more than 200 schools across North America to help teachers redesign instruction around student agency. She holds a Ph.D. in Curriculum and Instruction and is the author of "The Quiet Classroom: A Practical Guide to Student-Led Learning."';

const REVIEWS = [
  {
    name: 'Priya M., 7th-grade Science',
    stars: 5,
    body: 'Genuinely changed how I plan units. The conferencing protocols alone are worth the time. I tried the choice-board lesson with my Friday class and the difference in engagement was immediate.',
  },
  {
    name: 'Jordan W., High School History',
    stars: 5,
    body: 'Practical, not preachy. The case studies feel like real classrooms, not idealized ones. I appreciated how honestly the course addresses what to do when student-led learning gets messy.',
  },
  {
    name: 'Alma R., Elementary Lead Teacher',
    stars: 4,
    body: 'Loved the assessment module. Would have liked one more example unit aimed at lower elementary, but the frameworks transfer well enough.',
  },
];

export function CourseDetail({ course, onBack }: CourseDetailProps) {
  const [activeTab, setActiveTab] = useState<TabId>('about');
  const [expandedModules, setExpandedModules] = useState<Set<string>>(
    new Set(['m1'])
  );

  const toggleModule = (id: string) => {
    setExpandedModules((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const tabs: { id: TabId; label: string }[] = [
    { id: 'about', label: 'About' },
    { id: 'content', label: 'Content' },
    { id: 'instructor', label: 'Instructor' },
    { id: 'reviews', label: 'Reviews' },
  ];

  const totalLessons = MODULES.reduce((n, m) => n + m.lessons.length, 0);

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
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              {course.title}
            </h1>
            {course.subtitle && (
              <p className="text-xl font-bold text-gray-700 mb-2">
                {course.subtitle}
              </p>
            )}
            <p className="text-lg text-gray-600 mb-6">By {course.instructor}</p>

            <div className="flex flex-wrap items-center gap-6 py-4 border-y border-gray-100 mb-8 text-sm text-gray-700">
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
                <span className="font-semibold text-gray-900">
                  {course.rating}
                </span>
                <span className="text-gray-500">
                  ({course.reviews} reviews)
                </span>
              </div>
            </div>

            <div className="border-b border-gray-200 mb-8 -mx-8 px-8">
              <div className="flex gap-6 overflow-x-auto">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`pb-3 px-1 border-b-2 font-semibold transition-colors whitespace-nowrap ${
                      activeTab === tab.id
                        ? 'border-blue-600 text-blue-600'
                        : 'border-transparent text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {activeTab === 'about' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  About this course
                </h2>
                <div className="space-y-4 mb-8">
                  {ABOUT.description.map((p, i) => (
                    <p key={i} className="text-gray-700 leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  What you'll learn
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                  {ABOUT.outcomes.map((o, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-gray-700"
                    >
                      <ListChecks className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>{o}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Skills you'll gain
                </h3>
                <div className="flex flex-wrap gap-2">
                  {ABOUT.skills.map((s, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'content' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Course content
                </h2>
                <p className="text-gray-600 mb-6">
                  {MODULES.length} modules · {totalLessons} lessons
                </p>
                <div className="space-y-3">
                  {MODULES.map((m) => {
                    const expanded = expandedModules.has(m.id);
                    return (
                      <div
                        key={m.id}
                        className="border border-gray-200 rounded-lg overflow-hidden"
                      >
                        <button
                          onClick={() => toggleModule(m.id)}
                          className="w-full text-left p-4 flex items-start justify-between gap-4 hover:bg-gray-50 transition-colors"
                        >
                          <div>
                            <h3 className="font-bold text-gray-900">
                              {m.title}
                            </h3>
                            <p className="text-sm text-gray-600 mt-1">
                              {m.description}
                            </p>
                            <p className="text-xs text-gray-500 mt-2">
                              {m.lessons.length} lessons
                            </p>
                          </div>
                          <ChevronDown
                            className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${
                              expanded ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        {expanded && (
                          <ul className="border-t border-gray-100 divide-y divide-gray-100">
                            {m.lessons.map((l, i) => {
                              const Icon =
                                l.type === 'video'
                                  ? PlayCircle
                                  : l.type === 'reading'
                                  ? FileText
                                  : BookOpen;
                              return (
                                <li
                                  key={i}
                                  className="flex items-center gap-3 p-3 pl-6 text-sm"
                                >
                                  <Icon className="w-4 h-4 text-gray-500 flex-shrink-0" />
                                  <span className="flex-1 text-gray-800">
                                    {l.title}
                                  </span>
                                  <span className="text-gray-500">
                                    {l.duration}
                                  </span>
                                </li>
                              );
                            })}
                          </ul>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {activeTab === 'instructor' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Meet your instructor
                </h2>
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                    {course.instructor
                      .split(' ')
                      .map((s) => s[0])
                      .slice(0, 2)
                      .join('')}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {course.instructor}
                    </h3>
                    <p className="text-gray-600">
                      Professor of Curriculum Studies
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {INSTRUCTOR_BIO}
                </p>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Learner reviews
                </h2>
                <div className="space-y-6">
                  {REVIEWS.map((r, i) => (
                    <div
                      key={i}
                      className="border-b border-gray-100 pb-6 last:border-0"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, j) => (
                            <Star
                              key={j}
                              className={`w-4 h-4 ${
                                j < r.stars
                                  ? 'text-yellow-400 fill-yellow-400'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="font-semibold text-gray-900">
                          {r.name}
                        </span>
                      </div>
                      <p className="text-gray-700 leading-relaxed">{r.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-10 pt-6 border-t border-gray-100">
              <button className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity shadow-lg">
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
