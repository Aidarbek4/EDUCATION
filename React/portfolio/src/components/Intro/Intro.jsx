import {useEffect, useRef} from "react";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import {init} from "ityped";
import "./intro.scss";

function Intro() {
  const animatedTextRef = useRef();
  useEffect(() => {
    init(animatedTextRef.current, {
      showCursor: true,
      backDelay: 2000,
      backSpeed: 60,
      strings: ["React.js Developer"],
    });
  }, []);
  return (
    <section className="intro" id="intro">
      <div className="intro__left">
        <div className="intro__img-wrapper">
          <img src="https://images.unsplash.com/photo-1510511459019-5dda7724fd87?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="intro-img" />
        </div>
      </div>
      <div className="intro__right">
        <div className="intro__right-inner">
          <h1>Aidarbek Kurmankojoev</h1>
          <h2>Just smile</h2>
          <h3>
            <span ref={animatedTextRef}></span>
          </h3>
          <a href="#portfolio">
            <KeyboardArrowDownIcon className="intro__icon"/>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Intro;
