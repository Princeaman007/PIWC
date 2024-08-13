
import { Instagram, Youtube, Facebook, LandPlot} from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        <div>
          <h2 className="text-xl font-bold mb-4">PIWC BRUSSELS</h2>
          <p className="mb-4">We are a community committed to serving and sharing love.</p>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">Our appointments</h2>
          <p>Sunday:</p>
          <ul className="space-y-2">
            <li>1st Worship in English from 10 a.m. to 1 p.m.</li>
            <li>2nd Worship in French from 1:30 p.m. to 3:30 p.m.</li>
            <li>Monday: Bible study at 8 p.m.</li>
            <li>Thursday: Online worship at 8 p.m.</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">Contacts & Social Networks</h2>
          <div className="flex gap-1">
          <LandPlot size={36} strokeWidth={2.25} />
          <p className="mb-4">Techenologiestraat 51-55 1082 Berchem Saint Agathe</p>
          </div>
          
          <div className="flex space-x-* justify-items-center">
              <a href="https://www.instagram.com">
                <Button variant="link">
                <Instagram size={36} strokeWidth={2.25} />
                </Button>
              </a>
              <a href="https://www.youtube.com">
                <Button variant="link">
                <Youtube size={36} strokeWidth={2.25} />
                </Button>
              </a>
              <a href="https://www.facebook.com">
                <Button variant="link">
                <Facebook size={36} strokeWidth={2.25} />
                </Button>
              </a>
          </div>
        </div>
      </div>
      <div className="container mx-auto text-center mt-8">
        <p className="text-sm text-gray-400">
        PIWC BRUSSELS © 2024. All Rights Reserved. – Directed by Prince Aman.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
