import React from "react";
import './Contact.css'

export default ({ close }) => (
  <div className="modal">
    <a className="close" onClick={close}>
      &times;
    </a>
    <div className="header"> Contatc Info </div>
    <div className="content">
      {" "}
        natalie.tobiason@colorado.edu
    </div>
  </div>
);