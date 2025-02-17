import React from "react";
import { P } from "../text/p";

export const Table = ({ data = [], title = [] }) => {
 
  return (
    <div className="borde rounded-xl border">
      <ul
        role="list"
        className="divide-y divide-gray-100 bg-slate-400 rounded-t-xl"
      >
        <li className="flex justify-between gap-x-6 py-3 ">
          {title.map((item, index) => (
            <div key={index} className=" w-full">
              <div className="flex min-w-0 gap-x-4 justify-center w-full text-white">
                {item}
              </div>
            </div>
          ))}
        </li>
      </ul>
      <ul
        role="list"
        className="divide-y divide-gray-100 bg-slate-100 rounded-b-xl"
      >
        {data.map((item, index) => (
          <li
            key={index}
            className={`flex justify-between rounded-b-xl  ${
              index % 2 ? " bg-slate-100" : "bg-slate-50"
            }`}
          >
            <div className="flex min-w-0  py-3 justify-center  w-full h-full">
              <P>{item.id}</P>
            </div>
            <div className="flex min-w-0 py-3 justify-center border-l-2  w-full">
              <P>{item.name}</P>
            </div>
            <div className="flex min-w-0 py-3 justify-center z-10 border-l-2 w-full overflow-hidden text-ellipsis whitespace-nowrap">
              <P>{item.email}</P>
            </div>
            <div className="flex min-w-0 py-3 justify-center border-l-2  w-full">
              <P>{item.username}</P>
            </div>
            <div className="flex min-w-0 py-3 justify-center border-l-2  rounded-br-xl w-full">
              <p>{item.option}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
