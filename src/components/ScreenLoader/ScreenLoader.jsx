import React from "react";
import "./ScreenLoader.css";

export const ScreenLoader = () => {
  return (
    <main className='loader-container'>
      <div className="loader">
        <div className="bg"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
    </main>
  );
};
