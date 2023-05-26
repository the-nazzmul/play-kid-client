import 'aos/dist/aos.css'
import Aos from "aos";
import { useEffect } from "react";


const LatestBlogs = () => {

    useEffect(()=>{
        Aos.init()
    },[])

    return (
        <div data-aos="fade-up" >
            <h1 className="my-12 text-center font-bold text-5xl">Latest Blogs!</h1>
            <p className="mb-12 text-center w-1/2 mx-auto ">Check out our latest blog.. Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim voluptate commodi tempora facilis magnam neque omnis ratione amet reiciendis dolorum?</p>

            <div className="grid lg:grid-cols-3 gap-4 mx-auto my-12">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://img.freepik.com/free-photo/boy-girl-home-playing-with-toys-together_23-2148630635.jpg?w=1800&t=st=1684660850~exp=1684661450~hmac=f3430460c6f20fa88a6e6d29a6996cdac621f175e1779d05dbe0003987980a5a" alt="Kids" className="rounded-xl" />
                    </figure>
                    <div className="card-body">
                        <div className="flex gap-4">
                            <p><span className="font-bold">By:</span> Jhankar Mahbub</p>
                            <p><span className="font-bold">Date:</span> 12/03/23</p>
                        </div>

                        <h2 className="card-title text-left">Shape sorter toys makes learning so easy!</h2>
                        <div className="card-actions mt-8">
                            <button className="btn btn-primary">Read More</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://img.freepik.com/free-photo/front-view-little-boy-playing-with-toy-planes-blue-floor_179666-1059.jpg?w=1800&t=st=1684661222~exp=1684661822~hmac=7de6460e12aa59d0fe9df190b586663610903dc33d32afb8166ae915a88361ca" alt="Kids" className="rounded-xl" />
                    </figure>
                    <div className="card-body">
                        <div className="flex gap-4">
                            <p><span className="font-bold">By:</span> Gias Uddin</p>
                            <p><span className="font-bold">Date:</span> 12/03/22</p>
                        </div>

                        <h2 className="card-title text-left">Your child could be someone special in future!</h2>
                        <div className="card-actions mt-8">
                            <button className="btn btn-primary">Read More</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://img.freepik.com/free-photo/asian-boy-girl-are-happily-playing-colorful-wood-block-toy_1150-6274.jpg?w=1800&t=st=1684661319~exp=1684661919~hmac=2269e208932136928c156c7de7880984a7a8f940759b3a73ee5ee8edc82415c1" alt="Kids" className="rounded-xl" />
                    </figure>
                    <div className="card-body">
                        <div className="flex gap-4">
                            <p><span className="font-bold">By:</span> Gopal Bhar</p>
                            <p><span className="font-bold">Date:</span> 12/03/21</p>
                        </div>

                        <h2 className="card-title text-left">Giving children the environment to be curious helps them learn more!</h2>
                        <div className="card-actions mt-8">
                            <button className="btn btn-primary">Read More</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default LatestBlogs;