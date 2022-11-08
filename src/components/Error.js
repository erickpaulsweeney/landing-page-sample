import React from "react";

export default function Error() {
  return (
    <div className="container notif">
      <h1 className="heading">404</h1>
      <h2 className="description">You seem to be lost!</h2>
      <a
        href="/#"
        rel="noopener noreferrer"
        className="slider__arrow-link"
      >
        <span>home</span>
        <img
          src="https://raw.githubusercontent.com/jarekTerejko/fem-challenges-solutions/8aedb521950e6df5c9d89b1ab463784486aca94a/room-homepage-master/images/icon-arrow.svg"
          alt=""
        />
      </a>
    </div>
  );
}
