import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <section className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* ----left section---- */}
        <div>
          <img className="mb-5 w-40" src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            VitalCare is committed to providing exceptional healthcare services
            with a focus on patient care, compassion, and trust. Our team of
            experienced doctors and specialists offer a wide range of medical
            treatments, ensuring personalized care for every individual.
          </p>
        </div>

        {/* ----center section---- */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        {/* ----right section---- */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+234 816 995 8688</li>
            <li>anyasibright@gmail.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2024 © VitalCare. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
