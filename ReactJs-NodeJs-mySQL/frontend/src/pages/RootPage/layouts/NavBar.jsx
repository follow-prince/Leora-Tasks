import { useEffect, useState, useCallback } from "react";
import MaskImage from "../../../assets/my-image/image.jpg";
import { HiColorSwatch } from "react-icons/hi";
import { FaRegMoon, FaRegGrinHearts } from "react-icons/fa";
import { MdOutlineLightMode } from "react-icons/md";
import { ImCoinDollar } from "react-icons/im";
import { CgWebsite } from "react-icons/cg";
import { TbExternalLink } from "react-icons/tb";
import { PiCrownLight } from "react-icons/pi";


const themes = [
  { name: "dark", icon: FaRegMoon, label: "Dark" },
  { name: "valentine", icon: FaRegGrinHearts, label: "Valentine" },
  { name: "dim", icon: MdOutlineLightMode, label: "Dim" },
  { name: "luxury", icon: ImCoinDollar, label: "Luxury" },
];

const NavBar = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "dim"
  );

  const changeTheme = useCallback((theme) => {
    setTheme(theme);
    localStorage.setItem("theme", theme);
    document.querySelector("html").setAttribute("data-theme", theme);
  }, []);

  useEffect(() => {
    changeTheme(theme);
  }, [theme, changeTheme]);

  return (
    <div style={{ position: "relative", zIndex: 99999999999 }}>
      <div className="prince-navbar prince-bg-base-100">
        <div className="prince-flex-1">
          <div className="prince-avatar prince-online">
            <div className="prince-rounded-full prince-w-10 prince-ring prince-ring-offset-2 prince-ring-primary prince-ring-offset-base-100">
              <img src={MaskImage} alt="User Avatar" />
            </div>
          </div>
            <div className="prince-flex prince-pl-2 prince-mt-3">
            <div className="prince-relative prince-bottom-[11px] prince-left-[10px] -prince-rotate-[48deg] prince-font-extrabold ">
                <PiCrownLight />
              </div>

              <div className="prince-text-lg prince-font-HomemadeApple prince-font-extrabold">
                Prince
              </div>
            </div>
        </div>
        <div className="prince-flex-none">
          <ul className="prince-px-1 prince-menu prince-menu-horizontal">
            <li>
              <details>
                <summary>
                  <CgWebsite />
                  WorkFolio
                </summary>
                <ul className="prince-rounded-t-none prince-p-2 prince-bg-base-100">
                  {[
                    { year: 2024, url: "https://elavarasan.me", label: "🚀" },
                    { year: 2023, url: "https://v1.elavarasan.me", label: "🌳" },
                    { year: 2022, url: "https://old.elavarasan.me", label: "🌱" },
                    { year: "3D", url: "https://3d.elavarasan.me", label: "💻" },
                  ].map(({ year, url, label }, index) => (
                    <li key={index}>
                      <a target="_blank" href={url} rel="noopener noreferrer">
                        {label} {year}
                        <TbExternalLink />
                      </a>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>
                  <HiColorSwatch />
                  Themes
                </summary>
                <ul className="prince-rounded-t-none prince-p-2 prince-bg-base-100">
                  {themes.map(({ name, icon: Icon, label }) => (
                    <li key={name}>
                      <button onClick={() => changeTheme(name)}>
                        <Icon />
                        {label}
                      </button>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
