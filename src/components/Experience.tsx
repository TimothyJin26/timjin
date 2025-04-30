import Timeline from "./Timeline";

export default function Experience() {
    return (
        <>
            <div className="h-screen w-full flex flex-col justify-center items-center overflow-x-hidden">
                <div className="w-5/6">
                    <div className="text-5xl font-bold text-[#301000] pt-10 pb-24 pl-28">
                        Experience
                    </div>
                    <Timeline />
                </div>
            </div>
        </>
    );
}
