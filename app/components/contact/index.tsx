import React from "react";

const Contact = () => {
  return (
    <div className="bg-[#000000de]">
      <div className="uppercase text-center text-white pt-10">
        <h1>contact Us</h1>
      </div>
      <div className="lg:flex grid grid-cols-1 md:grid-cols-2 gap-8  lg:px-20 px-6 py-10">
        <div className="lg:w-1/2 w-full">
          <iframe
            id="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3222.674476485644!2d-122.08395758475612!3d37.42206967982534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085806a9f99843b%3A0x4a501367f076adff!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1645745157411!5m2!1sen!2sus"
            // width={600}
            // height={300}
            loading="lazy"
            className="w-full h-72 "
          ></iframe>
        </div>
        <div className="lg:w-1/2 w-full">
          <form action="">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="grid ">
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className="p-2  w-full  rounded outline-none bg-[#454545]"
                />
              </div>
              <div className="grid">
                <input
                  type="text"
                  placeholder="Enter Your Email"
                  className="p-2  rounded outline-none bg-[#454545]"
                />
              </div>
            </div>
            <textarea
              placeholder="Meassage..."
              rows={6}
              className="p-2 w-full mt-6 rounded outline-none bg-[#454545]"
            />
            <div className="mt-2">
              <button className="px-6 py-2 bg-black text-white font-bold rounded">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
