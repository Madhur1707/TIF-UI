import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img src="/logo.png" alt="Logo" className="h-15 w-20 ml-4" />
      </div>
      <Button className="bg-secondary hover:bg-secondary rounded-3xl text-white font-medium mr-4">
        Get in Touch
      </Button>
    </header>
  );
};

export default Header;
