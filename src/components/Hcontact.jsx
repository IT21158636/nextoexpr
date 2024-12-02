import React from "react";
import { Link } from "react-router-dom";

function Hcontact() {
  return (
    <div className="px-4 mx-auto my-8 lg:px-14 max-w-screen-2xl"  id="contact">
      <div className="text-center section-title">
        <h2 className="mb-3 text-4xl font-semibold text-naturalPrimary">
          Contact us
        </h2>
        <p>Feel free to get in touch with us. We'd love to hear from you!</p>

        {/* Use flex container to arrange buttons horizontally */}
        <div className="flex justify-center gap-4 mt-4">
          <button className="w-48 py-2 text-white transition-all duration-300 rounded px-7 bg-naturalPrimary hover:bg-neutralDGrey hover:translate-y-4">
            Schedule a Call
          </button>
          <Link
            to="/contact"
            className="w-48 py-2 text-white transition-all duration-300 rounded px-7 bg-naturalPrimary hover:bg-neutralDGrey hover:translate-y-4"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hcontact;
