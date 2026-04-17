import React from "react";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal footer-center bg-olive-400 text-olive-800 font-bold text-2xl p-4">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by Espresso_Emporium
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
