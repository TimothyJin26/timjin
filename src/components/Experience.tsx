import Timeline from "./Timeline";

export default function Experience() {
    return (
        <>
            <div className="h-screen flex justify-center items-center">
                <div className="w-5/6 ml-32">
                    <div className="text-5xl font-bold text-[#301000] pb-40">
                        Experience 🔧
                    </div>
                    <Timeline />
                </div>
            </div>
        </>
    );
}
