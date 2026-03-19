import Timeline from "./Timeline";

export default function Experience() {
    return (
        <>
            <div className="min-h-screen w-full flex flex-col justify-center items-center overflow-x-hidden py-24 md:py-0">
                <div className="w-full px-6 md:w-5/6 md:px-0">
                    <div className="text-3xl md:text-5xl font-bold text-[#301000] pt-6 md:pt-12 pb-10 md:pb-16 md:pl-28">
                        Experience
                    </div>
                    <Timeline />
                </div>
            </div>
        </>
    );
}
