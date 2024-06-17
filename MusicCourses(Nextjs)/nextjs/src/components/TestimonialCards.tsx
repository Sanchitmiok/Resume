"use client"
import { InfiniteMovingCards } from "@/components/UI/infinite-moving-cards";

const Testimonialdata =   [
    {
      "quote": "Music education opens doors that help children pass from school into the world around them.",
      "name": "Yo-Yo Ma",
      "title": "Cellist and Music Educator"
    },
    {
      "quote": "Music can change the world because it can change people.",
      "name": "Bono",
      "title": "Lead Vocalist of U2"
    },
    {
      "quote": "Music is the universal language of mankind.",
      "name": "Henry Wadsworth Longfellow",
      "title": "American Poet and Educator"
    },
    {
      "quote": "Music is the art of thinking with sounds.",
      "name": "Jules Combarieu",
      "title": "French Musicologist"
    },
    {
      "quote": "Music is a higher revelation than all wisdom and philosophy.",
      "name": "Ludwig van Beethoven",
      "title": "German Composer and Pianist"
    }
  ]
  
function TestimonialCards() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] flex flex-col items-center justify-center overflow-hidden">
    <h2 className="text-3xl font-bold text-center mb-8 z-10">Here is our harmony: Voices of success</h2>
    <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
        <InfiniteMovingCards items={Testimonialdata} direction="right" speed="slow" />
        </div>
    </div>
    </div>
  )
}

export default TestimonialCards
