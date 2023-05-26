import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useTitle } from "../../Hooks/useTitle";


const AddToys = () => {

    useTitle('Add Toy')
    const { user } = useContext(AuthContext)

    const handleAddProduct = event => {
        event.preventDefault()
        const form = event.target;
        const title = form.title.value;
        const image = form.image.value;
        const seller = form.seller.value;
        const seller_email = form.seller_email.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const available_quantity = form.available_quantity.value;
        const age_category = form.age_category.value;
        const sub_category = form.sub_category.value;
        const description = form.description.value;

        const newProduct = { title, image, price, rating, seller, sub_category, available_quantity, seller_email, description, age_category }

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
                fetch('https://play-kid-server.vercel.app/products', {
                    method: "POST",
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify(newProduct)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            Swal.fire({
                                icon: 'success',
                                title: 'Congratulation!',
                                text: 'Successfully added your product!',
                            })
                            form.reset()
                        }
                    })
            }
        })


    }

    return (
        <div className="min-h-screen bg-base-200">
            <div>
                <div className="text-center py-12">
                    <h1 className="text-5xl font-bold">Add a Toy!</h1>
                </div>
                <form onSubmit={handleAddProduct} className=" shadow-2xl bg-base-100 px-12 py-8">
                    <div className="">
                        <div className="flex gap-2 my-4">
                            <input type="text" placeholder="Product Name" name="title" className="input input-bordered w-1/2" />
                            <input type="text" placeholder="Photo URL" name="image" className="input input-bordered w-1/2" required />
                        </div>
                        <div className="flex gap-2 my-4">
                            <input type="text" placeholder="Seller Name" name="seller" className="input input-bordered w-1/2" />
                            <input type="email" placeholder="Seller Email" name="seller_email" className="input input-bordered w-1/2" defaultValue={user.email} required readOnly />
                        </div>
                        <div className="flex flex-wrap lg:flex-nowrap gap-2 my-4">
                            <input type="text" placeholder="Price" name="price" className="input input-bordered lg:w-1/8" required />
                            <input type="text" placeholder="Rating" name="rating" className="input input-bordered lg:w-1/8" required />
                            <input type="number" placeholder="Available Quantity" name="available_quantity" className="input input-bordered lg:w-1/8" required />
                            <div className="form-control w-full lg:w-1/3 max-w-xs">
                                <select className="select select-bordered" name="age_category" required >
                                    <option value={'2-4'}>Age: 2-4</option>
                                    <option value={'5-8'}>Age: 5-8</option>
                                    <option value={'9-12'}>Age: 9-12</option>
                                </select>
                            </div>
                            <div className="form-control w-full lg:w-1/3 max-w-xs">
                                <select className="select select-bordered" name="sub_category" required>
                                    <option value={'Shape Sorters'}>Shape Sorters</option>
                                    <option value={'Puzzles'}>Puzzles</option>
                                    <option value={'Counting Toys'}>Counting Toys</option>
                                    <option value={'Building Blocks'}>Building Blocks</option>
                                    <option value={'Science Kits'}>Science Kits</option>
                                    <option value={'Robotics'}>Robotics</option>
                                    <option value={'Coding'}>Coding</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex gap-2 my-4">
                            <input type="text" placeholder="Product Description" name="description" className="input input-bordered w-full" required />

                        </div>

                        <div className="form-control mt-6">
                            <input type="submit" value="Add Product" className="btn btn-primary" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddToys;