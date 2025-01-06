import mail from "../assets/envelope-regular.svg";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";
import { ReactSVG } from "react-svg";

export default function Hero() {
  return (
    <>
      <div className="items-center justify-center w-screen">
        <div className="w-5/6 mx-auto">
          <div className="text-6xl font-bold text-[#243540]">
            <pre>Student, software developer,</pre>
            ML Researcher
          </div>
          <div>
            Description abasdj soeof lasnsoj ennsoe abasdj soeof lasnsoj ennsoe
            abasdj soeof lasnsoj ennsoe abasdj soeof lasnsoj ennsoe
          </div>
          <ul className={"flex list-none space-x-6 py-2"}>
            <li>
              <a
                href="mailto:timothy.jin26@gmail.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Mail"
              >
                <ReactSVG
                  src={mail}
                  style={{
                    width: "32px",
                    height: "32px",
                  }}
                />
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/timothyyjin"
                target="_blank"
                rel="noreferrer"
                aria-label="Mail"
              >
                <ReactSVG
                  src={linkedin}
                  style={{
                    width: "28px",
                    height: "28px",
                  }}
                />
              </a>
            </li>

            <li>
              <a
                href="https://github.com/TimothyJin26"
                target="_blank"
                rel="noreferrer"
                aria-label="Mail"
              >
                <ReactSVG
                  src={github}
                  style={{
                    width: "28px",
                    height: "28px",
                  }}
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
