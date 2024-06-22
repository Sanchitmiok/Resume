import React from "react";
function Navbar() {
  return (
    <nav className="justify-around flex bg-teal-200 p-4">
      <div className="font-bold"> <span className="text-red-700">&lt;</span> PassOp <span className="text-red-500">/&gt;</span></div>
      <ul>
        <li className="flex gap-5">
          <a href="/">Home</a>
          <a href="/">Contact</a>
          <a href="/">About</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
