import React from "react";
import { ModalContainer } from "../../element/modal/modalContainer";
import { P } from "../../element/text/p";
import { InputClassic } from "../../element/input/inputClassic";
import { ButtonClassic } from "../../element/button/buttonClassic";
import { Title } from "../../element/text/title";
import { HandleChange } from "../../utils/handleChange";
import { patchUser } from "../../service/user.servoce";

export const EditUser = ({ data, setModalEdit,upDate }) => {
  const { form, handleChangeText } = HandleChange(data);
  console.log(data);

  const onsubmit = () => {
    console.log(form);
    patchUser(form).then((resp) => {
      console.log(resp);
      upDate()
      setModalEdit(state=>!state)
    });
  };

  return (
    <ModalContainer>
      <div>
        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className=" text-center">
              <Title text={"editando usuario"} />
            </div>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <div className="space-y-6" action="#" method="POST">
                <div>
                  <P text={"Nombre"} />
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
                    <P text={"Telefono"} />
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
                    <P text={"Correo electronico"} />
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
                    <P text={"Usuario"} />
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
            </div>
          </div>
        </div>
        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
          <ButtonClassic
            classe={"bg-red-600"}
            text={"Cerrar"}
            onClick={() => setModalEdit((state) => !state)}
          />
          <ButtonClassic text={"Guardar"} onClick={onsubmit} />
        </div>
      </div>
    </ModalContainer>
  );
};
