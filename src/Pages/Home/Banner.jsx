import banner from './../../assets/banner.jpg'

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${banner})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Welcome <br /> to <br /> Play KiD</h1>
                    <p className="mb-5">Fuel curiosity and ignite young minds with our captivating collection of educational toys. Explore our shop for interactive puzzles, engaging STEM kits, and more, designed to inspire learning and creativity. Discover the joy of education through play!</p>
                    <button className="btn btn-primary">Shop</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;