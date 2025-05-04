import React, { useRef } from "react";
import { Project } from "../types";

interface Props {
  projects: Project[];
}

const ProjectCarousel: React.FC<Props> = ({ projects }) => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const scrollToCard = (index: number) => {
    const card = cardRefs.current[index];
    card?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  };

  return (
    <>
      <div className="relative w-full">
        <div
          className="flex overflow-x-auto snap-x snap-mandatory space-x-8 px-24 pb-10 cursor-grab no-scrollbar"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {projects.map((proj, idx) => (
            <div
              key={idx}
              ref={(el) => (cardRefs.current[idx] = el)}
              className="min-w-[900px] h-[600px] bg-[#F6F6F2] rounded-xl shadow-sm flex-shrink-0 snap-center flex flex-col justify-between p-8"
            >
              <div>
                <h2 className="text-3xl font-bold mb-4">{proj.title}</h2>
                <p className="text-gray-700 mb-4">{proj.description}</p>
                <div className="flex flex-wrap gap-2">
                  {proj.skills.map((skill, i) => (
                    <span key={i} className="px-2 py-1 text-sm bg-gray-200 rounded">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-4 flex gap-4">
                {proj.links.map((link, i) => (
                  <a
                    key={i}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div className="flex space-x-6 mt-6 justify-center">
        {projects.map((proj, idx) => (
          <button
            key={idx}
            onClick={() => scrollToCard(idx)}
            className="px-4 py-2 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium"
          >
            {proj.title}
          </button>
        ))}
      </div>
    </>
  );
};

export default ProjectCarousel;
