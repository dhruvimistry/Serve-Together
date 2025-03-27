import React from "react";

interface SearchBarProps {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder, value, onChange }) => {
  return (
    <div className="input-group mb-4">
      <span className="input-group-text border-0 common-radius common-bg">
        <i className="bi bi-search"></i>
      </span>
      <input
        type="text"
        className="form-control border-0 common-radius common-bg"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchBar;