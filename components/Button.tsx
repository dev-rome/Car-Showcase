"use client";

import Image from "next/image";

import { ButtonProps } from "@/types";

const Button = ({
  title,
  containerStyles,
  textStyles,
  btnType,
  handleClick,
  rightIcon,
  isDisabled,
}: ButtonProps) => {
  return (
    <button
      disabled={isDisabled}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            src={rightIcon}
            alt="Right Icon"
            fill
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
};

export default Button;
