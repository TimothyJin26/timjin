import { TypeAnimation } from "react-type-animation";
import Socials from "./common/reusable/Socials";
import LearnMoreHint from "./common/LearnMoreHint";

export default function Hero() {
    return (
        <>
            <div className="h-screen w-full flex flex-col justify-center items-center overflow-x-hidden">
                <div className="w-5/6 pl-28">
                    <div className="text-5xl tracking-wide font-bold text-[#301000] pb-3">
                        Student, software developer,
                        <br />
                        ML Researcher
                    </div>
                    <div className="text-[#526370]">
                        <TypeAnimation
                            sequence={[
                                "Hi! I'm Tim 👋",
                                1500,
                                "Hi! I'm Tim 👋, a fourth year Computer Science student at UBC",
                                1500,
                                "Use the links below to reach out!",
                                1000,
                                "I would love to connect!",
                                1500,
                            ]}
                            wrapper="span"
                            speed={2}
                            style={{
                                fontSize: "1.2em",
                                display: "inline-block",
                            }}
                            repeat={Infinity}
                            omitDeletionAnimation={true}
                        />
                    </div>
                    <Socials />
                    <LearnMoreHint />
                </div>
            </div>
        </>
    );
}
