import React from 'react'
import { Link, Outlet } from "react-router";
import { Header } from '../component/header/header';
import { Menu } from '../component/menu/menu';

export const Home = () => {
  return (
    <div className="h-screen flex flex-col">
    <Header />
    <div className="flex flex-1 min-h-0  max-h-[100%]">
      <Menu />
      <main className="flex-1 p-4   max-h-[100%]">
        <Outlet />
      </main>
    </div>
  </div>

  )
}
