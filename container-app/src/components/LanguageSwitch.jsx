import { useState, useEffect } from "react";
import { styled } from "styled-components";

const languages = ["en", "de"];

const LanguageSwitch = () => {
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "en"
  );

  // Set language to localStorage
  useEffect(() => {
    localStorage.setItem("language", `${language}`);
    window.dispatchEvent(new Event("storage"));
  }, [language]);

  return (
    <SwitchWrapper>
      {languages.map((lang) => (
        <button
          className={lang === language ? "active" : ""}
          key={lang}
          onClick={() => setLanguage(lang)}
        >
          {lang}
        </button>
      ))}
    </SwitchWrapper>
  );
};

export default LanguageSwitch;

const SwitchWrapper = styled.div`
  margin-left: auto;

  button {
    border: 0.125rem solid rgb(229, 231, 235);
    border-radius: 0.375rem;
    padding: 0.25rem 1rem;
    font-size: 1rem;
    font-weight: 200 !important;
    text-decoration: none;
    color: #000;
    line-height: 1.5rem;
    margin-right: 0.625rem;
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
