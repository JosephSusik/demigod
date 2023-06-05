import React, { useEffect, useRef, useState } from "react";

import "./styles/DropDown.css";

import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

function DropDown ({placeHolder, options}:{placeHolder:any, options:any}) {

  const [showMenu, setShowMenu] = useState(false);
  const [selectedValue, setSelectedValue] = useState<any>(null);
  const inputRef = useRef<any>();

  useEffect(() => {
    const handler = (e: { target: any; }) => {
      if (inputRef.current && !inputRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    window.addEventListener("click", handler);
    return () => {
      window.removeEventListener("click", handler);
    };
  });
  const handleInputClick = () => {
    setShowMenu(!showMenu);
  };

  const getDisplay = () => {
    if (!selectedValue || selectedValue.length === 0) {
      return placeHolder;
    }
    
    return selectedValue.label;
  };

  const onItemClick = (option: any) => {
    let newValue;
    newValue = option;
    setSelectedValue(newValue);
  };

  const isSelected = (option: { value: any; }) => {
    if (!selectedValue) {
      return false;
    }

    return selectedValue.value === option.value;
  };


  return (
    <div className="dropdown-container">
      <div ref={inputRef} onClick={handleInputClick} className="dropdown-input">
        <div className="dropdown-selected-value">{getDisplay()}</div>
        <div className="dropdown-tools">
          <div className="dropdown-tool">
            <KeyboardArrowLeftIcon className={`icon ${showMenu? "rotate":""}`}/>
          </div>
        </div>
      </div>
      {showMenu && (
        <div className="dropdown-menu">
          {options.map((option: { value: React.Key | null | undefined; label: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) => (
            <div
              onClick={() => onItemClick(option)}
              key={option.value}
              className={`dropdown-item ${isSelected(option) && "selected"}`}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDown;