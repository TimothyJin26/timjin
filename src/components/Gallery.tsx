import React from "react";
import Image from "./common/reusable/Image";

interface GalleryImage {
    src: string;
    span: number;
    title: string;
    date: string;
}

const Gallery: React.FC = () => {
    const images: GalleryImage[] = [
        {
            src: "/assets/images/Golden_Gate.jpg",
            span: 1,
            title: "Golden Gate",
            date: "18/06/2024",
        },
        {
            src: "/assets/images/Rose_Garden_Drone.jpg",
            span: 1,
            title: "Rose Garden",
            date: "19/05/2024",
        },
        {
            src: "/assets/images/Mouse_Tank_Rd.jpg",
            span: 1,
            title: "Mouse Tank Rd",
            date: "19/12/2024",
        },
        {
            src: "/assets/images/Devils_Bunker.jpg",
            span: 1,
            title: "Devil's Bunker",
            date: "14/06/2024",
        },
        {
            src: "/assets/images/California_St.jpg",
            span: 1,
            title: "California St",
            date: "18/06/2024",
        },
        {
            src: "/assets/images/Santa_Monica.jpg",
            span: 1,
            title: "Santa Monica",
            date: "30/04/2024",
        },
        {
            src: "/assets/images/Chevy_Bel_Air.jpg",
            span: 1,
            title: "Chevy Bel Air",
            date: "29/04/2024",
        },
    ];

    return (
        <>
            <div className="h-screen flex">
                <div>
                    <div className="text-4xl font-bold text-[#301000] pt-32 ml-24">
                        Gallery 🔧
                    </div>
                    <div className="w-5/6 mx-auto columns-3 gap-8 mt-16">
                        {images.map((image, index) => (
                            <Image
                                key={index}
                                src={image.src}
                                alt={`Gallery Image ${index + 1}`}
                                title={image.title}
                                date={image.date}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Gallery;
