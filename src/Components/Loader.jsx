import React from "react";

const Loader = () => {
  return (
    <div
      className="loader text-orange-600 flex justify-center items-center bg-white w-screen flex-col align-top h-screen m-auto  text-center p-4  mb-4 loader--style8"
      title="7"
    >
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="120px"
        height="150px"
        viewBox="0 0 24 30"
        style={{ enableBackground: "new 0 0 50 50" }}
        xmlSpace="preserve"
        className="fill-orange-600"
      >
        <rect
          x="0"
          y="10"
          width="4"
          height="10"
          fill="#333"
          opacity="0.2"
          className="fill-orange-600"
        >
          <animate
            attributeName="opacity"
            attributeType="XML"
            values="0.2; 1; .2"
            begin="0s"
            dur="0.6s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="height"
            attributeType="XML"
            values="10; 20; 10"
            begin="0s"
            dur="0.6s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="y"
            attributeType="XML"
            values="10; 5; 10"
            begin="0s"
            dur="0.6s"
            repeatCount="indefinite"
          />
        </rect>
        <rect x="8" y="10" width="4" height="10" fill="#ea580c" opacity="0.2">
          <animate
            attributeName="opacity"
            attributeType="XML"
            values="0.2; 1; .2"
            begin="0.15s"
            dur="0.6s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="height"
            attributeType="XML"
            values="10; 20; 10"
            begin="0.15s"
            dur="0.6s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="y"
            attributeType="XML"
            values="10; 5; 10"
            begin="0.15s"
            dur="0.6s"
            repeatCount="indefinite"
          />
        </rect>
        <rect x="16" y="10" width="4" height="10" fill="##ea580c" opacity="0.2">
          <animate
            attributeName="opacity"
            attributeType="XML"
            values="0.2; 1; .2"
            begin="0.3s"
            dur="0.6s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="height"
            attributeType="XML"
            values="10; 20; 10"
            begin="0.3s"
            dur="0.6s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="y"
            attributeType="XML"
            values="10; 5; 10"
            begin="0.3s"
            dur="0.6s"
            repeatCount="indefinite"
          />
        </rect>
      </svg>
      <span className="uppercase font-kanit text-3xl font-bold text-orange-600">
        Loading
      </span>
    </div>
  );
};

export default Loader;
