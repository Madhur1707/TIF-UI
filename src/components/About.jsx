import { Button } from "./ui/button";

const About = () => {
  return (
    <section className="bg-gray-100 py-16 px-6 lg:px-20 flex flex-col lg:flex-row items-center lg:space-x-12">
      <img src="/about.png" alt="About us" className="lg:w-5/12 rounded-lg" />
      <div className="lg:w-1/2 space-y-4 text-center lg:text-left mt-8 lg:mt-0">
        <h3 className="text-3xl font-bold text-primary">About Us</h3>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur,
          laudantium. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Eius voluptatem officia, beatae enim labore aspernatur repellat
          voluptate harum cupiditate dicta.
        </p>
        <Button className="bg-secondary hover:bg-secondary rounded-3xl text-white font-medium">
          Read More
        </Button>
      </div>
    </section>
  );
};

export default About;
