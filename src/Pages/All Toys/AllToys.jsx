import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTitle } from "../../Hooks/useTitle";


const AllToys = () => {
    const [allToys, setAllToys] = useState([])

    useTitle('All Toys')

    useEffect(() => {
        fetch("https://play-kid-server.vercel.app/all-products-limit")
            .then(res => res.json())
            .then(data => {
                setAllToys(data);
            })
    }, [])

    const handleSearch = event => {
        event.preventDefault()
        const form = event.target;
        const search = form.search.value
        fetch(`https://play-kid-server.vercel.app/search/${search}`)
            .then(res => res.json())
            .then(data => {
                setAllToys(data)
            })
    }

    return (
        <div>
            <div className="text-center py-12">
                <h1 className="text-5xl font-bold">All Toys!</h1>
            </div>

            {/* Search */}
            <form onSubmit={handleSearch} className="mb-12 flex justify-center">
                <input type="text" placeholder="Search here" className="input input-bordered w-1/3 mr-2" name="search" required />
                <input type="submit" value="Search" className="btn btn-primary" />
            </form>

            <div className="overflow-x-auto">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            <th>Seller</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Sub Category</th>
                            <th>Available Quantity</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allToys.map(toy =>
                                <tr key={toy._id}>

                                    <td>{toy.seller}</td>
                                    <td>{toy.title}</td>
                                    <td>{toy.price}</td>
                                    <td>{toy.sub_category}</td>
                                    <td>{toy.available_quantity}</td>
                                    <td><button className="btn btn-primary"><Link to={`/products/${toy._id}`}>View Details</Link></button></td>

                                </tr>
                            )
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default AllToys;