
const ProjectsCount = () => {
  return (
    <div className="h-auto md:h-[40vh] bg-black w-full py-10 px-6 md:px-20 text-white">
      <div className="flex items-center gap-4 mb-8">
        <hr className="flex-grow border-gray-600" />
        <h2 className="text-lg md:text-xl font-semibold whitespace-nowrap">
          Projects Overview
        </h2>
        <hr className="flex-grow border-gray-600" />
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-10">
        {/* Concept Projects */}
        <div className="text-center">
          <h3 className="text-6xl font-bold">20+</h3>
          <p className="text-sm text-gray-400 mt-2">Concept projects completed</p>
        </div>

        {/* Freelancing Projects */}
        <div className="text-center">
          <h3 className="text-6xl font-bold">6</h3>
          <p className="text-sm text-gray-400 mt-2">
            Freelancing and collaborative projects worked on
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCount;
