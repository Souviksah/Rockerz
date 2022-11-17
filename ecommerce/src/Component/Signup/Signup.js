import './Signup.css';
import { useForm } from "react-hook-form";

function Signup() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (e) => {
    alert("Register Successfully !")
  }; 

  return (
    <>
    <div className='appo'>
    <div className="col-lg-11 order-1  order-lg-2,   header-img w-30 d-flex justify-content-center flex-column">
      
      <img src={'../../../../Images/pic12.jpg'} className="pop" alt='pop' height="300px" width="400px" />
      </div>
      
      <div className="container w-25 p-3 background mt-5">
        <h3 className='text-center'>Register</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row my-3">
            <div className="col-3">
              <label for="fname">First Name : </label>
            </div>
            <div className="col-9">
              <input type="text"{...register("firstName", { required: true })} placeholder="Your First Name.." />
              {errors.firstName && <p className="error">Please enter valid First Name !</p>}
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <label for="lname">Last Name : </label>
            </div>
            <div className="col-9">
              <input type="text" {...register("lastName", { required: true })} placeholder="Your Last Name.." />
              {errors.lastName && <p className="error">Please enter valid Last Name !</p>}
            </div>
          </div>
          <div className="row my-3">
            <div className="col-3">
              <label for="email">Email : </label>
            </div>
            <div className="col-9">
              <input type="email"{...register("email", { required: true, pattern: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/ })} placeholder="Your email.." />
              {errors.email && <p className="error">Please enter valid Email !</p>}
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <label for="password">Password : </label>
            </div>
            <div className="col-9">
              <input type="password" {...register("password", { required: true, pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/ })} placeholder="Your password.." />
              {errors.password && <p className="error">Please enter valid Password !</p>}
            </div>
          </div>
          <div className='mt-3'>
            <button type='submit' className='btn btn-outline-success btn-primary text-white'>Create Account</button>
          </div>
        </form>
      </div>
      </div>
    </>
  );
}

export default Signup;