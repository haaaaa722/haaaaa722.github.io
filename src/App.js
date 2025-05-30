import React,{ useEffect, useState, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";  // Router削除
import LoadingBar from "react-top-loading-bar";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Develop from "./pages/Develop";
import Photos from "./pages/Photos";

const App = () => {
  const LodaingBarRef = useRef(null);
  const location = useLocation();
  const [loadedCount, setLoadedCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    const images = document.querySelectorAll("img");
    setTotalCount(images.length);
    setLoadedCount(0);

    if(images.length === 0) {
      LodaingBarRef.current.complete();
    } else {
      LodaingBarRef.current.continuousStart();
    }

    images.forEach((img) => {
      if(img.complete) {
        setLoadedCount((prev) => prev+1);
      } else {
        img.addEventListener("load", () => {
          setLoadedCount((prev) => prev+1);
        });
        img.addEventListener("error", () => {
          setLoadedCount((prev) => prev+1);
        });
      }
    });
  }, [location]);

  useEffect(() => {
    if(totalCount > 0) {
      const progress = (loadedCount / totalCount) * 100;
      LodaingBarRef.current.staticStart(progress);
      if(loadedCount === totalCount) {
        LodaingBarRef.current.complete();
      }
    }
  }, [loadedCount, totalCount]);

  return (
    <>
      <LoadingBar color="#375e97" ref={LodaingBarRef} height={4} shadow={true} />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Develop" element={<Develop />} />
        <Route path="/Photos" element={<Photos />} />
      </Routes>
    </>
  );
};

export default App;
