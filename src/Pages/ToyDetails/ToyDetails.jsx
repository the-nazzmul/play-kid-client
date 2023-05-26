import { Rating } from "@smastrom/react-rating";
import { Link, useLoaderData } from "react-router-dom";


const ToyDetails = () => {
    const { title, image, seller, seller_email, price, rating, available_quantity, description } = useLoaderData()
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure><img src={image} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>Price: ${price}</p>
                    <div className='flex items-center mb-4'>
                        <Rating
                            style={{ maxWidth: 130 }}
                            readOnly
                            orientation="horizontal"
                            value={rating}
                            className='mr-2'
                        />
                        <p>{rating}</p>
                    </div>
                    <p>Seller: {seller}</p>
                    <p>Seller email: {seller_email}</p>
                    <p>Available Quantity:{available_quantity}</p>
                    <p>Product Description: <small>{description}</small></p>
                    
                    <div className="card-actions justify-center my-8">
                        <button className="btn btn-primary"><Link to='/'>Go to Home</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;