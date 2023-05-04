import React from "react";

const Footer = () => {
  return (
    <div className=" mt-4 w-[90%] mx-auto rounded-md">
      <footer className="footer p-10 bg-neutral text-neutral-content">
        <div>
          <span className="footer-title">Order Menu</span>
          <a className="link link-hover">Paneer Biryani.</a>
          <a className="link link-hover">Lucknowi Biryan</a>
          <a className="link link-hover"> Rajma chawal</a>
          <a className="link link-hover"> Rajma chawal</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
