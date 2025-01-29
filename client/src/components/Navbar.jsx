import React, { useState } from "react";
import { FaSearch, FaUserCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import apiRequest from "../lib/apiRequest.js";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const { currentUser, updateUser } = useContext(AuthContext);

  const navivate = useNavigate();

  const handleLogout = async () => {
    try {
      await apiRequest.post("auth/logout");
      updateUser(null);
      navivate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav className="bg-white border-b border-gray-300 shadow-sm">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-orange-600 text-2xl font-bold">
          <a href="/">
            <img src="/logo-silmara.svg" alt="" />
          </a>
        </div>

        {/* Menu principal */}
        <div className="hidden md:flex space-x-6">
          <div className="relative group">
            <a href="/list" className="text-gray-700 hover:text-orange-600">
              Imóveis
            </a>
          </div>
          <a href="/cidades" className="text-gray-700  hover:text-orange-600">
            Cidades
          </a>
          <a href="/contato" className="text-gray-700  hover:text-orange-600">
            Contato
          </a>
        </div>

        {/* Campo de busca */}
        <div className="hidden md:flex items-center bg-white border border-gray-300 rounded-lg overflow-hidden">
          <input
            type="text"
            placeholder="Buscar..."
            className="px-4 py-2 text-sm outline-none w-full"
          />
          <button className="px-4 py-2 text-orange-500 text-sm hover:text-orange-400 cursor-pointer">
            <FaSearch />
          </button>
        </div>

        {/* Imagem de perfil com submenu */}
        <div className="relative">
          {currentUser ? (
            <div className="flex items-center justify-center">
              <button
                className="flex items-center space-x-2 cursor-pointer"
                onClick={() => setProfileMenuOpen(!profileMenuOpen)}
              >
                <img
                  alt=""
                  src={currentUser.avatar || "/avatar.png"}
                  className="inline-block size-8 m-2 rounded-full ring-2 ring-white"
                />{" "}
                <span className="text-sm m-2 truncate max-w-[90px]">
                  {currentUser.username}
                </span>
              </button>
            </div>
          ) : (
            <>
              <button
                className="flex items-center space-x-2"
                onClick={() => setUserMenuOpen(!userMenuOpen)}
              >
                <FaUserCircle className="text-gray-600 text-3xl cursor-pointer" />
              </button>
            </>
          )}

          {/* Submenu do perfil */}
          {profileMenuOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-300 rounded shadow-lg z-10">
              <ul>
                <li>
                  <a
                    href="/perfil"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Meu Perfil
                  </a>
                </li>

                <li>
                  <a
                    href=""
                    onClick={handleLogout}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Sair
                  </a>
                </li>
              </ul>
            </div>
          )}

          {/* Submenu do perfil */}
          {userMenuOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-300 rounded shadow-lg z-10">
              <ul>
                <li>
                  <a
                    href="/login"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Login
                  </a>
                </li>

                <li>
                  <a
                    href="/register"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Register
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Menu para mobile */}
        <button
          className="md:hidden text-gray-600"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          &#9776;
        </button>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-300">
          <ul className="p-4">
            <li>
              <a
                href="#"
                className="block py-2 text-gray-700 hover:text-orange-600"
              >
                Imóveis
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 text-gray-700 hover:text-orange-600"
              >
                Cidades
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 text-gray-700 hover:text-orange-600"
              >
                Contato
              </a>
            </li>
            <li>
              <input
                type="text"
                placeholder="Buscar..."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
              />
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
