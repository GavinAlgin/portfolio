import React from "react";

const ProjectCard = ({
  image,
  title,
  description,
  languages,
  type,
  link,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-md mx-auto sm:max-w-full">
      <img
        src={image}
        alt={title}
        className="w-full h-48 sm:h-64 md:h-72 lg:h-80 xl:h-96 object-cover"
      />
      <div className="p-4 sm:p-6">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-800">{title}</h3>
        <p className="text-gray-600 mt-2 text-sm sm:text-base">{description}</p>

        <div className="flex flex-wrap items-center mt-4 gap-2">
          <span
            className={`px-3 py-1 text-xs sm:text-sm font-semibold rounded-full ${
              type === "React"
                ? "bg-blue-100 text-blue-800"
                : type === "HTML/CSS"
                ? "bg-yellow-100 text-yellow-800"
                : "bg-green-100 text-green-800"
            }`}
          >
            {type}
          </span>
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          {languages.map((lang, index) => (
            <button
              key={index}
              className="px-3 py-1 bg-gray-200 rounded-full text-xs sm:text-sm text-gray-700"
            >
              {lang}
            </button>
          ))}
        </div>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-4 text-sm sm:text-base text-black hover:underline"
        >
          Visit Site ↗
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
