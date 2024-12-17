"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

interface OnThisPageProps {
  htmlContent: string;
}

const OnThisPage: React.FC<OnThisPageProps> = ({ htmlContent }) => {
  const [headings, setHeadings] = useState<
    Array<{ id: string; text: string; link: string }>
  >([]);

  useEffect(() => {
    const doc = new DOMParser().parseFromString(htmlContent, "text/html");

    const h2Elements = doc.getElementsByTagName("h2");

    const extractedHeadings = Array.from(h2Elements).map((heading) => {    // index

      const text = heading.textContent || "";

      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");

      if (!heading.id) {
        heading.id = id;
      }

      const link = `#${heading.id}`;

      return { id, text, link };
    });

    setHeadings(extractedHeadings);
  }, [htmlContent]);

  return (
    <div className="w-72 p-4 bg-background/50 backdrop-blur border rounded-lg lg:absolute lg:top-24 lg:right-[22rem] sm: mt-10 space-y-5">
      <h2 className="text-lg font-bold mb-4 px-3">On This Page</h2>
      <nav className="space-y-2">
        {headings.map((heading) => (
          <Link
            key={heading.id}
            href={heading.link}
            className="block text-sm hover:text-primary transition-colors duration-200"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById(heading.id)?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            - {heading.text}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default OnThisPage;
