import React, { useRef, useState, useEffect } from "react";

const AddProfileImage: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };
  
  // If we click on image section again after uploading, it will clear previous image and select another image
  useEffect(() => {
    return () => {
      if (profileImage) {
        URL.revokeObjectURL(profileImage);
      }
    };
  }, [profileImage]);

  return (
    <div>
      <div className="d-flex align-items-center cursor-pointer">
        <div
          className="border border-gray-300 common-radius p-2 d-inline-flex align-items-center max-w-max"
          onClick={() => fileInputRef.current?.click()}
        >
          <i className="bi bi-camera me-2" />
          <span className="text-gray-700 truncate">{fileName ? fileName : "Add a profile photo"}</span>
        </div>

        <input
          type="file"
          accept="image/*"
          multiple={false}
          ref={fileInputRef}
          onChange={handleImageUpload}
          className="hidden d-none"
        />

        {profileImage && (
          <small
            className="link-text cursor-pointer pt-3 ms-1 my-0"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            View Image
          </small>
        )}
      </div>
      
      {/* Modal for Viewing Image */}
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Profile Picture
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div 
              className="modal-body text-center"
              >
              {profileImage && <img src={profileImage} alt="Profile Preview" className="img-fluid circular" />}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-success" data-bs-dismiss="modal">
                OK
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProfileImage;