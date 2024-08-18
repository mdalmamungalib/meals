import React from "react";

const page = () => {
  return (
    <div className="p-32">
      <div className="lg:hidden mx-4 bg-red-600 text-white sm:bg-blue-600 sm:text-black">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Alias repudiandae iste nisi omnis quasi aut sint? Rem earum
        tempore nostrum quidem ex numquam.
      </div>
      <div className="lg:block mx-4 bg-red-600 text-white sm:bg-blue-600 sm:text-black">
        This is work
      </div>
      <button className="bg-purple-700 text-white mt-5 px-4 py-2 focus:rounded-md">Submit Now</button>
    </div>
  );
};

export default page;
