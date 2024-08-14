// components/PastorProfile.js

import Image from 'next/image';

const PastorProfile = () => {
  return (
    <div className="flex flex-col  items-center justify-center py-4 shadow-md">
      <div className=" relative w-64 h-64 mb-4 md:mb-0 md:mr-4">
        <Image
          src="/PIWC/assets/pasteur.jpeg"  // Assurez-vous que l'image est dans le dossier public
          alt="Alex"
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>
      <div className="mx-4">
        <h2 className="text-center font-bold mb-4">Pasteur Alex</h2>
        <h3 className="text-center font-semibold text-amber-400 mb-4">LEADER OF THE PIWC BRUSSELS COMMUNITY.</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto eligendi et sequi. Debitis, nesciunt vero. Placeat quis perferendis voluptates, doloremque fugit culpa sit non ipsam. Id atque rem quia molestias.
        <br/>
        
         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus sequi, a commodi qui unde quos perspiciatis reprehenderit accusantium mollitia id, deserunt assumenda hic, nostrum beatae eos voluptatem. Pariatur, repellendus ab.
        <br/>
        
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur porro nemo quisquam, placeat cupiditate iste itaque, dicta error minima inventore adipisci sapiente aliquam dolorem ipsum esse quod facere non veniam!
        </p>
      </div>
    </div>
  );
};

export default PastorProfile;
