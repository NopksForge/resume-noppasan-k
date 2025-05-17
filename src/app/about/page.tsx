import Image from "next/image";
import JobCard from "../components/JobCard";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="flex flex-col items-center w-full h-full font-sans bg-gradient-to-tl from-blue-200 to-blue-50">
      <h1 className="text-7xl font-bold text-blue-700 mt-50">Hello World.</h1>

      <div className="flex flex-row gap-20 justify-center items-center mt-20 w-4xl">
        <div className="flex flex-col items-center justify-center bg-gradient-to-bl from-blue-400 to-blue-100 rounded-full w-[250px] h-[250px]">
          <Image
            src="/images/profile.png"
            alt="profile picture"
            width={150}
            height={150}
          />
        </div>

        <div className="flex flex-col justify-center">
          <h1 className="text-2xl font-semibold text-blue-600 group">
            I'm a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 group-hover:hidden">
              Full Stack Developer
            </span>
            <span className="hidden justify-center items-center px-2 py-1 w-60 h-6 text-white bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 rounded-full group-hover:inline-flex">
              Barista
            </span>
          </h1>
          <h1 className="text-2xl font-semibold text-blue-600">
            working from Bangkok, Thailand
          </h1>
          <p className="pt-4 text-blue-600">
            I'm Arm Noppasan Kerdsomjit, <br />
            a dedicated professional with a solid background in <br />
            software engineering and a keen interest in pushing the <br />
            boundaries of web development. 🚀
          </p>

          <p className="pt-4 text-blue-600">
            Let's connect! I'm open to discussions on software development,{" "}
            <br />
            innovative projects, and opportunities for collaboration. 🌐
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-y-20 mt-30">
        <h2 className="w-full text-2xl font-semibold text-blue-600">
          Experience
        </h2>

        <JobCard
          companyName="Arise by INFINITAS"
          companyLogo="/images/logo_arise.png"
          jobTitle="Full Stack Developer"
          jobDescription={[
            "Built scalable auth microservices for Paotang apps.",
            "Used internal Go libraries wrapping Redis, PostgreSQL, and Echo.",
            "Followed Clean Architecture for maintainability.",
            "Ran backend load tests with K6.",
            "Worked with GitLab CI/CD, Docker, Kubernetes, Helm, and Kustomize.",
            "Deployed services using Google Cloud Platform.",
            "Collaborated in Agile Scrum using Jira and Confluence.",
          ]}
        />

        <JobCard
          companyName="Toyota Tsusho DENSO Electronics"
          companyLogo="/images/logo_tdet.png"
          jobTitle="Software Engineer"
          jobDescription={[
            "Automated Excel-to-Simulink flow, saving 60% time.",
            "Built C-code/model matching tool for efficient testing.",
            "Co-developed automotive software using V-cycle.",
            "Won “Best Developer” Kaizen award.",
          ]}
        />
      </div>
      <div className="flex justify-center items-center mt-20 w-full h-20">
        <Footer />
      </div>
    </div>
  );
}
