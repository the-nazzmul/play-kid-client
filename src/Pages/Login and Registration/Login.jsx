import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";

const Login = () => {

    const [error, setError] = useState('');
    const { login, googleLogin } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then(res => {
                if (res.user) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Congratulation!',
                        text: 'Login successful!',
                    })
                    navigate(from, {replace:true})
                }
            })
            .catch(err => setError(err.message))
    }
    const handleGoogleLogin = () => {


        googleLogin()
            .then(res => {
                if (res.user) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Congratulation!',
                        text: 'Login successful!',
                    })
                    navigate(from, {replace:true})
                }
            })
            .catch(err => setError(err.message))
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div>
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold my-8">Please Login!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary mb-2" type="submit" value="Login" />
                        </div>

                        <button onClick={handleGoogleLogin} className="btn btn-primary"><FcGoogle className="mr-2 text-lg" />Google</button>

                        <small className="mt-4">New to Play Kid? <Link to="/register" className="text-blue-600 underline">Register</Link></small>
                        <small className="mt-4 text-red-600">{error}</small>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Login;