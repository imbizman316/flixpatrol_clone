import React from "react";
import { useRef, useState, useEffect } from "react";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]@[a-z].[a-z]$/;

function SignUpBox() {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatchPwd, setValidMatchPwd] = useState(false);
  const [matchPwdFocus, setmatchPwdFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const [successEnter, setSuccessEnter] = useState(false);

  useEffect(() => {
    const result = user.match(USER_REGEX);
    setValidName(result);
  }, [user]);

  useEffect(() => {
    const result = email.match(EMAIL_REGEX);
    setValidEmail(result);
  }, [email]);

  useEffect(() => {
    const result = pwd.match(PWD_REGEX);
    setValidPwd(result);

    const match = pwd === matchPwd;
    setValidMatchPwd(match);
  }, [pwd, matchPwd]);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    validMatchPwd && validName && validPwd
      ? setSuccess(true)
      : setSuccess(false);
  }, [validMatchPwd, validName, validPwd]);

  function handleSubmit() {
    setSuccessEnter(true);
  }

  return (
    <>
      {successEnter ? (
        <div
          name="sign-in-box"
          className="bg-gray-700 min-w-[480px] flex flex-col p-3 rounded-sm"
        >
          Resgistred successfully.
          <Link to="/signin">Log-in now</Link>
        </div>
      ) : (
        <div
          name="sign-in-box"
          className="bg-gray-700 min-w-[480px] flex flex-col p-3 rounded-sm"
        >
          <></>
          <p className="mb-3">Enter your e-mail address and password.</p>
          <form onSubmit={handleSubmit}>
            {" "}
            <div className="flex flex-col">
              {userFocus && user.length > 0 && (
                <label for="id">
                  {validName ? (
                    <FontAwesomeIcon
                      className="text-green-500"
                      icon={faCheck}
                    />
                  ) : (
                    <FontAwesomeIcon className="text-red-500" icon={faTimes} />
                  )}
                </label>
              )}
              <input
                className="mb-2 bg-gray-800 p-1 border-[1px] rounded-sm border-gray-400 w-[100%]"
                placeholder={userFocus ? "yo hello" : "enter id"}
                onFocus={() => setUserFocus(true)}
                onBlur={() => setUserFocus(false)}
                value={user}
                onChange={(e) => setUser(e.target.value)}
                id="id"
                ref={userRef}
                required
                aria-live="assertive"
                autoComplete="off"
              />
              {/* {emailFocus && email.length > 0 && (
            <label for="email">{validEmail ? "is valid" : "not valid"}</label>
          )}
          <input
            className="mb-2 bg-gray-800 p-1 border-[1px] rounded-sm border-gray-400"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => setEmailFocus(true)}
            onBlur={() => setEmailFocus(false)}
            id="email"
            required
          /> */}
              {pwdFocus && pwd.length > 0 && (
                <label for="pwd">
                  {validPwd ? (
                    <FontAwesomeIcon
                      className="text-green-500"
                      icon={faCheck}
                    />
                  ) : (
                    <FontAwesomeIcon className="text-red-500" icon={faTimes} />
                  )}
                </label>
              )}
              <input
                className="mb-3 bg-gray-800 p-1 border-[1px] rounded-sm border-gray-400"
                type="password"
                placeholder="password"
                value={pwd}
                onChange={(e) => setPwd(e.target.value)}
                onFocus={() => setPwdFocus(true)}
                onBlur={() => setPwdFocus(false)}
                id="pwd"
                required
                autoComplete="off"
              />
              {matchPwdFocus && matchPwd.length > 0 && (
                <label for="matchPwd">
                  {validMatchPwd ? (
                    <FontAwesomeIcon
                      className="text-green-500"
                      icon={faCheck}
                    />
                  ) : (
                    <FontAwesomeIcon className="text-red-500" icon={faTimes} />
                  )}
                </label>
              )}
              <input
                className="mb-3 bg-gray-800 p-1 border-[1px] rounded-sm border-gray-400"
                type="password"
                placeholder="confirm password"
                value={matchPwd}
                onChange={(e) => setMatchPwd(e.target.value)}
                onFocus={() => setmatchPwdFocus(true)}
                onBlur={() => setmatchPwdFocus(false)}
                id="matchPwd"
                required
                autoComplete="off"
              />
            </div>
            <div className="flex flex-row justify-between">
              <div className="flex flex-row gap-2">
                <h1 className="text-sm line-clamp-2 w-[80%] overflow-scroll scroll-m-1">
                  By signing up you agree that you have read and accepted Terms
                  and Conditions and Privacy Policy
                </h1>
              </div>
              <button
                className="btn bg-blue-600 text-gray-100 hover:bg-blue-500 px-3 py-1 text-sm rounded-sm disabled:bg-gray-400 disabled:text-gray-600"
                disabled={success ? false : true}
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default SignUpBox;
