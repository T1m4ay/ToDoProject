import ms from "./Menu.module.css";
import "./Menu.module.css";
import uuid from "react-uuid";
import { useState } from "react";

function MenuBar({ items, setItems }) {
  const [tageActive, setTageActive] = useState(false);
  const MenuItems = ms.MenuItems;
  const MenuItemsActive = ms.MenuItemsActive;

  // function addTag() {
  //   setItems([...items], {
  //     id: uuid(),
  //     title: title,
  //     color: color,
  //   });
  // }

  return (
    <div className={ms.MenuBar}>
      <div className={ms.TextBody}>
        <ul className={ms.ul}>
          <li
            onClick={() => {
              setTageActive(!tageActive);
            }}
            className={ms.TagOption}
          >
            <div className={ms.IconTag}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-tag"
                viewBox="0 0 16 16"
                className={ms.IconItems}
              >
                <path d="M6 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-1 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0z" />
                <path d="M2 1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 1 6.586V2a1 1 0 0 1 1-1zm0 5.586 7 7L13.586 9l-7-7H2v4.586z" />
              </svg>
            </div>
            <h className={ms.TextMenu}>Tags</h>
          </li>
          <div className={ms.SettingTags}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-plus-circle"
              viewBox="0 0 16 16"
              className={ms.SettingTag}
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
            </svg>
          </div>
        </ul>
        <div className={tageActive ? MenuItemsActive : MenuItems}>
          {items.map((item) => (
            <div className={ms.MenuItem} style={{ color: item.color }}>
              {item.title}
            </div>
          ))}
        </div>
        <div className={ms.CommonMenuComp}>
          <h className={ms.TextMenu}>Example</h>
        </div>
      </div>
    </div>
  );
}

export default MenuBar;
