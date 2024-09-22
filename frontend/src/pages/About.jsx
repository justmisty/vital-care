import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <section>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          ABOUT <span className="text-gray-700 font-medium">US</span>
        </p>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img className="w-full max-w-[360px]" src={assets.about_image} alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
          <p>
            Welcome to VitalCare, your trusted medical centre dedicated to
            providing compassionate, patient-focused healthcare. At VitalCare,
            we believe in treating every individual with the highest level of
            care and respect, ensuring that your health and well-being are our
            top priorities.
          </p>

          <p>
            With a team of experienced doctors, nurses, and healthcare
            professionals, we offer a wide range of services including general
            practice, specialist consultations, preventive care, diagnostics,
            and wellness programs. Our state-of-the-art facilities are designed
            to provide a comfortable and healing environment, where advanced
            medical technology meets personalized attention.
          </p>
          <b className="text-gray-800">Our Vision</b>
          <p>
            To be a leader in compassionate and innovative healthcare, fostering
            a healthier community by providing accessible, patient-centered
            services that promote well-being, prevention, and holistic healing
            for all.
          </p>
        </div>
      </div>

      <div className="text-xl my-4">
        <p>
          WHY <span className="text-gray-700 font-semibold">CHOOSE US</span>
        </p>
      </div>

      <div className="flex flex-col md:flex-row mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Efficiency</b>
          <p>Streamlined appointments schedulling that fits your busy life</p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Convenience</b>
          <p>
            Access to a network of trusted healthcare professionals in your area
          </p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Personalization</b>
          <p>Tailored care plans that address your unique health needs</p>
        </div>
      </div>
    </section>
  );
};

export default About;
