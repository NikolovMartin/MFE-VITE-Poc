import { useState, useEffect } from "react";
import { styled } from "styled-components";

const AuthSwitch = () => {
  const [authenticationState, setAuthState] = useState(
    localStorage.getItem("authenticationState") || "Login"
  );

  // Set authenticationState to localStorage
  useEffect(() => {
    localStorage.setItem("authenticationState", `${authenticationState}`);
    window.dispatchEvent(new Event("storage"));
  }, [authenticationState]);

  return (
    <AuthWrapper>
      <button
        onClick={() =>
          setAuthState(authenticationState === "Login" ? "Logout" : "Login")
        }
      >
        {authenticationState}
      </button>
    </AuthWrapper>
  );
};

export default AuthSwitch;

const AuthWrapper = styled.div`
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

    &:hover {
      background-color: rgba(191, 219, 254, 0.3);
    }
  }
`;
