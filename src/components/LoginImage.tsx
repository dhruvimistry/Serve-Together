
import { useEffect, useState } from "react";
import HappyKids from "../assets/Happy kids.jpg"

const ImageSection: React.FC = () => {
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

    useEffect(() => {
        const handleResize = () => {
          setIsDesktop(window.innerWidth >= 1024);
        };
    
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);

  return (
    isDesktop && (
      <div className="col-xl-8 col-lg-7 vh-100 p-0 image-section">
        <img
          src={HappyKids}
          alt="Happy kids"
          className="w-100 h-100 object-fit-cover"
        />
      </div>
    )
  );
};

export default ImageSection