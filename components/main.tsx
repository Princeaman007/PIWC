import Hero from "./hero";
import Nosvaleur from "./valeur";
import OverlayText from "./international";
import PastorProfile from "./pasteur";
import Programs from "./programe";
import Verset from "./verset";



export default function Main() {

   
    
    return(
        <div className=" border border-2 border-solid border-gray-950">
        <Hero/>
        <Nosvaleur/>
        <OverlayText/>
        <PastorProfile/>
        <Verset/>
        <Programs/>
        </div>
    );
}