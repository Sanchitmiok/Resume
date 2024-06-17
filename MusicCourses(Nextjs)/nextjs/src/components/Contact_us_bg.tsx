"use client";
import React from "react";
import { BackgroundBeams } from "../components/UI/background-beams";
import Typewriter_Effect from "./Typewriter_Effect";

export function BackgroundBeamsDemo() {
  return (
    <div className="h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <Typewriter_Effect />
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
        If you have a question, need support, or simply want to share feedback, we're eager to hear from you. Please provide your email address below, and our team will get back to you promptly.        </p>
        <input
          type="text"
          placeholder="hi@manuarora.in"
          className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700" 
        />
      </div>
      <BackgroundBeams />
    </div>
  );
}
export default BackgroundBeamsDemo