"use client";
import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { Menu, MoveUpRight, X } from "lucide-react";

const links = [
  { name: "Kelas Pilihan", href: "/docs" },
  { name: "Tentang Kami", href: "/docs" },
  { name: "Benefit", href: "/docs" },
  { name: "Kerja Sama", href: "/docs" },
];

export default function Navbar() {
  const [isLogin, setIsLogin] = useState(false);
  const [isActive, setIsActive] = useState(false);

  return (
    <header className="fixed left-0 right-0 border-b border-slate-200 bg-white">
      <div className="container relative z-50 mx-auto flex h-[63px] items-center justify-between bg-white px-3 py-2.5 lg:px-10 lg:py-3">
        <h1 className="text-xl font-black tracking-tighter lg:text-3xl">
          LOGO
        </h1>

        <nav className="hidden gap-8 lg:flex">
          {links.map((_, i) => (
            <Link
              key={i}
              className="text-sm font-medium hover:text-slate-700"
              href={_.href}
            >
              {_.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center">
          {isLogin ? (
            <Link
              onClick={() => setIsLogin(false)}
              href=""
              className={`flex items-center gap-2 rounded-md border border-slate-200 bg-white px-2 py-1 hover:bg-slate-100 hover:text-slate-900`}
            >
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>RA</AvatarFallback>
              </Avatar>

              <span>Rizky</span>
            </Link>
          ) : (
            <div>
              <Link
                className={`${buttonVariants({ variant: "link" })} max-lg:h-8 max-lg:rounded-md max-lg:px-2`}
                href=""
              >
                Daftar
              </Link>
              <Link
                className={`${buttonVariants({ variant: "default" })} max-lg:h-8 max-lg:rounded-md max-lg:px-2`}
                href=""
                onClick={() => setIsLogin(true)}
              >
                Masuk
              </Link>
            </div>
          )}

          <div className="relative">
            <X
              onClick={() => setIsActive(false)}
              className={`${isActive ? "scale-100" : "scale-0"} absolute ml-2 transition duration-100 ease-in-out lg:hidden`}
            />
            <Menu
              onClick={() => setIsActive(true)}
              className={`${!isActive ? "scale-100" : "scale-0"} ml-2 transition duration-100 ease-in-out lg:hidden`}
            />
          </div>
        </div>
      </div>

      <div
        className={`${isActive ? "-translate-y-0" : "-translate-y-full"} absolute z-40 h-screen w-full border-t border-slate-200 bg-white transition duration-300 lg:hidden`}
      >
        <nav className="container mx-auto flex flex-col px-3">
          {links.map((_, i) => (
            <Link
              key={i}
              className={`${buttonVariants({ variant: "link" })} relative justify-between pl-0 font-medium hover:text-slate-700`}
              href={_.href}
            >
              {_.name}

              <MoveUpRight className="absolute -right-1 -translate-x-1/2 opacity-50" />
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
