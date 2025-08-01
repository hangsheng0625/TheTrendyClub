import React from "react";

const Title = ({ text1, text2 }) => {
  return (
    <div className="inline-flex flex-col items-center gap-3 mb-6">
      <div className="flex items-center gap-3">
        <p className="text-2xl sm:text-3xl lg:text-4xl font-light text-grey-600 font-playfair">
          {text1}
          <span className="text-grey-800 font-bold ml-2 font-playfair">
            {text2}
          </span>
        </p>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-8 sm:w-12 h-[2px] bg-gradient-to-r from-grey-600 to-grey-800 rounded-full"></div>
        <div className="w-4 h-4 bg-gradient-to-r from-grey-600 to-grey-800 rounded-full"></div>
        <div className="w-8 sm:w-12 h-[2px] bg-gradient-to-r from-grey-500 to-grey-600 rounded-full"></div>
      </div>
    </div>
  );
};

export default Title;
