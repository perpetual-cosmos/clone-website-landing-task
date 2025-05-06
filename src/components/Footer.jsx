import React from 'react';
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaXTwitter,
} from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="bg-[#151515] text-white py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">

        {/* Logo */}
        <div className="flex justify-center">
          <img
            src="https://www.gangarealty.com/images/ganga-footer-logo.svg"
            alt="Ganga Realty Logo"
            className="h-12"
          />
        </div>

        {/* Top Links Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-gray-700 pt-8 text-sm">
          <div>
            <h4 className="font-semibold text-white mb-4 underline underline-offset-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/">Home</a></li>
              <li><a href="/our-story">Our Story</a></li>
              <li><a href="/career">Career</a></li>
              <li><a href="/grow-with-us">Grow With Us</a></li>
              <li><a href="/ganga-foundation">Ganga Foundation</a></li>
              <li><a href="/life-at-ganga">Life At Ganga</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4 underline underline-offset-4">Insights & News</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/resources">Resources</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/media">Media</a></li>
              <li><a href="/awards">Awards</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4 underline underline-offset-4">Support & Policies</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/pay-online">Pay Online</a></li>
              <li><a href="/contact-us">Contact Us</a></li>
              <li><a href="/privacy-policy">Privacy Policy</a></li>
              <li><a href="/refund-and-cancellation-policy">Refund & Cancellation Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Info Section */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 border-t border-gray-700 pt-8 text-sm text-gray-400">
          <div>
            <h5 className="text-white font-semibold mb-2">Reach Us</h5>
            <p>
              Ground Floor, Tower A,
              Vatika Tower, Sector 54,
              Golf Course Road Gurugram,
              Haryana 122011
            </p>
          </div>

          <div className="flex justify-center sm:justify-start">
            <img
              src="https://www.gangarealty.com/images/Great-Place-to-work-Logo.svg"
              alt="Great Place to Work"
              className="h-24"
            />
          </div>

          <div>
            <h5 className="text-white font-semibold mb-2">Phone</h5>
            <p>+91-9990084084</p>
            <h5 className="text-white font-semibold mt-4 mb-2">Email</h5>
            <p>info@gangarealty.com</p>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <p className="mb-2">Ganga Global Homes Pvt. Ltd.</p>
            <p className="mb-4">Jai Ganga Realtech LLP</p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=100091975217494" target="_blank" rel="noreferrer">
                <FaFacebookF className="text-white hover:text-blue-500" />
              </a>
              <a href="https://www.linkedin.com/company/81834151/" target="_blank" rel="noreferrer">
                <FaLinkedinIn className="text-white hover:text-blue-400" />
              </a>
              <a href="https://x.com/gangarealty" target="_blank" rel="noreferrer">
                <FaXTwitter className="text-white hover:text-gray-300" />
              </a>
              <a href="https://www.instagram.com/gangarealty/" target="_blank" rel="noreferrer">
                <FaInstagram className="text-white hover:text-pink-500" />
              </a>
              <a href="https://www.youtube.com/@gangarealty" target="_blank" rel="noreferrer">
                <FaYoutube className="text-white hover:text-red-600" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs text-gray-500 mt-8 border-t border-gray-700 pt-4">
          © Copyright 2025 Ganga Realty, All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
