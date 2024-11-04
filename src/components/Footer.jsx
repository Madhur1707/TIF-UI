import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10 px-6 lg:px-20">
      <div className="flex flex-col lg:flex-row justify-between space-y-8 lg:space-y-0">
        {/* Logo Section */}
        <div className="flex items-center flex-grow">
          <img src="/logo.png" alt="Logo" className="h-15 w-20" />
        </div>

        {/* Contact Us Section */}
        <div className="flex-grow">
          <h5 className="text-lg font-semibold text-black">Contact Us</h5>
          <p className="text-justify text-sm">
            Lorem Ipsum Pvt Ltd. 5/1, <br /> Magalton Road, Phartosh Gate near
            YTM <br />
            Market, XYZ-343434{" "}
          </p>
          <p className="mt-2 text-sm">example2020@gmail.com</p>
          <p className="mt-2 text-sm">(904) 443-0343</p>
        </div>

        {/* More Section */}
        <div className="flex-grow">
          <h5 className="text-lg font-semibold text-black">More</h5>
          <p className="mt-2 text-sm">About Us</p>
          <p className="mt-2 text-sm">Products</p>
          <p className="mt-2 text-sm">Career</p>
        </div>

        {/* Social Links Section */}
        <div className="flex-grow lg:flex-none lg:text-left text-center">
          <h5 className="text-lg font-semibold text-black">Social Links</h5>
          <div className="flex justify-center lg:justify-start space-x-4 mt-4 items-center">
            <Instagram className="w-5 h-5" />
            <Twitter className="w-5 h-5" />
            <Facebook className="w-5 h-5" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
