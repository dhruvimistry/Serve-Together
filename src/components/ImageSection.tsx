import HappyKids from "../assets/Happy kids.jpg"

const ImageSection: React.FC = () => {
  return (
    <div className="col-lg-8 vh-100 p-0 image-section">
      <img
        src={HappyKids}
        alt="Happy kids"
        className="w-100 h-100 object-fit-cover"
      />
    </div>
  );
};

export default ImageSection