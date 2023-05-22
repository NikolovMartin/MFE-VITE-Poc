import React, { useState, useEffect } from "react";
import styled from "styled-components";

const App = () => {
  const WELCOME_TEXT = {
    de: "Willkommen bei",
    en: "Welcome to",
  };

  const [value, setValue] = useState(
    localStorage.getItem("grassn_input_text") || ""
  );

  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "en"
  );

  // Listen for localStorage language change
  useEffect(() => {
    const handleStorageChange = () => {
      setLanguage(localStorage.getItem("language"));
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  // Set input text in localStorage
  useEffect(() => {
    localStorage.setItem("grassn_input_text", `${value}`);
  }, [value]);

  return (
    <Wrapper>
      <h1>{WELCOME_TEXT[language]} GrassN </h1>

      <input
        type="text"
        placeholder="This is maintained in localStorage"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />

      <button onClick={() => setValue("")}>Clear text</button>
    </Wrapper>
  );
};

export default App;

const Wrapper = styled.div`
  font-size: 1rem;

  h1 {
    margin: 0 0 0.625rem;
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 300;
  }

  input {
    display: inline-block;
    width: 50%;
    padding: 0.5rem;
    border: 0.125rem solid rgb(229, 231, 235);
    border-radius: 0.375rem;
    font-size: inherit;
  }

  button {
    border: 2px solid rgb(229, 231, 235);
    border-radius: 0.375rem;
    padding: 0.25rem 1rem;
    font-size: 1rem;
    font-weight: 200 !important;
    text-decoration: none;
    color: #000;
    line-height: 1.5rem;
    margin-left: 0.625rem;
    cursor: pointer;

    &:last-of-type {
      margin-right: 0;
    }

    &.active {
      background-color: rgba(191, 219, 254, 1);
    }

    &:hover {
      background-color: rgba(191, 219, 254, 0.3);
    }
  }
`;
