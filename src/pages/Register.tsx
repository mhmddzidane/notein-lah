import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../components/Buttons/Button";
import { register } from "../redux/apiCall";
import { RootState } from "../redux/store";

const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setNama] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isFetching, error, success } = useSelector(
    (state: RootState) => state.user
  );

  const handleRegister = (e: any) => {
    e.preventDefault();
    register(dispatch, { email, name, password });
  };

  useEffect(() => {
    if (success == true) {
      return navigate("/login");
    }
  }, [success]);

  return (
    <div className="flex flex-col items-center text-center px-3 py-28">
      <h2 className="font-bold text-4xl">Notein Lah</h2>

      <p className="font-semibold">biar ga lupa</p>
      <p className="mt-10 text-lg">
        Selamat Datang! Daftar dulu kalo mau buat notenya
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
          type="value"
          required
          onChange={(e) => setNama(e.target.value)}
        />
        <label>
          <span style={{ transitionDelay: "0ms" }}>N</span>
          <span style={{ transitionDelay: "50ms" }}>a</span>
          <span style={{ transitionDelay: "100ms" }}>m</span>
          <span style={{ transitionDelay: "150ms" }}>a</span>
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
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <div onClick={handleRegister} className="sign">
        <Button text="Register" style="px-9 py-3 cursor-pointer" />
      </div>
      <p className="mt-5">
        Sudah punya akun?{" "}
        <a href="/login">
          <span className="hover:text-white text-gray-400 cursor-pointer">
            Silahkan Login
          </span>
        </a>
      </p>
    </div>
  );
};

export default Register;
