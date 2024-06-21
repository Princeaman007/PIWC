
import { Instagram, Youtube, Facebook, LandPlot} from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        <div>
          <h2 className="text-xl font-bold mb-4">My Church</h2>
          <p className="mb-4">Nous sommes une communauté engagée à servir et à partager l amour.</p>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">Nos rendez-vous</h2>
          <p>Dimanche :</p>
          <ul className="space-y-2">
            <li>1er Culte en Anglais de 10h à 13h</li>
            <li>2ème Culte en Français de 13h30 à 15h30</li>
            <li>Mercredi : Étude biblique à 20h</li>
            <li>Jeudi : Culte en ligne à  20h</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">Contacts & Réseaux Sociaux</h2>
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
          My Church © 2024. Tous Droits Réservés. – Réalisé par Prince Aman
        </p>
      </div>
    </footer>
  );
};

export default Footer;
