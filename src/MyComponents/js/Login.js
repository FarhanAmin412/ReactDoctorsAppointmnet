import React from 'react';
import { useFormik } from 'formik';
import { TextField } from './TextField';
import { Link } from 'react-router-dom';
import '../css/Login.css';

export const Login = () => {
  const formik = useFormik({
    initialValues: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    },
    onSubmit: values => {
        alert(JSON.stringify(values,null,2));
    },
    validate: values => {
        let errors = {
            
        }
        if(!values.firstName){
            errors.firstName = "*Required"
        }else if(!/^[a-zA-Z][a-zA-Z\\s]+$/.test(values.firstName)){
            errors.firstName = "*Must be Alphabetic"    
        }

        if(!values.lastName){
          errors.lastName = "*Required"
      }else if(!/^[a-zA-Z][a-zA-Z\\s]+$/.test(values.lastName)){
          errors.lastName = "*Must be Alphabetic"    
      }
        if(!values.email){
            errors.email = "*Required"
        }else if(!/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(values.email)){
            errors.email = "*Invalid Email Format"
        }
        if(!values.password){
            errors.password = "*Required"
        }else if(!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(values.password)){
            errors.password = "*Minimum eight characters, at least one uppercase, at least one lower case, at least one digit, at least one special character"
        }
        return errors
    }
})
  return (
        <div>
        <h1 className="my-4 font-weight-bold .display-4">Login</h1>
          <form onSubmit={formik.handleSubmit}>
            <TextField label="First Name" name="firstName" type="text" onChange={formik.handleChange} value={formik.values.firstName}/>
            {formik.errors.firstName?<div style={{color: "red"}}>{formik.errors.firstName}</div>:null}
            <TextField label="last Name" name="lastName" type="text" onChange={formik.handleChange} value={formik.values.lastName}/>
            {formik.errors.lastName?<div style={{color: "red"}}>{formik.errors.lastName}</div>:null}
            <TextField label="Email" name="email" type="email" onChange={formik.handleChange} value={formik.values.email}/>
            {formik.errors.email?<div style={{color: "red"}}>{formik.errors.email}</div>:null}
            <TextField label="password" name="password" type="password" onChange={formik.handleChange} value={formik.values.password}/>
            {formik.errors.password?<div style={{color: "red"}}>{formik.errors.password}</div>:null}
            <Link to={"/Test"} state={{firstName: formik.values.firstName,lastName: formik.values.lastName,email: formik.values.email,password: formik.values.password}}><button className="btn btn-dark mt-3" style={{fontSize: "1.5rem"}} onSubmit={formik.handleSubmit} type="submit">Register</button></Link>
            <button className="btn btn-danger mt-3 mx-3" style={{fontSize: "1.5rem"}} onReset={formik.handleReset} type="reset">Reset</button>
          </form>
        </div>
  );
}
