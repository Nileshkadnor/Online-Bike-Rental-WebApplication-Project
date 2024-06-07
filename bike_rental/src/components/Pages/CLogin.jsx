import bcrypt from 'bcryptjs';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
import '../style/AboutUs.css'
const CLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    sessionStorage.clear();
  }, []);

  const proceedLogin = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const res = await fetch("http://localhost:8000/user2/" + username);
        const resp = await res.json();

        if (Object.keys(resp).length === 0) {
          toast.error('Please Enter a valid username');
        } else {
          const storedHashedPassword = resp.password;

          // Use bcrypt to compare the entered password with the stored hashed password
          const isPasswordMatch = bcrypt.compareSync(password, storedHashedPassword);

          if (isPasswordMatch) {
            // toast.success('Success');
            // sessionStorage.setItem('username', username);
            // sessionStorage.setItem('userrole', resp.role);
            // usenavigate('/BikeCustomerDb');
            Swal.fire({
              title: 'Login Successful',
              text: 'Welcome back!',
              icon: 'success',
              confirmButtonText: 'OK'
            }).then(() => {
              // Navigate to the desired page after SweetAlert is closed
              navigate('/Caddedbike');
            });
          } else {
            toast.error('Please Enter valid credentials');
          }
        }
      } catch (err) {
        toast.error('Login Failed due to :' + err.message);
      }
    }
  };

  const validate = () => {
    let result = true;
    if (username === '' || username === null) {
      result = false;
      toast.warning('Please Enter Username');
    }
    if (password === '' || password === null) {
      result = false;
      toast.warning('Please Enter Password');
    }
    return result;
  };

  return (
    <section className="login-wrapper p-5" style={{ backgroundColor: '#3B3B3B' }}>
      <div className="container-xxl" style={{ marginTop: '70px' }}>
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-8 col-sm-10">
            <div className="card">
              <div className="card-body p-5">
                <h2 className="text-center">CUSTOMER LOGIN</h2>
                <p className="text-center mb-4">Welcome Back!!</p>
                <form onSubmit={proceedLogin}>
                  <div className="mb-3">
                    <label>User Name <span className="errmsg">*</span></label>
                    <input
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="form-control"
                      placeholder="Enter your username"
                    /><br/>
                    <label>Password <span className="errmsg">*</span></label>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="form-control"
                      placeholder="Enter your password"
                    />
                  </div>
                  {/* <div className="mb-3">
                    <Link to="/Forgotpass" className="form-link">
                      Forgot password?
                    </Link>
                  </div> */}<br/>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <p className='m-0'>Don't have an account?</p>
                    <Link to="/regist" className="form-link">
                      Sign up
                    </Link>
                  </div>
                  <div className="d-grid gap-2 ">
                    <button type="submit" className="btn btn-primary">Login</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CLogin;
