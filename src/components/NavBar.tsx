import React from "react";

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-purple-100">
      <div className="text-xl font-bold text-purple-700">sol-doc</div>
      <div>{/* Additional navigation items can be added here if needed */}</div>
    </nav>
  );
}
