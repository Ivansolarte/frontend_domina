import React from "react";
import { InputClassic } from "../../element/input/inputClassic";
import { P } from "../../element/text/p";
import { ButtonClassic } from "../../element/button/buttonClassic";
import { HandleChange } from "../../utils/handleChange";
import { useNavigate } from "react-router";
import { postUser } from "../../service/user.servoce";

export const NewUser = () => {
  const { form, handleChangeText } = HandleChange({});
  const navigate = useNavigate();

  const onsubmit = () => {
    postUser(form).then((resp)=>{
        console.log(resp);        
    })
    navigate("/home/a");
  };

  return (
    <div className="border rounded-lg bg-slate-50 h-full ">
      <div className="sm:mx-auto  sm:max-w-sm ">
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          Usuario
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto  sm:max-w-sm   ">
        <div className="space-y-6" action="#" method="POST">
          <div>
            <P>Nombre</P>
            <div className="mt-2">
              <InputClassic
                value={form.name}
                name={"name"}
                onChange={handleChangeText}
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <P>Correo electronico</P>
            </div>
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
              <P>Teléfono</P>
            </div>
            <div className="mt-2">
              <InputClassic
                value={form.phone}
                name={"phone"}
                onChange={handleChangeText}
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <P>Usuario</P>
            </div>
            <div className="mt-2">
              <InputClassic
                value={form.username}
                name={"username"}
                onChange={handleChangeText}
              />
            </div>
          </div>
        </div>
        <div className="mt-[200px] text-center">
          <ButtonClassic text={"Enviar"} onClick={onsubmit} />
        </div>
      </div>
    </div>
  );
};
