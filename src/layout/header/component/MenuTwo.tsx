"use client";
import mobile_menu_data from "@/data/menu-data";
import Link from "next/link";
import React, { useState } from "react";

const MenuTwo = () => {
  const [openMenuId, setOpenMenuId] = useState<number | null>(null);

  const toggleSubmenu = (id: number) => {
    setOpenMenuId(openMenuId === id ? null : id); // Toggle
  };

  return (
    <>
      {mobile_menu_data?.map((item) => (
        <li
          key={item.id}
          className={`${
            item.hasDropdown ? "menu-item-has-children has-dropdown" : ""
          } ${openMenuId === item.id ? "active" : ""}`}
        >
          <div onClick={() => toggleSubmenu(item.id)}>
            <Link href={item.link || "#"}>{item.title}</Link>
          </div>

          {item.hasDropdown && item.submenus && (
            <ul
              className="submenu"
              style={{
                display: openMenuId === item.id ? "block" : "none",
              }}
            >
              {item.submenus.map((subItem, index) => (
                <li key={index}>
                  <Link href={subItem.link}>{subItem.title}</Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </>
  );
};

export default MenuTwo;
