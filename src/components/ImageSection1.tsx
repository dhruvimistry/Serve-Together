import Password from "../assets/Forgot password gif.gif"

const ImageSection1: React.FC = () => {
    return (
        <div className="col-md-8 vh-100 p-0">
        <img
         src={Password} 
         alt="Forget Password"
         className="w-100 h-100 object-fit-cover" 
         />
        </div>
    );
};

export default ImageSection1 