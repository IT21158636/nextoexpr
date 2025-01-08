import React from "react";
import Contactus from "./Contactus";
import TypeformEmbed from "./TypeformEmbed";
import Nabarc from "./Nabarc";

function ContactPage() {
  return (
    <div>
      <Nabarc />
      <div className="text-center section-title" style={{ marginTop: "70px" }}>
        <h1 className="text-4xl sm:text-1xl  text-#1E1C34 font-semibold ">
          <br></br>You like coffee? Us too! have a chat{" "}
        </h1>
      </div>
      <br></br>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}
      >
        <TypeformEmbed />
      </div>

      <Contactus />
    </div>
  );
}

export default ContactPage;
