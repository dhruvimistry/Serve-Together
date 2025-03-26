import React, { useRef, useState } from "react";
import { BsCamera } from "react-icons/bs";

const AddProfile: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  return (
    <div className="flex flex-col items-start">
      <div
        className="border border-gray-300 bg-gray-100 rounded-lg px-4 py-2 cursor-pointer flex items-center space-x-2 hover:bg-gray-200"
        onClick={() => fileInputRef.current?.click()}
        style={{ width: "225px"}}
      >
        {profileImage ? (
          <img
            src={profileImage}
            alt="Profile"
            className="w-12 h-12 rounded-full object-cover"
          />
        ) : (
          <>
            <BsCamera className="text-xl text-gray-600" />
            <span className="text-gray-700"> Add a profile photo</span>
          </>
        )}
      </div>

      <input
        type="file"
        accept="image/*"
        multiple={false}
        ref={fileInputRef}
        className="hidden"
        onChange={handleImageUpload}
        style={{ display: "none" }}
      />
    </div>
  );
};

export default AddProfile;