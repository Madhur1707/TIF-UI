import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="flex flex-col-reverse lg:flex-row items-center lg:items-start lg:justify-between px-6 lg:px-10 py-12 lg:py-10">
      <div className="lg:w-1/2 text-center lg:text-left mt-8 lg:mt-0">
        <h2 className="text-4xl lg:text-5xl font-bold text-primary lg:mt-20">
          Discover the
          <br />
          <span style={{ color: "#E23744" }}>Best</span> Food
          <br />
          and Drinks
        </h2>
        <p className="text-gray-600 mt-4">
          Naturally made Healthcare Products <br />
          for the better care & support of your body.
        </p>
        <Button className="bg-secondary hover:bg-secondary rounded-3xl text-white font-medium mt-8">
          Explore Now!
        </Button>
      </div>
      <img
        src="/hero.png"
        alt="Delicious food"
        className="lg:w-5/12 mb-8 lg:mb-0 lg:mt-0 rounded-lg shadow-lg"
      />
    </section>
  );
};

export default Hero;
