import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import Newsletter from "../components/Newsletter";
import {
  Store,
  MapPin,
  Phone,
  Mail,
  Clock,
  Briefcase,
  Handshake,
} from "lucide-react";

const Contact = () => {
  return (
    <div className="bg-gradient-to-br from-white via-grey-50 to-grey-100 min-h-screen w-full">
      <div className="text-center pt-16 px-4 sm:px-8 lg:px-16">
        <Title text1={"CONTACT"} text2={"US"}></Title>
        <p className="text-lg text-grey-700 max-w-2xl mx-auto leading-relaxed mb-8 text-body-primary">
          We'd love to hear from you. Reach out to us for any questions,
          collaborations, or just to say hello.
        </p>
      </div>

      <div className="max-w-6xl mx-auto my-16 px-4 sm:px-8 lg:px-16 flex flex-col justify-center lg:flex-row gap-12 mb-28">
        <div className="lg:w-1/2">
          <img
            className="w-full rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
            src={assets.contact_img}
            alt="Contact The Trendy Club"
          />
        </div>

        <div className="lg:w-1/2 flex flex-col justify-center gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-grey-200">
            <h3 className="font-bold text-2xl text-grey-800 mb-6 flex items-center">
              <span className="w-8 h-8 bg-grey-600 rounded-full flex items-center justify-center mr-3">
                <Store className="text-white w-4 h-4" />
              </span>
              Our Flagship Store
            </h3>
            <div className="space-y-4 text-grey-700">
              <p className="flex items-start">
                <MapPin className="text-grey-600 mr-3 mt-1 w-5 h-5" />
                <span>
                  34, Jalan Bukit Kempas
                  <br />
                  Taman Bukit Kempas, 81200
                  <br />
                  Johor Bahru, Johor, Malaysia
                </span>
              </p>
              <p className="flex items-center">
                <Phone className="text-grey-600 mr-3 w-5 h-5" />
                <span>+60 13-984 6692</span>
              </p>
              <p className="flex items-center">
                <Mail className="text-grey-600 mr-3 w-5 h-5" />
                <span>hangsheng279@gmail.com</span>
              </p>
              <p className="flex items-center">
                <Clock className="text-grey-600 mr-3 w-5 h-5" />
                <span>Mon-Sat: 10AM-9PM | Sun: 11AM-7PM</span>
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-grey-200">
            <h3 className="font-bold text-2xl text-grey-800 mb-6 flex items-center">
              <span className="w-8 h-8 bg-grey-600 rounded-full flex items-center justify-center mr-3">
                <Briefcase className="text-white w-4 h-4" />
              </span>
              Join Our Team
            </h3>
            <p className="text-grey-700 leading-relaxed mb-6">
              Passionate about fashion? We're always looking for talented
              individuals to join our growing team. Discover exciting career
              opportunities in retail, design, marketing, and more.
            </p>
            <button className="bg-grey-800 hover:bg-grey-700 text-white px-8 py-4 rounded-lg font-semibold shadow-md transition-all duration-300 hover:shadow-lg transform hover:scale-105">
              Explore Careers
            </button>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-grey-200">
            <h3 className="font-bold text-2xl text-grey-800 mb-6 flex items-center">
              <span className="w-8 h-8 bg-grey-600 rounded-full flex items-center justify-center mr-3">
                <Handshake className="text-white w-4 h-4" />
              </span>
              Business Partnerships
            </h3>
            <p className="text-grey-700 leading-relaxed mb-6">
              Interested in collaborating with The Trendy Club? We're open to
              partnerships with designers, influencers, and brands that share
              our vision for accessible, stylish fashion.
            </p>
            <button className="bg-grey-800 hover:bg-grey-700 text-white px-8 py-4 rounded-lg font-semibold shadow-md transition-all duration-300 hover:shadow-lg transform hover:scale-105">
              Partnership Inquiry
            </button>
          </div>
        </div>
      </div>

      <Newsletter />
    </div>
  );
};

export default Contact;
