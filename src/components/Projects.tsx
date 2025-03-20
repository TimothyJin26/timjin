import React from "react";

const Projects: React.FC = () => {
    return (
        <>
            <div className="h-screen w-screen flex flex-col justify-center items-center">
                <div className="w-5/6 ml-28">
                    <div className="text-5xl font-bold text-[#301000] pb-3">
                        This page is still under construction! 🔧
                    </div>
                    <div className="text-3xl font-semibold text-[#633f3d] pb-16">
                        Please check out my{" "}
                        <a
                            href="https://github.com/TimothyJin26"
                            className="text-blue-500 underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub
                        </a>{" "}
                        in the meantime
                    </div>
                </div>
            </div>
        </>
    );
};

export default Projects;
