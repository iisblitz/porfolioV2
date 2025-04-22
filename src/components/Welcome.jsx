"use client"; // Ensure this runs on the client side

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLanguage } from "../redux/actions";

const Welcome = ({ handleClick }) => {
  const [loading, setLoading] = useState(true);
  const { language, texts } = useSelector((state) => state.rootReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(false);
  }, []);

  const handleLangChange = () => {
    dispatch(setLanguage(language === "ESP" ? "ENG" : "ESP"));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  let url = typeof window !== "undefined" ? window.location.href.split("/") : [];

  return (
    <div className="header">
      {!url[3] && (
        <div className="Menu">
          <button className="Wbutton" onClick={() => handleClick(1)}>
            {texts.find((e) => e.language === language)?.main}
          </button>
          <button className="Wbutton" onClick={() => handleClick(2)}>
            {texts.find((e) => e.language === language)?.articles}
          </button>
          <button className="Wbutton" onClick={() => handleClick(3)}>
            {texts.find((e) => e.language === language)?.notes}
          </button>
          <button className="WButton langSel" onClick={handleLangChange}>
            {language === "ESP" ? "English" : "Español"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Welcome;
