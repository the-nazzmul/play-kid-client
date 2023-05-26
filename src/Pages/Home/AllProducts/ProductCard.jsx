import { Rating } from "@smastrom/react-rating";
import { Link } from "react-router-dom";

import 'react-lazy-load-image-component/src/effects/blur.css';
import { LazyLoadImage } from "react-lazy-load-image-component";


const ProductCard = ({ product }) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <LazyLoadImage
                effect="blur"
                src={product.image}
                className="px-10 pt-10" />
            <div className="card-body items-center text-center">
                <h2 className="card-title">{product.title}</h2>
                <div className='flex items-center mb-4'>
                    <Rating
                        style={{ maxWidth: 130 }}
                        readOnly
                        orientation="horizontal"
                        value={product.rating}
                        className='mr-2'
                    />
                    <p>{product.rating}</p>
                </div>
                <p>Price: ${product.price}</p>
                <div className="card-actions">
                    <button className="btn btn-primary"><Link to={`/products/${product._id}`}>View Details</Link></button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;