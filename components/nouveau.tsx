// components/CirclePhotoCollage.js

import Image from 'next/image';

const CirclePhotoCollage = () => {
  return (
    <div className="container mx-auto p-4 flex flex-col items-center h-screen">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4 text-center">WHO ARE WE</h2>
            <p className="text-center max-w-xl mb-28 text-gray-700">
            This is an example of a circular photo collage. You can use this layout to showcase multiple images in a visually appealing circular arrangement. Customize the images and content as per your needs.
            </p>
                <div className="relative w-96 h-96">
                    {/* Central Image */}
                    <div className="absolute top-1/4 left-1/4 w-64 h-64">
                    <Image
                        src="/assets/centre.jpg"// Replace with your image path
                        alt="Central Image"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-full shadow-lg"
                    />
                    </div>
                    {/* Top Image */}
                    <div className="absolute top-0 left-1/4 w-32 h-32 transform -translate-x-1/2 -translate-y-1/2">
                    <Image
                        src="/assets/verset.jpeg" // Replace with your image path
                        alt="Top Image"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-full shadow-lg"
                    />
                    </div>
                    {/* Bottom Image */}
                    <div className="absolute bottom-0 left-1/4 w-32 h-32 transform -translate-x-1/2 translate-y-1/2">
                    <Image
                        src="/assets/full.jpg" // Replace with your image path
                        alt="Bottom Image"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-full shadow-lg"
                    />
                    </div>
                    {/* Left Image */}
                    <div className="absolute top-1/4 left-0 w-40 h-40 transform -translate-x-1/2 -translate-y-1/2">
                    <Image
                    src="/assets/elder.jpg" // Replace with your image path
                        alt="Left Image"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-full shadow-lg"
                    />
                    </div>
                    {/* Right Image */}
                    <div className="absolute top-1/4 right-0 w-32 h-32 transform translate-x-1/2 -translate-y-1/2">
                    <Image
                        src="/assets/about04.jpg" // Replace with your image path
                        alt="Right Image"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-full shadow-lg"
                    />
                    </div>
                    {/* Top-Left Image */}
                    <div className="absolute top-0 left-0 w-24 h-24 transform -translate-x-1/2 -translate-y-1/2">
                    <Image
                        src="/assets/danse01.jpg" // Replace with your image path
                        alt="Top-Left Image"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-full shadow-lg"
                    />
                    </div>
                    {/* Top-Right Image */}
                    <div className="absolute top-0 right-0 w-24 h-24 transform translate-x-1/2 -translate-y-1/2">
                    <Image
                        src="/assets/jeudi.jpeg" // Replace with your image path
                        alt="Top-Right Image"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-full shadow-lg"
                    />
                    </div>
                    {/* Bottom-Left Image */}
                    <div className="absolute bottom-0 left-0 w-24 h-24 transform -translate-x-1/2 translate-y-1/2">
                    <Image
                        src="/assets/elise.jpg" // Replace with your image path
                        alt="Bottom-Left Image"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-full shadow-lg"
                    />
                    </div>
                    {/* Bottom-Right Image */}
                    <div className="absolute bottom-0 right-0 w-48 h-48 transform translate-x-1/2 translate-y-1/2">
                    <Image
                        src="/assets/danse.jpg"// Replace with your image path
                        alt="Bottom-Right Image"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-full shadow-lg"
                    />
                    </div>
                </div>
    </div>
  );
}

export default CirclePhotoCollage;
