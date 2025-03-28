import React, { useRef, useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";

const AddProfile: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  // Cleanup previous blob URL
  useEffect(() => {
    return () => {
      if (profileImage) {
        URL.revokeObjectURL(profileImage);
      }
    };
  }, [profileImage]);

  return (
    <div className="flex flex-col items-start">
      <div
        className="border border-gray-300 common-radius w-25 px-4 py-2 cursor-pointer flex items-center space-x-2 hover:bg-gray-200"
        onClick={() => fileInputRef.current?.click()}
      >
        <i className="bi bi-camera me-2" />
        <span className="text-gray-700">
          {fileName ? fileName : "Add a profile photo"}
        </span>
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
        <button
          className="mt-2 text-blue-500 underline"
          onClick={() => setIsOpen(true)}
        >
          View Image
        </button>
      )}

      {/* Modal for Viewing Image */}
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-lg shadow-lg max-w-md w-full">
            {profileImage && (
              <img src={profileImage} alt="Profile" className="w-full rounded" />
            )}
            <button
              onClick={() => setIsOpen(false)}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
            >
              Close
            </button>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default AddProfile;