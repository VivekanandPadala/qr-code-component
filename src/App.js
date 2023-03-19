import React from "react";
import qr from "./assets/image-qr-code.png";

function App() {
  return (
    <div className="flex justify-center items-center h-screen bg-lightGray">
      <div className="flex flex-col bg-white rounded-2xl pt-4 pb-4 pl-4 pr-4 shadow-lg">
        <div className="flex flex-col justify-center items-center w-60">
          <img src={qr} alt="qr-code" className="h-58 w-58 rounded-xl" />
          <h3 className="font-outfit font-bold text-center mt-4 text-[18px] w-52">
            Improve your front-end skills by building projects
          </h3>
          <p className="font-outfit font-normal text-center mt-4 mb-4 text-[15px] text-greyishBlue w-52">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
