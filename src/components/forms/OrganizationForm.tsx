import React from 'react';
import { UseFormRegister, FieldErrors } from "react-hook-form";
import PasswordStrengthChecker from '../../components/PasswordStrengthChecker';

interface OrganizationFormProps {
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
}

const OrganizationForm: React.FC<OrganizationFormProps> = ({ register, errors, setPassword }) => (
  <>
    <div className="row pb-1">
      <div className="col-lg-6 mb-3">
        <label>Name of Organization</label>
        <input type="text" className="form-control input-box" {...register("nameOfOrganization", { required: "Organization name is required" })} placeholder="Enter organization name" />
        {errors.nameOfOrganization && <p className="text-danger small">{errors.nameOfOrganization.message as string}</p>}
      </div>

      <div className="col-lg-6 mb-3">
        <label>Mobile Number</label>
        <input type="text" className="form-control input-box" {...register("mobileNo", { required: "Mobile number is required" })} placeholder="Enter mobile number" />
        {errors.mobileNo && <p className="text-danger small">{errors.mobileNo.message as string}</p>}
      </div>
    </div>

    <div className="row pb-1">
      <div className="col-lg-6 mb-3">
        <label>Email</label>
        <input type="email" className="form-control input-box" {...register("email", { required: "Email is required" })} placeholder="Enter email" />
        {errors.email && <p className="text-danger small">{errors.email.message as string}</p>}
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

    <div className="row">
      <div className="col-lg-6 offset-lg-3 mb-3">
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

export default OrganizationForm;