import Footer from "../components/Footer";
import HelloWorld from "../components/HelloWorld";

export default function Work() {
  return (
    <div className="flex flex-col items-center w-full h-full font-sans bg-gradient-to-r from-teal-200 to-blue-200">
      <div className="flex flex-col justify-center items-center text-blue-600 mt-70 w-3xl">
        <h1 className="text-8xl font-bold">Hi, I'm Arm.</h1>
        <h2 className="mt-3 text-5xl font-bold">A software engineer</h2>
        <p className="mt-10 text-xl font-inter">
          I build things that people don't see — and that's the point. Most of
          my work lives behind NDAs, powering apps used by millions, focusing on
          performance, scalability, and clean architecture.
        </p>
        <p className="mt-10 text-xl font-inter">
          When I'm not deep in backend systems, I enjoy making random passion
          projects, memes, and exploring design ideas that break the mold.
        </p>
      </div>

      <div className="mt-20">
        <HelloWorld />
      </div>
      <div className="flex justify-center items-center mt-20 w-full h-20">
        <Footer />
      </div>
    </div>
  );
}
