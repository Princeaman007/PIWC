import Image from 'next/image';

const Nosvaleur = () => {
    return (
        <div className="h-64 text-center mt-9">
            <span className="text-5xl font-bold ">Nos Valeurs</span>
            <div className=" flex  items-center justify-center space-x-40 flex-initial mt-8 mb-11">
                <div className="avatar rounded-full h-36 w-36 bg-amber-300 flex items-center justify-center">
                    <p>Amour</p>
                </div>
                <div className="avatar rounded-full h-36 w-36 bg-amber-300 flex items-center justify-center">
                    <p>Sainteté</p>
                </div>
                <div className="avatar rounded-full h-36 w-36 bg-amber-300 flex items-center justify-center">
                    <p>Puissance</p>
                </div>

            </div>



        </div>
    );
};

export default Nosvaleur;