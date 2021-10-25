import React from "react";

const FadeInSection = (props) => {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();
  const animationDirection = props.animationDirection;

  React.useEffect(() => {
    const domRefCurrent = domRef.current; // fixes lint error
    const options = {
      root: null,
      threshhold: 0.25,
      rootMargin: "0px 0px -72px 0px",
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(entry.isIntersecting);
        }
      });
    }, options);
    observer.observe(domRefCurrent);
    return () => observer.unobserve(domRefCurrent);
  }, []);
  if (animationDirection != undefined)
    return (
      <div
        className={`fade-in-section${animationDirection} ${
          isVisible ? "is-visible" : ""
        }`}
        ref={domRef}
      >
        {props.children}
      </div>
    );
  else
    return (
      <div
        className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
        ref={domRef}
      >
        {props.children}
      </div>
    );
};

export default FadeInSection;
