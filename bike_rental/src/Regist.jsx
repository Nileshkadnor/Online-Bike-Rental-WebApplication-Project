import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {ToastContainer,  toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import bcrypt from 'bcryptjs';
import Swal from 'sweetalert2';
const Regist = () => {
    // const gradientStyle = {
    //     background: 'linear-gradient(to right,  #130e38)', // Replace these colors with your desired gradient
    //     height: '100vh', // Set the height as per your design
    //   };
    const [id, idchange] = useState("");
    const [name, namechange] = useState("");
    const [password, passwordchange] = useState("");
    const [email, emailchange] = useState("");
    const [phone, phonechange] = useState("");
    const [country, countrychange] = useState("india");
    const [address, addresschange] = useState("");
    const [gender, genderchange] = useState("female");
    const navigate = useNavigate()
    const IsValidate = () => {
        let isproceed = true;
        let errormessage = 'Please enter the value in ';
    
        if (id === null || id === '') {
            isproceed = false;
            errormessage += 'Username';
        }
        if (name === null || name === '') {
            isproceed = false;
            errormessage += 'Fullname';
        }
        if (password === null || password === '') {
            isproceed = false;
            errormessage += 'Password';
        }
        if (email === null || email === '') {
            isproceed = false;
            errormessage += 'Email';
        }
    
        // Additional validations
        if (phone === null || phone === '') {
            isproceed = false;
            errormessage += 'Phone';
        }
    
        if (country === null || country === '') {
            isproceed = false;
            errormessage += 'Country';
        }
    
        if (address === null || address === '') {
            isproceed = false;
            errormessage += 'Address';
        }
    
        if (gender === null || gender === '') {
            isproceed = false;
            errormessage += 'Gender';
        }
    
        if (!isproceed) {
            toast.warning(errormessage);
        } else {
            // Additional specific validations
            if (/^[0-9]{10}$/.test(phone)) {
                // Phone validation: 10 digits
            } else {
                isproceed = false;
                toast.warning('Please enter a valid 10-digit phone number');
            }
    
            // You can add more specific validations for other fields if needed
    
            // Email validation
            if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
                isproceed = false;
                toast.warning('Please enter a valid email');
            }
        }
    
        return isproceed;
    };
    
    const handlesubmit = (e) => {
        e.preventDefault();
        let regobj = { id, name, password, email, phone, country, address, gender };
        // Hash the password using bcrypt
        const hashedPassword = bcrypt.hashSync(password, 10);
        regobj.password = hashedPassword;

        if (IsValidate()) {
            fetch("http://localhost:8000/user", {
                method: "POST",
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(regobj)
            }).then((res) => {
                if (res.ok) {
                 
                    Swal.fire({
                        title: 'Success!',
                        text: 'Registered successfully.',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    }).then(() => {
                        navigate('/login');
                    });
                } else {
                    toast.error('Failed to register.');
                }
            }).catch((err) => {
                toast.error('Failed :' + err.message);
            });
        }
    };

    
    return (
        <section className="contact-wrapper p-4" style={{backgroundColor:'#130e38'}}>
            <div className="offset-lg-3 col-sm-6 " style={{ width: '10%' , marginTop: '70px'  }}>
                <form className="container "  onSubmit={handlesubmit}>
                    <div className="card">
                        <div className="card-header">
                            <h1>Owner Registration</h1>
                        </div>
                        <div className="card-body">

                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>User Name <span className="errmsg">*</span></label>
                                        <input value={id}   onChange={e => idchange(e.target.value)} placeholder="Enter your username"className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Password <span className="errmsg">*</span></label>
                                        <input value={password}  onChange={e => passwordchange(e.target.value)} type="password" placeholder="Enter your password" className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Full Name <span className="errmsg">*</span></label>
                                        <input value={name}  onChange={e => namechange(e.target.value)} placeholder="Enter your fullname" className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Email <span className="errmsg">*</span></label>
                                        <input value={email}   onChange={e => emailchange(e.target.value)} placeholder="Enter your email" className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Phone <span className="errmsg">*</span></label>
                                        <input value={phone} onChange={e => phonechange(e.target.value)} placeholder="Enter your phone number" className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Country <span className="errmsg">*</span></label>
                                        <select value={country} onChange={e => countrychange(e.target.value)} className="form-control">
                                            <option value="india">India</option>
                                            <option value="usa">USA</option>
                                            <option value="singapore">Singapore</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Address<span className="errmsg">*</span></label>
                                        <textarea value={address} onChange={e => addresschange(e.target.value)}placeholder="Enter your address" className="form-control"></textarea>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Gender<span className="errmsg">*</span></label>
                                        <br></br>
                                        <input type="radio"  onChange={e => genderchange(e.target.value)} name="gender" value="male" className="app-check" ></input>
                                        <label>Male</label><br/>
                                        <input type="radio"  onChange={e => genderchange(e.target.value)} name="gender" value="female" className="app-check" ></input>
                                        <label>Female</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                   <div className="Footer " style={{ textAlign: "center"  }} >
                            <button type="submit" className="btn btn-primary w-25 me-2 h-75 ">Register</button> 
                            <Link to={'/Login'}   className="btn btn-danger w-25 me-2 h-50 ">Login</Link>
                            <ToastContainer/>
                            </div>
                        
                    </div>
                </form>
            </div>
</section>

    );
}

export default Regist;