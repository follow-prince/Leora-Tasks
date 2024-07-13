import { PiCrownLight } from "react-icons/pi";

const Footer = () => {
  return (
    <div>
      <footer className="prince-p-4 prince-footer prince-footer-center prince-text-base-content">
        <aside>
          <div className="prince-flex prince-font-bold prince-font-AppleFont">
            <a href="https://github.com/follow-prine/">MIT License</a> &copy;
            {new Date().getFullYear()} - crafted by
            <a
              href="https://elavarasan.me"
              className="prince-ml-1 prince-flex prince-flex-row prince-h-5 prince-to-primary"
            >
              <div className="prince-relative prince-bottom-[9px] prince-left-2 -prince-rotate-[45deg] prince-font-extrabold ">
                <PiCrownLight />
              </div>

              <div className="prince-text-lg prince-font-HomemadeApple prince-font-extrabold">
                Prince
              </div>
            </a>
          </div>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
