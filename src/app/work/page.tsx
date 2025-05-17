import Footer from "../components/Footer";
import HelloWorld from "../components/HelloWorld";

export default function Work() {
  return (
    <div className="flex flex-col items-center w-full h-screen font-sans bg-gradient-to-r from-teal-200 to-blue-200">
      <div className="flex flex-col justify-center items-center text-blue-600 w-3xl mt-50">
        <h1 className="text-7xl font-bold">Hi, I'm Arm.</h1>
        <h2 className="text-4xl font-bold">A software engineer.</h2>
        <p className="mt-10 text-xl">
          I build things that people don't see — and that's the point. Most of
          my work lives behind NDAs, powering apps used by millions, focusing on
          performance, scalability, and clean architecture.
        </p>
        <p className="mt-10 text-xl">
          When I’m not deep in backend systems, I enjoy making random passion
          projects, memes, and exploring design ideas that break the mold.
        </p>
      </div>

      <div className="mt-20">
        <HelloWorld />
      </div>
      <div className="absolute bottom-0 justify-center items-center mt-20 w-full h-20">
        <Footer />
      </div>
    </div>
  );
}
