import { Formik, useFormik } from "formik"
export function FormikDemo(){

    const formik = useFormik({

        initialValues:{
            Name:'',
            Age:'',
            Mobile:'',
            City : '',
            Gender:'',
        },
        validate:ValidateUser,  
        onSubmit: (user)=>{
            console.log(user);
        },
    })

    function ValidateUser(user){
        let errors = {};
        if(user.Name.length === 0){
            errors.Name = "Name  Required";
        }
        else{
            if(user.Name.length<4){
            errors.Name = "Name Too Short";
        }

        if(user.Age === 0){
            errors.Age = "Age is required";
        }else{
            if(isNaN(user.Age)){
                errors.Age = "Age must be Number";
            }
        }

        if(user.Mobile.length === 0){
                errors.Mobile = "Required Mobile";
        }else{
                    if(!user.Mobile.match(/^\+91\d{10}$/)){
                    errors.Mobile = "Invalid Mobile"
            }
        }

        if(user.City === ''){
            errors.City = "Select City Name";
        }

        if(user.Gender === ''){
            errors.Gender = "please Select Gender";
        }
    }

        return errors;

    }
    return(
        <div className="container-fluid p-2 d-flex justify-content-center mt-5">
            <div className="bg-light p-4 w-25 m-2 rounded rounded-3 shadow">
                <h3 className="bi bi-person-fill text-center"> Register </h3>
                  <form className="mt-3" onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>Name</dt>
                    <dd><input type="text" className="form-control" onChange={formik.handleChange} name="Name" /></dd>
                    <dd className="text-danger">{formik.errors.Name}</dd>
                    <dt>Age</dt>
                    <dd><input type="text" className="form-control" onChange={formik.handleChange} name="Age"/></dd>
                    <dd className="text-danger">{formik.errors.Age}</dd>
                    <dt>Mobile</dt>
                    <dd><input type="text" className="form-control" onChange={formik.handleChange} name="Mobile"/></dd>
                    <dd className="text-danger">{formik.errors.Mobile}</dd>
                    <dt>Your City</dt>
                    <dd>
                        <select name="City" className="form-control" onChange={formik.handleChange}>
                        <option>Select City</option>
                        <option>Kolhapur</option>
                        <option>Pune</option>
                        </select>
                    </dd>
                    <dd className="text-danger">{formik.errors.City}</dd>
                    <dt>Gender</dt>
                    <dd>
                        <input onChange={formik.handleChange} type="radio" name="Gender" value="Male"/><label>Male </label>
                        <input onChange={formik.handleChange} type="radio" name="Gender" value="Female"/><label> Female </label>
                    </dd>
                    <dd className="text-danger">{formik.errors.Gender}</dd>
                    <button className="btn btn-primary w-100" type="submit">Submit</button>
                </dl>
            </form>
            </div>
        </div>
    )
}