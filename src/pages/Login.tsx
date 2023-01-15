import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../components/Buttons/Button";
import Loading from "../components/Loading";
import { login } from "../redux/apiCall";
import { RootState } from "../redux/store";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const { isFetching, error, success } = useSelector(
    (state: RootState) => state.user
  );

  const handleLogin = (e: any) => {
    e.preventDefault();
    login(dispatch, { email, password });
  };

  return (
    <div className="flex flex-col justify-center items-center text-center fixed top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4 w-full max-w-3xl">
      <h2 className="font-bold text-4xl">Notein Lah</h2>

      <p className="font-semibold">biar ga lupa</p>
      <p className="mt-10 text-lg">
        Selamat Datang! Login aja buat bikin notenya
      </p>
      <div className="form-control">
        <input
          type="value"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>
          <span style={{ transitionDelay: "0ms" }}>E</span>
          <span style={{ transitionDelay: "50ms" }}>m</span>
          <span style={{ transitionDelay: "100ms" }}>a</span>
          <span style={{ transitionDelay: "150ms" }}>i</span>
          <span style={{ transitionDelay: "200ms" }}>l</span>
        </label>
      </div>
      <div className="form-control">
        <input
          type="password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>
          <span style={{ transitionDelay: "0ms" }}>P</span>
          <span style={{ transitionDelay: "50ms" }}>a</span>
          <span style={{ transitionDelay: "100ms" }}>s</span>
          <span style={{ transitionDelay: "150ms" }}>s</span>
          <span style={{ transitionDelay: "200ms" }}>w</span>
          <span style={{ transitionDelay: "250ms" }}>o</span>
          <span style={{ transitionDelay: "300ms" }}>r</span>
          <span style={{ transitionDelay: "350ms" }}>d</span>
        </label>
      </div>
      {error && (
        <div
          id="alert-2"
          className="flex p-4 mb-4 text-red-700 bg-red-100 rounded-lg dark:bg-gray-800 dark:text-red-400"
          role="alert"
        >
          <svg
            aria-hidden="true"
            className="flex-shrink-0 w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Info</span>
          <div className="ml-3 text-sm font-medium">{error}</div>
          <button
            type="button"
            className="ml-auto -mx-1.5 -my-1.5 bg-red-100 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex h-8 w-8 dark:bg-gray-800 dark:text-red-400 dark:hover:bg-gray-700"
            data-dismiss-target="#alert-2"
            aria-label="Close"
          >
            <span className="sr-only">Close</span>
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      )}
      {isFetching ? (
        <Loading />
      ) : (
        <div onClick={handleLogin} className="sign">
          <Button text="Login" style="px-10 py-3 cursor-pointer" />
        </div>
      )}
      <p className="mt-5">
        Belum punya akun?{" "}
        <a href="/register">
          <span className="hover:text-white text-gray-400 cursor-pointer">
            Daftar sini
          </span>
        </a>
      </p>
    </div>
  );
};

export default Login;
