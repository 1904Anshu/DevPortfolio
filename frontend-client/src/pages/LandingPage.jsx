import React from "react";
import { Link } from "react-router-dom";
import heroImg from "../assets/infoImage.png";
import featureImg from "../assets/featureImage.png";

const LandingPage = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-navy-900 to-gray-800 text-white">
      {/* Hero Section */}
      <div
        id="hero"
        className="w-full h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-16 py-10"
      >
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-yellow-400">
            Discover Top Developers in Seconds
          </h1>
          <p className="text-base sm:text-lg text-gray-300 mb-6">
            Explore portfolios, analyze skills, and connect with the perfect
            devs for your next big project.
          </p>
          <div className="flex justify-center md:justify-start space-x-6">
            <Link
              to="/register"
              className="bg-yellow-500 text-gray-900 px-8 py-3 rounded hover:bg-yellow-400 font-semibold transition"
            >
              Get Started
            </Link>
            <Link
              to="/login"
              className="border border-yellow-500 text-yellow-500 px-8 py-3 rounded hover:bg-yellow-600 hover:text-white font-semibold transition"
            >
              Login
            </Link>
          </div>
        </div>

        <div className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <img
            src={heroImg}
            alt="Illustration of developers collaborating on a project"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="bg-[#1f2937] py-20 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-yellow-400 mb-6">
            Why Choose Our Platform?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "Browse Portfolios",
                desc: "Quickly browse through a wide range of developer portfolios and pick the best talent.",
              },
              {
                title: "Skill Analysis",
                desc: "Evaluate developer skills through advanced metrics to ensure you choose the right fit.",
              },
              {
                title: "Easy Communication",
                desc: "Communicate easily with developers using integrated messaging tools.",
              },
              {
                title: "Verified Profiles",
                desc: "All developers go through a verification process to ensure authenticity and quality.",
              },
              {
                title: "Secure Payments",
                desc: "Use our platform to ensure secure and fast payments for your hired developers.",
              },
              {
                title: "Project Management",
                desc: "Track milestones, set deadlines, and manage your project from one place.",
              },
            ].map((card, index) => (
              <div
                key={index}
                className="bg-[#2d3748] p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-yellow-400 mb-3">
                  {card.title}
                </h3>
                <p className="text-yellow-200">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-yellow-400 text-gray-900 py-16 text-center px-4">
        <h3 className="text-2xl sm:text-3xl font-bold mb-6">
          Ready to Find Your Next Developer?
        </h3>
        <Link
          to="/register"
          className="bg-gray-900 text-white px-8 py-3 rounded hover:bg-gray-800 font-semibold transition"
        >
          Join Now
        </Link>
      </div>

      {/* Platform In Action Section */}
      <div id="platform-action" className="bg-gray-900 py-20 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 text-center text-white">
          <h2 className="text-3xl font-semibold mb-6">
            Our Platform in Action
          </h2>
          <img
            src={featureImg}
            alt="Visual representation of how the platform works"
            className="w-full max-w-4xl mx-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
