import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";
import { useTitle } from "../../Hooks/useTitle";


const UpdateToy = () => {

    useTitle('Update Toy')
    const { _id, title, image, seller, seller_email, price, rating, available_quantity, description } = useLoaderData()



    const handleUpdateProduct = event => {
        event.preventDefault()
        const form = event.target;
        const price = form.price.value;
        const available_quantity = form.available_quantity.value;
        const description = form.description.value;

        const newProduct = { price, available_quantity, description }

        Swal.fire({
            title: 'Are you sure?',
            text: "Check information again if needed",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Proceed!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://play-kid-server.vercel.app/update-products/${_id}`, {
                    method: "PUT",
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify(newProduct)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.modifiedCount > 0) {
                            Swal.fire({
                                icon: 'success',
                                title: 'Congratulation!',
                                text: 'Successfully updated your product!',
                            })
                        }
                    })
            }
        })


    }

    return (
        <div className="min-h-screen bg-base-200">
            <div>
                <div className="text-center py-12">
                    <h1 className="text-5xl font-bold">Update Toy!</h1>
                </div>
                <form onSubmit={handleUpdateProduct} className=" shadow-2xl bg-base-100 px-12 py-8">
                    <div className="">
                        <div className="flex gap-2 my-4">
                            <input type="text" placeholder="Product Name" name="title" className="input input-bordered w-1/2" readOnly defaultValue={title} />
                            <input type="text" placeholder="Photo URL" name="image" className="input input-bordered w-1/2" readOnly defaultValue={image} />
                        </div>
                        <div className="flex gap-2 my-4">
                            <input type="text" placeholder="Seller Name" name="seller" className="input input-bordered w-1/2" readOnly defaultValue={seller} />
                            <input type="email" placeholder="Seller Email" name="seller_email" className="input input-bordered w-1/2" defaultValue={seller_email} readOnly />
                        </div>
                        <div className="flex flex-wrap lg:flex-nowrap gap-2 my-4">
                            <input type="text" placeholder="Price" name="price" className="input input-bordered lg:w-1/8" defaultValue={price} />
                            <input type="text" placeholder="Rating" name="rating" className="input input-bordered lg:w-1/8" readOnly defaultValue={rating} />
                            <input type="number" placeholder="Available Quantity" name="available_quantity" className="input input-bordered lg:w-1/8" defaultValue={available_quantity} />
                        </div>
                        <div className="flex gap-2 my-4">
                            <input type="text" placeholder="Product Description" name="description" className="input input-bordered w-full" defaultValue={description} />

                        </div>

                        <div className="form-control mt-6">
                            <input type="submit" value="Update Product" className="btn btn-primary" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateToy;