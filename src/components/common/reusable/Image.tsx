import React, { useState } from "react";

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
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    return (
        <>
            <div className="mb-4 break-inside-avoid-column group">
                <div className="relative cursor-pointer" onClick={openModal}>
                    <img
                        src={src}
                        alt={alt}
                        className="w-full h-auto transition-opacity duration-300 group-hover:opacity-10"
                        loading="lazy"
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
                        {camera !== "?" && (
                            <div>
                                <div className="text-xs font-lekton pt-5">
                                    {coordinates}
                                </div>
                                <div className="text-xs font-lekton pt-6">
                                    {camera}
                                </div>
                                <div className="text-xs font-lekton pt-1">
                                    {lens}
                                </div>
                                <div className="text-xs font-lekton pt-5">
                                    {shutter}s
                                    <span className="text-[#B8B8B8]"> | </span>ƒ
                                    {aperture}
                                    <span className="text-[#B8B8B8]"> | </span>
                                    ISO {iso}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="text-xs text-left mt-1 ml-1 font-lekton text-[#B8B8B8]">
                {date}
            </div>
        </div>

        {/* Modal */}
        {isModalOpen && (
            <div 
                className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
                onClick={closeModal}
            >
                <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 text-gray-400 text-3xl hover:text-gray-200 transition-colors z-10"
                    aria-label="Close modal"
                >
                    ×
                </button>
                <div className="relative flex max-w-[90vw] max-h-[95vh] gap-8" onClick={(e) => e.stopPropagation()}>
                    <div className="flex-shrink-0">
                        <img
                            src={src}
                            alt={alt}
                            className="max-w-full max-h-[95vh] object-contain"
                        />
                    </div>
                    <div className="flex-shrink-0 text-gray-300 pt-12 pl-6 min-w-[300px]">
                        <div className="text-4xl font-medium font-inter mb-8">
                            {title.split("\n").map((line, index) => (
                                <span key={index}>
                                    {line}
                                    {index < title.split("\n").length - 1 && (
                                        <br />
                                    )}
                                </span>
                            ))}
                        </div>
                        {camera !== "?" && (
                            <div className="space-y-4">
                                <div className="text-lg font-lekton">
                                    {coordinates}
                                </div>
                                <div className="text-lg font-lekton">
                                    {camera}
                                </div>
                                <div className="text-lg font-lekton">
                                    {lens}
                                </div>
                                <div className="text-lg font-lekton">
                                    {shutter}s
                                    <span className="text-[#888888]"> | </span>ƒ
                                    {aperture}
                                    <span className="text-[#888888]"> | </span>
                                    ISO {iso}
                                </div>
                            </div>
                        )}
                        <div className="text-lg font-lekton mt-8">
                            {date}
                        </div>
                    </div>
                </div>
            </div>
        )}
    </>
    );
};

export default Image;
