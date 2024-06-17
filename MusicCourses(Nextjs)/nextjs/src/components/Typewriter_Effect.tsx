"use client"
import { TypewriterEffect } from "./UI/typewriter-effect"
// We're here to assist you!
function Typewriter_Effect() {
    const word = [{
        text: "We're",
        className: "text-white-500 dark:text-white-500",
      },
      {
        text: "here",
        className: "text-white-500 dark:text-white-500",
      },
      {
        text: "to",
        className: "text-white-500 dark:text-white-500",
      },
      {
        text: "assist",
        className: "text-white-500 dark:text-white-500",
      },
      {
        text: "you!",
        className: "text-blue-500 dark:text-blue-500",
      },]
  return (
    <div>
      <TypewriterEffect words={word} />
    </div>
  )
}

export default Typewriter_Effect
