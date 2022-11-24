import { useState } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleNext = () => {
    if (active === 2) {
      setActive(0);
    } else {
      setActive(active + 1);
    }
  };

  const handlePrev = () => {
    if (active === 0) {
      setActive(2);
    } else {
      setActive(active - 1);
    }
  };

  const handleClick = () => {
    setOpen(!open);
    !open
      ? document.body.classList.add("dark")
      : document.body.classList.remove("dark");
  };

  return (
    <>
      <nav className="nav">
        <div className="nav__wrapper">
          <button className="nav__open-btn" onClick={handleClick}>
            <img
              src="https://raw.githubusercontent.com/jarekTerejko/fem-challenges-solutions/8aedb521950e6df5c9d89b1ab463784486aca94a/room-homepage-master/images/icon-hamburger.svg"
              alt=""
            />
          </button>
          <a href="/#" className="nav__site-link">
            <img
              src="https://raw.githubusercontent.com/jarekTerejko/fem-challenges-solutions/8aedb521950e6df5c9d89b1ab463784486aca94a/room-homepage-master/images/logo.svg"
              alt=""
            />
          </a>
          <div className={`nav__list-wrapper ${open && "open"}`}>
            <button className="nav__close-btn" onClick={handleClick}>
              <img
                src="https://raw.githubusercontent.com/jarekTerejko/fem-challenges-solutions/8aedb521950e6df5c9d89b1ab463784486aca94a/room-homepage-master/images/icon-close.svg"
                alt=""
              />
            </button>
            <ul className="nav__nav-list">
              <li className="nav__item">
                <a href="/#" className="nav__link">
                  home
                </a>
              </li>
              <li className="nav__item">
                <a href="/#" className="nav__link">
                  shop
                </a>
              </li>
              <li className="nav__item">
                <a href="/#" className="nav__link">
                  about
                </a>
              </li>
              <li className="nav__item">
                <a href="/#" className="nav__link">
                  contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <header className="slider">
        <div className="slider__img-container">
          <div className={`slider__img ${active === 0 && "active-photo"}`}></div>
          <div className={`slider__img ${active === 1 && "active-photo"}`}></div>
          <div className={`slider__img ${active === 2 && "active-photo"}`}></div>
          <div className="slider__btn-container">
            <button
              className="slider__arrow-btn slider__btn-left"
              onClick={handlePrev}
            >
              <img
                src="https://raw.githubusercontent.com/jarekTerejko/fem-challenges-solutions/8aedb521950e6df5c9d89b1ab463784486aca94a/room-homepage-master/images/icon-angle-left.svg"
                alt=""
              />
            </button>
            <button
              className="slider__arrow-btn slider__btn-right"
              onClick={handleNext}
            >
              <img
                src="https://raw.githubusercontent.com/jarekTerejko/fem-challenges-solutions/8aedb521950e6df5c9d89b1ab463784486aca94a/room-homepage-master/images/icon-angle-right.svg"
                alt=""
              />
            </button>
          </div>
        </div>
        <div className="slider__text-container">
          <div className={`slider__text-content ${active === 0 && "active-text"}`}>
            <h1 className="heading">Discover innovative ways to decorate</h1>
            <p className="description">
              We provide unmatched quality, comfort, and style for property
              owners across the country. Our experts combine form and function
              in bringing your vision to life. Create a room in your own style
              with our collection and make your property a reflection of you and
              what you love.
            </p>
            <a href="/payment" rel="noopener noreferrer" className="slider__arrow-link" onClick={() => navigate("/payment")}>
              <span>shop now</span>
              <img
                src="https://raw.githubusercontent.com/jarekTerejko/fem-challenges-solutions/8aedb521950e6df5c9d89b1ab463784486aca94a/room-homepage-master/images/icon-arrow.svg"
                alt=""
              />
            </a>
          </div>
          <div className={`slider__text-content ${active === 1 && "active-text"}`}>
            <h1 className="heading">We are available all across the globe</h1>
            <p className="description">
              With stores all over the world, it's easy for you to find
              furniture for your home or place of business. Locally, we’re in
              most major cities throughout the country. Find the branch nearest
              you using our store locator. Any questions? Don't hesitate to
              contact us today.
            </p>
            <a href="/payment" rel="noopener noreferrer" className="slider__arrow-link" onClick={() => navigate("/payment")}>
              <span>shop now</span>
              <img
                src="https://raw.githubusercontent.com/jarekTerejko/fem-challenges-solutions/8aedb521950e6df5c9d89b1ab463784486aca94a/room-homepage-master/images/icon-arrow.svg"
                alt=""
              />
            </a>
          </div>
          <div className={`slider__text-content ${active === 2 && "active-text"}`}>
            <h1 className="heading">Manufactured with the best materials</h1>
            <p className="description">
              Our modern furniture store provide a high level of quality. Our
              company has invested in advanced technology to ensure that every
              product is made as perfect and as consistent as possible. With
              three decades of experience in this industry, we understand what
              customers want for their home and office.
            </p>
            <a href="/payment" rel="noopener noreferrer" className="slider__arrow-link" onClick={() => navigate("/payment")}>
              <span>shop now</span>
              <img
                src="https://raw.githubusercontent.com/jarekTerejko/fem-challenges-solutions/8aedb521950e6df5c9d89b1ab463784486aca94a/room-homepage-master/images/icon-arrow.svg"
                alt=""
              />
            </a>
          </div>
        </div>
      </header>
      <section className="about">
        <div className="about__col-one"></div>
        <div className="about__col-two">
          <div className="about__content">
            <h2 className="about__heading">About our furniture</h2>
            <p className="about__description">
              Our multifunctional collection blends design and function to suit
              your individual taste. Make each room unique, or pick a cohesive
              theme that best express your interests and what inspires you. Find
              the furniture pieces you need, from traditional to contemporary
              styles or anything in between. Product specialists are available
              to help you create your dream space.
            </p>
          </div>
        </div>
        <div className="about__col-three"></div>
      </section>
    </>
  );
}

export default App;
