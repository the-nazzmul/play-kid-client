import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Registration = () => {

    const [error, setError] = useState('')

    const { register, updateUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRegistration = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;

        const passwordCheck = (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password));
        if (!passwordCheck) {
            setError('Password must contain 1 uppercase letter, 1 lowercase letter, 1 number, 1 special character and should be at least 8 characters');
            return;
        }

        register(email, password)
            .then(res => {
                if (res.user) {
                    updateUser(name, photo)
                    Swal.fire({
                        icon: 'success',
                        title: 'Congratulation!',
                        text: 'Registration successful!',
                    })
                    navigate('/')
                }
            })
            .catch(err => setError(err.message))
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div>
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold my-8">Please Register!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegistration} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name="email" placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" value="Register" className="btn btn-primary" />
                        </div>
                        <small className="mt-4">Already have an account? <Link to="/login" className="text-blue-600 underline">Login</Link></small>
                        <small className="mt-4 text-red-600">{error}</small>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Registration;