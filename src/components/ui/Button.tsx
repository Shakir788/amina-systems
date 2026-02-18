import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
  children: React.ReactNode;
}

export default function Button({ variant = "primary", children, className, ...props }: ButtonProps) {
  const baseStyles = "px-6 py-3 rounded-md font-medium transition-all duration-300 text-sm tracking-wide";
  
  const variants = {
    primary: "bg-amina-teal text-amina-navy hover:bg-opacity-80 shadow-[0_0_15px_rgba(100,255,218,0.3)]",
    outline: "border border-amina-teal text-amina-teal hover:bg-amina-teal/10",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
}