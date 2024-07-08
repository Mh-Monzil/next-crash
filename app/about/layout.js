import Link from "next/link";
import React from "react";

const layout = ({ children }) => {
  return (
    <div>
      <nav className="my-6">
        <ul className="flex items-center gap-6 pb-10">
          <li>
            <Link href="/about/mission">Mission</Link>
          </li>
          <li>
            <Link href="/about/vision">Vision</Link>
          </li>
        </ul>
      </nav>
      {children}
    </div>
  );
};

export default layout;
