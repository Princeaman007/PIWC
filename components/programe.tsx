// components/Programs.js

import Image from 'next/image';

const programs = [
  {
    title: 'Dimanche',
    image: '/assets/pasteur1.jpeg',
    description: [
      '1er Culte en Anglais de 10h45 à 13h00',
      '2ème Culte en Français 13h30 à 15h30 ',
    ],
  },
  {
    title: 'Lundi',
    image: '/assets/bible.jpeg',
    description: [
      'Lundi "Ecole Biblique pour tous"',
      'De 20h à 21h00 (diffusé en Live)',
    ],
  },
  {
    title: 'Jeudi',
    image: '/assets/jeudi.jpeg',
    description: [
      ' Culte (diffusé en Live)',
      'De 20h à 21h',
    ],
  },
];

const Programs = () => {
  return (
    <div className="flex flex-col items-center mb-9 mt-9">
      <h2 className="text-4xl font-bold mb-4">Nos Programmes</h2>
      <p className="text-center mb-8">Les Différents Programmes au sein de l'église</p>
      <div className="flex justify-around w-full">
        {programs.map((program, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-48 h-48 mb-4 relative">
              <Image
                src={program.image}
                alt={program.title}
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <h3 className="text-xl font-semibold">{program.title}</h3>
            {program.description.map((line, idx) => (
              <p key={idx} className="text-center">{line}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
