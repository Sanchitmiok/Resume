
import {WavyBackground} from "@/components/UI/wavy-background"
import { AnimatedTooltip } from "@/components/UI/animated-tooltip";

function Instructors() {
    const musicInstructors = [
        {
          id: 1,
          name: "Emily Johnson",
          designation: "Piano Instructor",
          image: "https://media.istockphoto.com/id/1354640844/photo/portrait-of-happy-high-school-teacher-in-the-classroom-looking-at-camera.jpg?s=612x612&w=0&k=20&c=KD2uhqHrVIQpFbnb8oe6C3abBBW6Fq2n1dFjkGPzKLE="
        },
        {
          id: 2,
          name: "Michael Smith",
          designation: "Guitar Instructor",
          image: "https://media.istockphoto.com/id/1457744422/photo/teacher-in-classroom-points-to-student-raising-hand.jpg?s=612x612&w=0&k=20&c=Rfo0rQV27-Lf1SooFoFts3vMsUuToRzAN_Ld6i1UPLw="
        },
        {
          id: 3,
          name: "Sophia Lee",
          designation: "Voice Coach",
          image: "https://media.istockphoto.com/id/641755258/photo/teachers-in-the-hallway.jpg?s=612x612&w=0&k=20&c=MpUTwmFKBWTTvhASICT9nP12tX10fwPLq00Wn5Q6cj4="
        },
        {
          id: 4,
          name: "David Jones",
          designation: "Music Theory Teacher",
          image: "https://media.istockphoto.com/id/1278976696/photo/mature-man-professor-standing-in-class.jpg?s=612x612&w=0&k=20&c=BBfO7aVkYBTNJ__MbRPXs2apYb4cyI3kJl9MZ2_alvc="
        },
        {
          id: 5,
          name: "Daniel Brown",
          designation: "Music Production Instructor",
          image: "https://media.istockphoto.com/id/1160926571/photo/portrait-of-male-elementary-school-teacher-standing-in-classroom.jpg?s=612x612&w=0&k=20&c=l_CVoCyASapk6kyppTvBGWZzNULZJauCrMBDSE3wI_k="
        }
      ];
      
  return (
    <div className='relative h-[40rem] overflow-hidden flex items-center justify-center'>
    <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
     <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">MEET OUR INSTRUCTOR</h2>
     <p>
        Discover the talented professionals who will guide your musical journey 
     </p>
     <div className="flex flex-row items-center justify-center mb-10 w-full">
     <AnimatedTooltip items={musicInstructors}/>
     </div>
    </WavyBackground>
    </div>
  )
}

export default Instructors
