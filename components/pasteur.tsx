// components/PastorProfile.js

import Image from 'next/image';

const PastorProfile = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-4 space-x-20 shadow-md">
      <div className="w-64 h-64 relative mb-4 md:mb-0 md:mr-4">
        <Image
          src="/assets/pasteur.jpeg"  // Assurez-vous que l'image est dans le dossier public
          alt="Alex"
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>
      <div className="max-w-xl text-center md:text-left self-start">
        <h2 className="text-4xl font-bold mb-4">Pasteur Alex</h2>
        <h3 className="text-2xl font-semibold text-purple-600 mb-4">LEADER DE LA COMMUNAUTÉ PIWC BRUSSELS.</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto eligendi et sequi. Debitis, nesciunt vero. Placeat quis perferendis voluptates, doloremque fugit culpa sit non ipsam. Id atque rem quia molestias.
        </p>
        <p>
         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus sequi, a commodi qui unde quos perspiciatis reprehenderit accusantium mollitia id, deserunt assumenda hic, nostrum beatae eos voluptatem. Pariatur, repellendus ab.
        </p>
        <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur porro nemo quisquam, placeat cupiditate iste itaque, dicta error minima inventore adipisci sapiente aliquam dolorem ipsum esse quod facere non veniam!
        </p>
      </div>
    </div>
  );
};

export default PastorProfile;
