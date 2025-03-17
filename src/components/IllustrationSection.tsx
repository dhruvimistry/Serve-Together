import React from "react";
import Illustration from "../assets/Forgot password gif.gif";

const ImageSection: React.FC = () => {
  return (
    <div className="col-md-8 vh-100 d-flex align-items-center justify-content-center bg-white">
      <div className="text-center">
        <img src={Illustration} alt="Forgot Password Illustration" className="img-fluid" />
      </div>
    </div>
  );
};

export default ImageSection;


// import Illustration from "../assets/illustration.png"; // Replace with actual illustration image

// const ImageSection: React.FC = () => {
//   return (
//     <div className="col-md-8 vh-100 p-0 flex justify-center items-center bg-gray-100">
//       <img
//         src={Illustration}
//         alt="Illustration of login process"
//         className="max-w-md"
//       />
//     </div>
//   );
// };

// export default ImageSection;
