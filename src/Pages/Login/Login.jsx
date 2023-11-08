import { Link } from 'react-router-dom';
import img from '../../assets/login/login.svg'
import { FaGoogle } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from '../../firebase/firebase.config';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
const { signIn} = useContext(AuthContext);

    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        if(password.length < 6){
          setLoginError('Password should be at least 6 characters or long ');
          return;
        }
        else if(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
          setLoginError(" password doesn't match")
        }
        else{
          toast("Wow so easy success!");
        }
        
        signIn(email, password)
        .then(result =>{
          const user = result.user;
          console.log(user);
        })
        .catch(error => console.log(error))
    }
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () =>{
      signInWithPopup(auth, provider)
      .then(result => {
        const user =result.user;
        console.log(user);
      })
      .catch(error =>{
         console.log(error);
      })
    }
    
    return (
      <div className="hero min-h-screen bg-blue-300 w-[90%] mx-auto my-10">
        <div className="hero-content flex-col lg:flex-row">
          <div className="  mr-12">
            <img src={img} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <ToastContainer />
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
              <h1 className="text-5xl font-bold text-center">Login</h1>
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value="Login" />
                <button onClick={handleGoogleSignIn} className='btn btn-secondary my-4'><FaGoogle></FaGoogle>Google</button>
              </div>
            </form>
            <p className='my-4 text-center'>New to Online Market <Link className='text-orange-600 font-bold' to="/register">Register</Link> </p>
          </div>
        </div>
      </div>
    );
};

export default Login;