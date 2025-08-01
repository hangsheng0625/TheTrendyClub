import React from "react";

const Title = ({ text1, text2 }) => {
  return (
    <div className="inline-flex flex-col items-center gap-3 mb-6">
      <div className="flex items-center gap-3">
        <p className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-600">
          {text1}
          <span className="text-gradient font-bold ml-2">{text2}</span>
        </p>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-8 sm:w-12 h-[2px] bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"></div>
        <div className="w-4 h-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"></div>
        <div className="w-8 sm:w-12 h-[2px] bg-gradient-to-r from-purple-600 to-pink-500 rounded-full"></div>
      </div>
    </div>
  );
};

export default Title;
