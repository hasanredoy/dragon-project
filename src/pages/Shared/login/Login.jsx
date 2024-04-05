import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
// import { updateProfile } from "firebase/auth";

const Login = () => {
  const { singInUser } = useContext(AuthContext)
  const location = useLocation()
  console.log('logcatio',location);

  const navigate = useNavigate()


  const handleLogin = (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    console.log(form.get('email'));
    const email = form.get('email')
    const password = form.get('password')

    // signin user 
    singInUser(email, password)
      .then(res => {
        console.log(res.user)
      
        navigate(location?.state? location.state : '/')
      })
      .catch(err => console.log(err))
  }
  return (
    <div>
      <Navbar></Navbar>
      <div className=" flex flex-col justify-center mx-auto gap-y-5">
        <h1 className=" text-3xl font-bold  text-center">Log in</h1>
        <form onSubmit={handleLogin} className="card-body md:w-3/4 lg:w-1/2  mx-auto">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" placeholder="email" className="input input-bordered" name="email" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" placeholder="password" className="input input-bordered" name="password" required />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>

        <p className=" text-center font-semibold hover:underline "> Don&apos;t have an Account <Link className=" text-blue-600 " to={'/register'}>Register</Link></p>
      </div>
    </div>
  );
};

export default Login;