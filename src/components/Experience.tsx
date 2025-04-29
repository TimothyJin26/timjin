import Timeline from "./Timeline";

export default function Experience() {
    return (
        <>
            <div className="h-screen w-screen flex justify-center items-center">
                <div className="w-5/6">
                    <div className="text-5xl font-bold text-[#301000] pt-10 pb-16 pl-16">
                        Experience
                    </div>
                    <Timeline />
                </div>
            </div>
        </>
    );
}
