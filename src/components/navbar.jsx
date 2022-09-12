import React, { Component } from "react";

// Stateless Functional Component!
const NavBar = ({ totalSum }) => {
  return (
    <nav class="navbar navbar-light bg-light">
      <a class="navbar-brand" href="#">
        Total Sum =
        <span class="badge badge-pill badge-secondary m-2">{totalSum}</span>
      </a>
    </nav>
  );
};

export default NavBar;
