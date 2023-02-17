import "./login.css";
import {IoMdClose} from 'react-icons/io'


import React from "react";

export default function Successmsg() {
  return (
      <div className="success">
        <span>hello world</span>
        <button>
          <IoMdClose />
        </button>
      </div>
  );
}
