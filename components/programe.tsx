// components/Programs.js

import Image from 'next/image';

const programs = [
  {
    title: 'Sunday',
    image: '/PIWC/assets/pasteur1.jpeg',
    description: [
      '1st Worship in English from 10:45 a.m. to 1:00 p.m.',
      '2nd Worship in French 1:30 p.m. to 3:30 p.m.',
    ],
  },
  {
    title: 'Monday',
    image: '/PIWC/assets/bible.jpeg',
    description: [
      'Monday "Bible School for all"',
      'From 8 p.m. to 9 p.m. (broadcast live)',
    ],
  },
  {
    title: 'THURSDAY',
    image: '/PIWC/assets/mardi.jpeg',
    description: [
      'Worship (broadcast live)',
      'From 8 p.m. to 9 p.m.',
    ],
  },
];

const Programs = () => {
  return (
    <div className="flex flex-col items-center mb-9 mt-9">
      <h2 className="text-4xl font-bold mb-4">Our Programs</h2>
      <p className="text-center mb-8">The Different Programs within the church</p>
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full">
        {programs.map((program, index) => (
          <div key={index} className="flex flex-col items-center pt-2">
            <div className=" relative w-48 h-48 mb-4">
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
              <p key={idx} className="text-center w-56 h-16">{line}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
