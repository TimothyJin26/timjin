import me from "../assets/Me.webp";

export default function About() {
    return (
        <>
            <div className="h-screen w-full flex justify-center items-center overflow-x-hidden">
                <div className="w-5/6 flex flex-row items-center">
                    <div className="w-7/12 pl-16">
                        <div className="text-5xl font-bold text-[#301000] pb-3">
                            Glad you stopped by!
                        </div>
                        <div className="text-3xl font-semibold text-[#633f3d] pb-16">
                            Here's a little about me
                        </div>
                        <div className="text-xl text-black leading-8 font-sanchez">
                            <div className="pb-8">
                                I'm Tim, a fourth year Computer Science student
                                at the University of British Columbia. 
                            </div>
                            <div className="pb-8">
                                I'm passionate about leveraging technology to drive transformative
                                change in the world in areas like entertainment, healthcare,
                                productivity and beyond through software development and AI!
                            </div>
                            <div>
                                When I'm not coding, you can find me skiing the
                                local mountains, going on hikes, learning a new
                                song on the piano, or exploring the world, trying to find the
                                tastiest foods and the best spots to capture the
                                perfect photo.
                            </div>
                        </div>
                    </div>
                    <div className="w-5/12 flex justify-center">
                        <img
                            src={me}
                            alt="Tim"
                            className="w-96 h-96 rounded-full object-cover shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}