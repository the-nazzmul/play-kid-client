import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { useTitle } from "../../Hooks/useTitle";


const MyToys = () => {

    const [myToys, setMyToys] = useState([])
    const { user } = useContext(AuthContext)
    const [selectedValue, setSelectedValue] = useState('');

    useTitle('My Toys')

    useEffect(() => {
        fetch(`https://play-kid-server.vercel.app/my-toys/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyToys(data);
            })
    }, [user?.email])

    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })
            .then((result) => {
                if (result.isConfirmed) {
                    fetch(`https://play-kid-server.vercel.app/toys/${id}`, {
                        method: "DELETE"
                    })
                        .then(res => res.json())
                        .then(data => {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = myToys.filter(myToy => myToy._id !== id)
                            setMyToys(remaining)
                        })
                }
            })
    }
    const handleSelect = (event) => {
        setSelectedValue(event.target.value);
        fetch(`https://play-kid-server.vercel.app/sort/${event.target.value}?email=${user?.email}`)
        .then(res => res.json())
        .then(data=> setMyToys(data))
        
    }



    return (
        <div>
            <div className="text-center py-12">
                <h1 className="text-5xl font-bold">My Toys!</h1>
            </div>

            <div className="flex items-center justify-end mb-8">
                <select value={selectedValue} onChange={handleSelect} className="select select-sm select-bordered w-full max-w-xs ">
                    <option>Sort by price</option>
                    <option value='ascending'>Low to High</option>
                    <option value='descending'>High to Low</option>
                </select>

            </div>

            <div className="overflow-x-auto">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Rating</th>
                            <th>Seller Name</th>
                            <th>Seller Email</th>
                            <th>Available Quantity</th>
                            <th>Category</th>
                            <th>Sub Category</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myToys.map(myToy =>
                                <tr key={myToy._id}>
                                    <td>{
                                        myToy.image ? <img className="avatar w-12 h-12 rounded" src={myToy.image} /> : ''
                                    }</td>
                                    <td>{myToy.title}</td>
                                    <td>{myToy.price}</td>
                                    <td>{myToy.rating}</td>
                                    <td>{myToy.seller}</td>
                                    <td>{myToy.seller_email}</td>
                                    <td>{myToy.available_quantity}</td>
                                    <td>{myToy.age_category}</td>
                                    <td>{myToy.sub_category}</td>
                                    <td><button onClick={() => handleDelete(myToy._id)} className="btn btn-xs bg-red-600">Delete</button></td>
                                    <td><button className="btn btn-primary btn-xs">
                                        <Link to={`/update-product/${myToy._id}`} >Update</Link>
                                    </button></td>
                                </tr>
                            )
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyToys;