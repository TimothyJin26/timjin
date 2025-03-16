import mail from "../../../assets/envelope-solid.svg";
import linkedin from "../../../assets/linkedin.svg";
import github from "../../../assets/github.svg";
import { ReactSVG } from "react-svg";

export default function Socials() {
    return (
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
                            width: "30px",
                            height: "30px",
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
                            width: "26px",
                            height: "26px",
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
                            width: "26px",
                            height: "26px",
                        }}
                    />
                </a>
            </li>
        </ul>
    );
}
