"use client"
import React from 'react'
import Link from 'next/link'
import { HoverEffect }  from "@/components/UI/card-hover-effect";
function Upcoming_webinars() {
  const musicCourses = [
    {
      title: "Introduction to Music Theory",
      description: "Learn the fundamentals of music theory including notation, scales, chords, and harmony.",
      link: <a href="https://example.com/music-theory-course">Enroll now</a>
    },
    {
      title: "Piano Fundamentals for Beginners",
      description: "Start your journey into playing the piano with this beginner-friendly course covering basic techniques and music reading.",
      link: <a href="https://example.com/piano-course">Enroll now</a>
    },
    {
      title: "Guitar Essentials Workshop",
      description: "Get hands-on experience with the guitar as you learn essential techniques, chords, and strumming patterns.",
      link: <a href="https://example.com/guitar-workshop">Enroll now</a>
    },
    {
      title: "Music Production Masterclass",
      description: "Unlock the secrets of music production with this comprehensive masterclass covering recording, mixing, and mastering.",
      link: <a href="https://example.com/music-production-masterclass">Enroll now</a>
    },
    {
      title: "Voice Training and Singing Techniques",
      description: "Develop your singing voice and improve your vocal techniques with personalized exercises and guidance.",
      link: <a href="https://example.com/singing-techniques-course">Enroll now</a>
    }
  ];
  
  return (
    <div className='p-12 bg-gray-900'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6'>
        <div className='text-center'>
          <h2 className='text-base text-teal-600 font-semibold tracking-wide uppercase'>FEACTURED WEBINAR</h2>
          <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>ENHANCE YOUR MUSIC</p>
        </div>
        <div className='mt-10'>
        <HoverEffect items={musicCourses.map(webinar =>(
          {
            title:webinar.title,
            description:webinar.description,
            link:'webinar.link'
          }
        ))} />

        </div>
        <div className='mt-10 text-center'><Link href="/" className='px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200'>
          View all courses
        </Link></div>

      </div>
    </div>
  )
}

export default Upcoming_webinars
