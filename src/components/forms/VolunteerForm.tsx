import React from 'react';
import { UseFormRegister, FieldErrors } from "react-hook-form";
import PasswordStrengthChecker from '../../components/PasswordStrengthChecker';

interface VolunteerFormProps {
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
}

const emailExp: RegExp = /^([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+)\.([a-zA-Z]{2,})$/;

const VolunteerForm: React.FC<VolunteerFormProps> = ({ register, errors, setPassword }) => (
  <>
    <div className="row pb-1">
      <div className="col-lg-6 mb-3">
        <label>Name</label>
        <input type="text" className="form-control input-box" {...register("name", { required: "Name is required" })} placeholder="Enter your name" />
        {errors.name && <p className="text-danger small">{errors.name.message as string}</p>}
      </div>

      <div className="col-lg-6 mb-3">
        <label>Email</label>
        <input type="email" className="form-control input-box" {...register("email", { 
          required: "Email is required", 
          pattern: { value: emailExp, message: "Invalid email format" } 
        })} placeholder="Enter email" />
        {errors.email && <p className="text-danger small">{errors.email.message as string}</p>}
      </div>
    </div>

    <div className="row pb-1">
      <div className="col-lg-6 mb-3">
        <label>Mobile Number</label>
        <input type="text" className="form-control input-box" {...register("mobileNo", { required: "Mobile number is required" })} placeholder="Enter mobile number" />
        {errors.mobile && <p className="text-danger small">{errors.mobile.message as string}</p>}
      </div>

      <div className="col-lg-6 mb-3">
        <label>Password</label>
        <PasswordStrengthChecker 
          // password={password} 
          setPassword={setPassword} 
          register={register} 
          errors={errors} 
        />
      </div>
    </div>

    <div className="row pb-1">
      <div className="col-lg-4 mb-3">
        <label>Age</label>
        <input type="number" className="form-control input-box" {...register("age", { 
          required: "Age is required", 
          min: { value: 18, message: "Must be at least 18" }
        })} placeholder="Enter age" />
        {errors.age && <p className="text-danger small">{errors.age.message as string}</p>}
      </div>

      <div className="col-lg-4 mb-3">
        <label>Gender</label>
        <select className="form-select" {...register("gender", { required: "Gender is required" })}>
          <option value="">Select gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        {errors.gender && <p className="text-danger small">{errors.gender.message as string}</p>}
      </div>

      <div className="col-lg-4 mb-3">
        <label>City</label>
        <select className="form-select" {...register("city", { required: "City is required" })}>
          <option value="">Select city</option>
          <option value="ahmedabad">Ahmedabad</option>
          <option value="anand">Anand</option>
          <option value="bharuch">Bharuch</option>
          <option value="bhavnagar">Bhavnagar</option>
          <option value="bhuj">Bhuj</option>
          <option value="dahod">Dahod</option>
          <option value="gandhinagar">Gandhinagar</option>
          <option value="jamnagar">Jamnagar</option>
          <option value="junagadh">Junagadh</option>
          <option value="mehsana">Mehsana</option>
          <option value="morbi">Morbi</option>
          <option value="nadiad">Nadiad</option>
          <option value="navsari">Navsari</option>
          <option value="patan">Patan</option>
          <option value="porbandar">Porbandar</option>
          <option value="rajkot">Rajkot</option>
          <option value="surat">Surat</option>
          <option value="vadodara">Vadodara</option>
          <option value="valsad">Valsad</option>
          <option value="veraval">Veraval</option>
        </select>
        {errors.city && <p className="text-danger small">{errors.city.message as string}</p>}
      </div>
    </div>
  </>
);

export default VolunteerForm;