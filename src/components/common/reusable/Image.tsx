import React from "react";

interface ImageProps {
    src: string;
    alt: string;
    title: string;
    date: string;
}

const Image: React.FC<ImageProps> = ({ src, alt, title, date }) => {
    return (
        <div className="mb-4 break-inside-avoid-column group">
            <div className="relative">
                <img
                    src={src}
                    alt={alt}
                    className="w-full h-auto transition-opacity duration-300 group-hover:opacity-10"
                />
                <div className="absolute inset-0 w-full h-full pt-12 pl-6 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-black">
                        <h3 className="text-2xl font-medium font-inter">
                            {title}
                        </h3>
                    </div>
                </div>
            </div>

            <div className="text-sm text-left mt-1 ml-1 font-lekton text-[#B8B8B8]">
                {date}
            </div>
        </div>
    );
};

export default Image;
