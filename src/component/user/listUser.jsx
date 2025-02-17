import { useState, useEffect } from "react";
import { Table } from "../../element/table/table";
import { ButtonClassic } from "../../element/button/buttonClassic";
import { userList, deleteUser } from "../../service/user.servoce";
import { EditUser } from "./EditUser";
import { Pagination } from "../../element/table/pagination";
import { useNavigate } from "react-router";

export const ListUser = () => {
  const title = ["ID", "nombre", "email", "usuario", "Opciones"];
  const [arrayUsers, setArrayUsers] = useState([]);
  const [modalEdit, setModalEdit] = useState(false);
  const [dataEdit, setDataEdit] = useState({});
  const [onPageChange, setOnPageChange] = useState(1);
  const navigate = useNavigate();
  const totalItems = 10; // Cambia esto según tus datos
  const itemsPerPage = 3;

  const openEdit = (e) => {
    setDataEdit(e);
    setModalEdit(true);
  };

  const deleteUse = (e) => {
    deleteUser(e.id).then((resp) => {
      console.log(resp);
    });
  };

  const getUserList = () => {
    userList({ page: onPageChange, limit: itemsPerPage }).then((resp) => {
      const updatedUsers = resp.users.map((user) => ({
        ...user,
        option: (
          <div className="flex ">
            <ButtonClassic
              onClick={() => openEdit(user)}
              text={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.862 3.487a2.25 2.25 0 013.182 3.182l-10.38 10.38a2.25 2.25 0 01-.805.532l-3.103 1.035a.75.75 0 01-.954-.954l1.035-3.103a2.25 2.25 0 01.532-.805l10.38-10.38z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 14.25V19.5A2.25 2.25 0 0117.25 21H4.5A2.25 2.25 0 012.25 18.75V6A2.25 2.25 0 014.5 3.75H9.75"
                  />
                </svg>
              }
            />
            <ButtonClassic
              onClick={() => deleteUse(user)}
              classe={"bg-red-600"}
              text={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              }
            />
          </div>
        ),
      }));
      setArrayUsers(updatedUsers);
    });
  };

  useEffect(() => {
    getUserList();
    return () => {};
  }, [onPageChange]);

  return (
    <div className="">
      <div className="mb-4">
        <ButtonClassic
          text={"Nuevo usuario"}
          onClick={() => navigate("/home/b")}
        />
      </div>
      <div>
        <Table data={arrayUsers} title={title} />
        <Pagination
          total={totalItems}
          page={onPageChange}
          limit={itemsPerPage}
          onPageChange={setOnPageChange}
        />
      </div>
      {modalEdit && (
        <EditUser
          data={dataEdit}
          setModalEdit={setModalEdit}
          upDate={getUserList}
        />
      )}
    </div>
  );
};
