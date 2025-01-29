import { TypeAnimation } from "react-type-animation";
import Socials from "./common/reusable/SlidingInUnderLine";

export default function Hero() {
    return (
        <>
            <div className="items-center justify-center w-screen">
                <div className="w-5/6 mx-auto">
                    <div className="text-6xl font-bold text-[#243540] pb-3">
                        <pre>Student, software developer,</pre>
                        ML Researcher
                    </div>
                    <div className="text-[#526370] text-xs">
                        <TypeAnimation
                            sequence={[
                                "Hi! I'm Tim",
                                1500,
                                "Hi! I'm Tim, a 3rd year computer science student at UBC",
                                1500,
                                "Use the links below to reach to me!",
                                500,
                                "I would love to connect!",
                                1000,
                            ]}
                            wrapper="span"
                            speed={1}
                            style={{ fontSize: "2em", display: "inline-block" }}
                            repeat={Infinity}
                            omitDeletionAnimation={true}
                        />
                    </div>
                    <Socials />
                </div>
            </div>
        </>
    );
}
