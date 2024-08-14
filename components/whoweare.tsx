// components/PhotoCollage.js

import Image from 'next/image';

const PhotoCollage = () => {
  return (
    <div className="flex flex-col items-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Photo Collage</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="w-full h-64">
          <Image
            src="/PIWC/assets/hero.jpeg"
            alt="Description for image 1"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className=" w-full h-64">
          <Image
            src="/PIWC/assets/aboute01.jpg"
            alt="Description for image 2"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="h-48 w-48 md:h-96 md:w-96">
          <Image
            src="/PIWC/assets/about02.jpeg"
            alt="Description for image 3"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="w-full h-64 md:col-span-2">
          <Image
            src="/PIWC/assets/etude.jpeg"
            alt="Description for image 4"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className=" w-full h-64 md:col-span-1">
          <Image
           src="/PIWC/assets/about04.jpg"
            alt="Description for image 5"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default PhotoCollage;
