import Image from 'next/image';

const Nosvaleur = () => {
    return (
        <div className="md:h-64 text-center mt-9">
            <span className="text-4xl font-bold">OUR VALUES</span>
            <div className=" flex flex-col md:flex-row items-center justify-center md:space-x-40  md:mt-8 md:mb-11 flex-wrap gap-4 mt-4 mb-16">
                <div className="avatar rounded-full h-36 w-36 bg-amber-200 flex justify-center items-center">
                    <p>lOVE</p>
                </div>
                <div className="avatar rounded-full h-36 w-36 bg-amber-200 flex justify-center items-center">
                    <p>Holiness</p>
                </div>
                <div className="avatar rounded-full h-36 w-36 bg-amber-200 flex justify-center items-center">
                    <p>Power</p>
                </div>

            </div>



        </div>
    );
};

export default Nosvaleur;