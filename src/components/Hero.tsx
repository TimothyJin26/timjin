import { TypeAnimation } from "react-type-animation";
import Socials from "./common/reusable/Socials";
import LearnMoreHint from "./common/LearnMoreHint";

export default function Hero() {
    return (
        <>
            <div className="h-screen flex flex-col justify-center items-center">
                <div className="w-5/6 mx-auto">
                    <div className="text-6xl font-bold text-[#301000] pb-3 drop-shadow-[2.0px_2.0px_0.3px_rgba(0,0,0,0.1)]">
                        <pre>Student, software developer,</pre>
                        ML Researcher
                    </div>
                    <div className="text-[#526370]">
                        <TypeAnimation
                            sequence={[
                                "Hi! I'm Tim 👋",
                                1500,
                                "Hi! I'm Tim 👋, a third year Computer Science student at UBC",
                                1500,
                                "Use the links below to reach out!",
                                1000,
                                "I would love to connect!",
                                1500,
                            ]}
                            wrapper="span"
                            speed={1}
                            style={{
                                fontSize: "1.5em",
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
