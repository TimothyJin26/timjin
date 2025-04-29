export default function About() {
    return (
        <>
            <div className="h-screen w-screen flex flex-col justify-center items-center">
                <div className="w-5/6 ml-28">
                    <div className="text-5xl font-bold text-[#301000] pb-3">
                        Glad you stopped by!
                    </div>
                    <div className="text-3xl font-semibold text-[#633f3d] pb-16">
                        Here's a little about me
                    </div>
                    <div className="text-lg text-black leading-8">
                        <div className="pb-8">
                            I'm Tim, a third year Computer Science student at
                            the University of British Columbia. I'm passionate
                            about
                            <br />
                            leveraging technology to drive transformative change
                            in the world in areas like entertainment,
                            healthcare,
                            <br />
                            productivity and beyond through software development
                            and AI!
                        </div>
                        <div>
                            When I'm not coding, you can find me skiing the
                            local mountains, going on hikes, learning a new song
                            on the piano,
                            <br />
                            or exploring the world, trying to find the tastiest
                            foods and the best spots to capture the perfect
                            photo.
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
