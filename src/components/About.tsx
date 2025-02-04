export default function Hero() {
    return (
        <>
            <div className="h-screen flex flex-col justify-center items-center">
                <div className="w-5/6 mx-auto">
                    <div className="text-5xl font-bold text-[#301000] pb-3 drop-shadow-[2.0px_2.0px_0.3px_rgba(0,0,0,0.1)]">
                        So glad you stopped by!
                    </div>
                    <div className="text-3xl font-semibold text-[#633f3d] pb-3 drop-shadow-[1.0px_1.0px_1.0px_rgba(0,0,0,0.0)]">
                        Here's a little about me
                    </div>
                    <div>
                        I'm Tim, a third year Computer Science student at the
                        University of British Columbia. I'm passionate about
                        leveraging technology to drive transformative change in
                        the world in areas like entertainment, healthcare, and
                        beyond through software development and AI!
                    </div>
                </div>
            </div>
        </>
    );
}
