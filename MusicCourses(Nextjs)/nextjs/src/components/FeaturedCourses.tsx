"use client"
import Link from 'next/link'
import Coursedata from "@/data/music_courses.json"
import { BackgroundGradient } from './UI/background-gradient'

interface Course {
    id: number,
    title: string,
    description: string,
    level: string,
    duration: string,
    format: string,
    instructor: string,
    isFeatured: boolean
}
function FeaturedCourses() {
    const featuredCourses = Coursedata.courses.filter((course: Course) => course.isFeatured)
    return (
        <div className='py-12 bg-gray-900 '>
            <div>
                <div className="text-center">
                    <h2 className='text-base text-teal-600 font-semibold tracking-wide uppercase'>Featured courses</h2>
                    <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl '>Learn with the best coach</p>
                </div>
            </div>
            <div className='mt-10'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center'>
                    {featuredCourses.map((course:Course) => (
                        <div className="flex justify-center" key={course.id}>
                            <BackgroundGradient className='flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm'>
                               <div className='p-4 sm:p-6 flex flex-col items-center text-center flex-grow  bg-slate-800 '>
                                <p className='text-lg  sm:text-xl text-[#8AB9F1] mt-4 mb-2 dark:text-neutral-200'>{course.title}</p>
                                <p className='text-sm text-[#F2F3F4] dark:text-[#FEFEFA]  flex-grow'>{course.description}</p>
                                <Link href={`/courses`}>Learn more</Link>
                               </div>
                            </BackgroundGradient>
                        </div>
                    ))}
                </div>
            </div>
            <div className='mt-20 text-center'>
                <Link href="/courses" className='px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200'>
                    View all courses
                </Link>
            </div>
        </div>
    )
}

export default FeaturedCourses
