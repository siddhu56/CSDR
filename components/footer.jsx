import React from "react";

function Footer() {
  return (
    <footer className="text-center p-4 bg-gray-800 text-white">
      <div className="mb-2">
        <a href="/terms-and-conditions" className="hover:underline mx-2">
          Terms & Conditions
        </a>
        |
        <a href="/privacy-policy" className="hover:underline mx-2">
          Privacy Policy
        </a>
      </div>

      <p className="text-sm">&copy; 2035 by Save Our Shores. Powered and secured by Wix</p>

      <div className="mt-2">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:underline mx-2">
          Facebook
        </a>
        |
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:underline mx-2">
          Twitter
        </a>
        |
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:underline mx-2">
          LinkedIn
        </a>
      </div>
    </footer>
  );
}

export default Footer;
