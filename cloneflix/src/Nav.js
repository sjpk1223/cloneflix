import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  // need state to hold boolean for show
  const [show, handleShow] = useState(false);
  // add scroll listener to add effects when scrolling

  useEffect(() => {
    window.addEventListener("scroll", () => {
      // listens to y axis and if its over 100 pixels it will trigger event listener
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
      // everytime addeventlistener gets triggered it will remove before triggering another one to prevent from multiple eventlisteners triggering
    };
  }, []);

  return (
    // always have nav class but if show is true then append nav_black class
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="nav_logo"
        src="https://images-ext-1.discordapp.net/external/0qV2TOgbImubhASU6S2G42WNuC2AmF_ekd_Ruo07pPU/https/www.pngjoy.com/pngl/537/8356716_netflix-logo-graphic-design-transparent-png.png"
        alt="Netflix Logo"
      />
      <img
        className="nav_avatar"
        src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
        alt="Avatar"
      />
    </div>
  );
}

export default Nav;

// import React, { useEffect, useState } from "react";
// import "./Nav.css";

// function Nav() {
//   const [show, handleShow] = useState(false);

//   useEffect(() => {
//     window.addEventListener("scroll", () => {
//       if (window.scrollY > 100) {
//         handleShow(true);
//       } else handleShow(false);
//     });
//     return () => {
//       window.removeEventListener("scroll");
//     };
//   }, []);

//   return (
//     <div className={`nav ${show && "nav_black"}`}>
//       <img
//         className="nav_logo"
//         src="https://www.pngjoy.com/pngl/537/8356716_netflix-logo-graphic-design-transparent-png.png"
//         alt="Netflix Logo"
//       />
//       <img
//         className="nav_avatar"
//         src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
//         alt="Netflix Avatar"
//       />
//     </div>
//   );
// }

// export default Nav;
