// components/WhoWeAre.js
import Image from 'next/image';


    const WhoeWeAre = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center bg-white p-8">
      <div className="md:w-1/2 text-center md:text-left p-4">
        <h2 className="text-3xl font-bold mb-4">WHO ARE WE</h2>
        <p className="text-gray-700">
          We are dedicated to fellowship and manifesting the Kingdom of God on earth. Our mission is to equip the church to reach out to lost souls and bring them to Christ. Together, we strive to make a positive impact and share the love and message of Jesus with the world.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="relative w-full h-64">
          <Image
            src="/assets/hero.jpeg"
            alt="Who We Are"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>


        <div className="relative w-full h-64">
          <Image
            src="/assets/hero.jpeg"
            alt="Who We Are"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="relative w-full h-64">
          <Image
            src="/assets/hero.jpeg"
            alt="Who We Are"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="relative w-full h-64">
          <Image
            src="/assets/hero.jpeg"
            alt="Who We Are"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
      
    </section>
  );
}

export default WhoeWeAre;
