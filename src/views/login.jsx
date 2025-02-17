import { useState } from "react";
import { InputClassic } from "../element/input/inputClassic";
import { P } from "../element/text/p";
import { ButtonClassic } from "../element/button/buttonClassic";
import { HandleChange } from "../utils/handleChange";
import { login } from "../service/user.servoce";
import { useLogin } from "../store/login";

export const Login = () => {
  const {setLogin} = useLogin();
  const { form, handleChangeText } = HandleChange({
    email: "Nathan@yesenia.net",
    password: "",
  });
  const [erro, setErro] = useState(false);

  const onsubmit = () => {
    if (form.email === "" || form.password === "") {
      alert("No están completos");
      return;
    }
    login(form).then((resp) => {
      if (resp) {
        sessionStorage.setItem("user", JSON.stringify(resp));
        setErro(false);
        setLogin()
        return;
      }
      setErro(true);
    });
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm mt-24">
        {erro && (
          <div
            className="bg-orange-300 border-t-4 border-orange-500 rounded-b rounded-t text-teal-900 px-4 py-3 shadow-md"
            role="alert"
          >
            <div className="flex">
              <div className="py-1">
                <svg
                  className="fill-current h-6 w-6 text-slate-100 mr-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                </svg>
              </div>
              <div>
                <p className="font-bold">Incorrecto</p>
                <p className="text-sm">El Correo o la Contraseña esta mal.</p>
              </div>
            </div>
          </div>
        )}

        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          Inicio session
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm ">
        <div className="space-y-6" action="#" method="POST">
          <div>
            <P>Correo electronico</P>
            <div className="mt-2">
              <InputClassic
                value={form.email}
                name={"email"}
                onChange={handleChangeText}
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <P>Contraseña</P>
            </div>
            <div className="mt-2">
              <InputClassic
                value={form.password}
                name={"password"}
                onChange={handleChangeText}
              />
            </div>
          </div>
          <div className="relative group flex justify-center">
            <ButtonClassic text={"Enviar"} onClick={onsubmit} />
            <span className="absolute rounded-lg -top-10 left-1/2 -translate-x-1/2 w-max px-2 py-3 text-xs text-white bg-orange-200 rounded opacity-0 group-hover:opacity-100 transition-opacity">
              todos los campos deben de estar llenos
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
