import 'aos/dist/aos.css'
import Aos from "aos";
import { useEffect } from "react";

const Offer = () => {

    useEffect(()=>{
        Aos.init()
    },[])

    return (
        <div data-aos="fade-up" className="hero min-h-screen my-20" style={{ backgroundImage: `url("https://img.freepik.com/free-photo/view-colorful-sticks-with-copy-space_23-2148643824.jpg?w=1800&t=st=1684660236~exp=1684660836~hmac=1a339557de547cf289f022e433e0736973be9ada3173951b65deb8f31867ca6c")` }}>
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Deal of the day!</h1>
                    <p className="mb-5 text-2xl">35% Discount on selected products!</p>
                    <button className="btn btn-primary">Shop</button>
                </div>
            </div>
        </div>
    );
};

export default Offer;