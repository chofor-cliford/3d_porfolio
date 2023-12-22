import { Link } from "react-router-dom";
import { projects } from "../constants";
import { arrow } from "../assets/icons";
import { CTA } from "../components";

const Projects = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        My &nbsp;
        <span className="blue-gradient_text font-semibold drop-shadow">
          Projects
        </span>
      </h1>

      <div>
        <p className="mt-5 flex flex-col gap-3 text-slate-500">
          Over the years, I’ve embarked on a multitude of projects, each leaving
          its mark on my developer’s soul. These are the ones that resonate with
          me, the ones I hold closest to my heart. 🌟 Many of these endeavors
          are open-source, inviting you to dive into the codebase, explore, and
          contribute. If something catches your eye, know that your ideas and
          collaboration are not just welcome—they’re highly valued!
        </p>
      </div>

      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project) => (
          <div className="lg:w-[400px] w-full" key={project.name}>
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={project.iconUrl}
                  alt="Project Icon"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>

            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold">
                {project.name}
              </h4>
              <p className="mt-5 flex items-center gap-2 font-poppins">
                {project.description}
              </p>
              <div>
                <Link
                  to={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600"
                >
                  Live Link
                </Link>
              </div>
              <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
            </div>
          </div>  
        ))}
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default Projects;
