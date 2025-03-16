import Timeline from "./Timeline";

export default function Experience() {
    return (
        <>
            <div className="h-screen w-screen flex justify-center items-center">
                <div className="w-5/6 ml-28">
                    <div className="text-5xl font-bold text-[#301000] pb-40">
                        Experience 🔧
                    </div>
                    <Timeline />
                </div>
            </div>
        </>
    );
}
