import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaGitAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 px-6 py-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Info */}
        <div>
          <h2 className="text-xl font-bold mb-4">DevPortfolio</h2>
          <p className="text-sm mb-2">
            Discover top developers and connect instantly.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-gray-900 transition duration-300">
              <FaGithub size={22} />
            </a>
            <a href="#" className="hover:text-blue-700 transition duration-300">
              <FaLinkedin size={22} />
            </a>
            <a href="#" className="hover:text-blue-400 transition duration-300">
              <FaTwitter size={22} />
            </a>
          </div>
        </div>

        {/* Tech Stack */}
        <div>
          <h3 className="text-md font-semibold mb-3">Tech Stack</h3>
          <div className="grid grid-cols-3 gap-3 text-gray-600">
            <FaReact title="React" size={28} className="hover:text-blue-500" />
            <FaNodeJs
              title="Node.js"
              size={28}
              className="hover:text-green-600"
            />
            <FaJsSquare
              title="JavaScript"
              size={28}
              className="hover:text-yellow-500"
            />
            <FaHtml5
              title="HTML5"
              size={28}
              className="hover:text-orange-500"
            />
            <FaCss3Alt title="CSS3" size={28} className="hover:text-blue-500" />
            <FaGitAlt title="Git" size={28} className="hover:text-red-500" />
          </div>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-md font-semibold mb-3">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Documentation
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                API Reference
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Tutorials
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Community
              </a>
            </li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h3 className="text-md font-semibold mb-3">Connect</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Support
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 mt-10 border-t border-gray-300 pt-4">
        © {new Date().getFullYear()} DevPortfolio. Built with 💻 by developers,
        for developers.
      </div>
    </footer>
  );
};

export default Footer;
