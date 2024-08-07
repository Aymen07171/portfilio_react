import React, { useState, useEffect, useCallback } from "react";
import { gsap, Expo } from "gsap";
import styled from "styled-components";

const Preloader = ({ setLoading }) => {
  const [counter, setCounter] = useState(0);

  const reveal = useCallback(() => {
    const t1 = gsap.timeline({
      onComplete: () => setLoading(false)
    });

    t1.to(".follow", {
      width: "100%",
      ease: Expo.easeInOut,
      duration: 1.2,
      delay: 0.5,
    })
      .to(".hide", { opacity: 0, duration: 0.3 })
      .to(".follow", {
        height: "100%",
        ease: Expo.easeInOut,
        duration: 0.7,
      })
      .to(".content", { width: "100%", ease: Expo.easeInOut, duration: 0.7 })
      .catch(error => console.error("Animation failed:", error));
  }, [setLoading]);

  useEffect(() => {
    const count = setInterval(() => {
      setCounter((prevCounter) =>
        prevCounter < 100
          ? prevCounter + 1
          : (clearInterval(count), 100)
      );
    }, 25);

    return () => clearInterval(count);
  }, []);

  useEffect(() => {
    if (counter === 100) {
      reveal();
    }
  }, [counter, reveal]);

  return (
    <AppContainer>
      <Loading>
        <Follow className="follow" aria-hidden="true" />
        <ProgressBar
          className="hide"
          id="progress-bar"
          style={{ width: `${counter}%` }}
          aria-valuenow={counter}
          aria-valuemin="0"
          aria-valuemax="100"
        />
      </Loading>
      <Content className="content" aria-hidden="true" />
    </AppContainer>
  );
};

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  color: #000000;
  position: relative;
`;

const Loading = styled.div`
  height: 100%;
  width: 100%;
  background-color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
`;

const Follow = styled.div`
  position: absolute;
  background: linear-gradient(112.1deg, #000000 11.4%, #2d3436 70.2%);
  height: 2px;
  width: 0;
  left: 0;
  z-index: 2;
`;

const ProgressBar = styled.div`
  position: absolute;
  left: 0;
  background-color: #fff;
  height: 2px;
  width: 0;
  transition: 0.4s ease-out;
`;

const Content = styled.div`
  height: 100%;
  width: 0;
  position: absolute;
  left: 0;
  top: 0;
  background-color: #000000;
  padding: auto;
  z-index: 2;
  overflow: hidden;
  color: #fff;
`;

export default Preloader;