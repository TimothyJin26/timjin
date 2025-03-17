import React from "react";

export interface ImageProps {
    src: string;
    alt: string;
    title: string;
    date: string;
    coordinates?: string;
    camera?: string;
    lens?: string;
    shutter?: string;
    aperture?: string;
    iso?: string;
}

const Image: React.FC<ImageProps> = ({
    src,
    alt,
    title,
    date,
    coordinates = "0, 0",
    camera = "?",
    lens = "?",
    shutter = "?",
    aperture = "?",
    iso = "?",
}) => {
    return (
        <div className="mb-4 break-inside-avoid-column group">
            <div className="relative">
                <img
                    src={src}
                    alt={alt}
                    className="w-full h-auto transition-opacity duration-300 group-hover:opacity-10"
                />
                {/* Overlay */}
                <div className="absolute inset-0 w-full h-full pt-12 pl-6 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-black">
                        <div className="text-2xl font-medium font-inter">
                            {title.split("\n").map((line, index) => (
                                <span key={index}>
                                    {line}
                                    {index < title.split("\n").length - 1 && (
                                        <br />
                                    )}
                                </span>
                            ))}
                        </div>
                        <div className="text-xs font-lekton pt-5">
                            {coordinates}
                        </div>
                        <div className="text-xs font-lekton pt-6">{camera}</div>
                        <div className="text-xs font-lekton pt-1">{lens}</div>
                        <div className="text-xs font-lekton pt-5">
                            {shutter}s
                            <span className="text-[#B8B8B8]"> | </span>ƒ
                            {aperture}
                            <span className="text-[#B8B8B8]"> | </span>ISO {iso}
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-xs text-left mt-1 ml-1 font-lekton text-[#B8B8B8]">
                {date}
            </div>
        </div>
    );
};

export default Image;
