import img1 from './../../assets/gallery-1.jpeg'
import img2 from './../../assets/gallery-2.jpeg'
import img3 from './../../assets/gallery-3.jpeg'
import img4 from './../../assets/gallery-4.jpeg'
import img5 from './../../assets/gallery-5.jpeg'
import img6 from './../../assets/gallery-6.jpeg'
import img7 from './../../assets/gallery-7.jpeg'
import img8 from './../../assets/gallery-8.jpeg'

const Gallery = () => {
    return (
        <>
        <div className='my-8'>
            <h1 className='text-center text-5xl font-bold'>Our Gallery</h1>
        </div>
        <div className="carousel carousel-end rounded-box border-8 my-8 w-full">
            <div className="carousel-item border-8">
                <img src={img1} alt="kids learning" />
            </div>
            <div className="carousel-item border-8">
                <img src={img2} alt="kids learning" />
            </div>
            <div className="carousel-item border-8">
                <img src={img3} alt="kids learning" />
            </div>
            <div className="carousel-item border-8">
                <img src={img4} alt="kids learning" />
            </div>
            <div className="carousel-item border-8">
                <img src={img5} alt="kids learning" />
            </div>
            <div className="carousel-item border-8">
                <img src={img6} alt="kids learning" />
            </div>
            <div className="carousel-item border-8">
                <img src={img7} alt="kids learning" />
            </div>
            <div className="carousel-item border-8">
                <img src={img8} alt="kids learning" />
            </div>
        </div>
        </>
    );
};

export default Gallery;