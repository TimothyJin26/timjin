import React from "react";
import Image from "./common/reusable/Image";

interface GalleryImage {
    src: string;
    span: number;
    title: string;
    date: string;
    coordinates?: string;
    camera?: string;
    lens?: string;
    shutter?: string;
    aperture?: string;
    iso?: string;
}

const Gallery: React.FC = () => {
    const images: GalleryImage[] = [
        {
            src: "/assets/images/Golden_Gate.webp",
            span: 1,
            title: "Golden Gate\nOverlook",
            date: "18/06/2024",
            coordinates: "37.804340, -122.476704",
            camera: "Canon EOS Rebel T7i",
            lens: "EF-S55-250mm ƒ4-5.6 IS STM",
            shutter: "1/80",
            aperture: "6.3",
            iso: "200",
        },
        {
            src: "/assets/images/Rose_Garden_Drone.webp",
            span: 1,
            title: "Rose Garden",
            date: "19/05/2024",
            coordinates: "49.269362, -123.256483",
            camera: "DJI Mavic Mini",
            lens: "1/2.3” CMOS 35mm f/2.8",
            shutter: "1/8",
            aperture: "2.8",
            iso: "800",
        },
        {
            src: "/assets/images/Bee.webp",
            span: 1,
            title: "Arizona\nCactus Garden",
            date: "18/06/2024",
            coordinates: "37.435892, -122.171099",
            camera: "Canon EOS Rebel T7i",
            lens: "EF-S18-55mm ƒ4-5.6 IS STM",
            shutter: "1/640",
            aperture: "5.6",
            iso: "100",
        },
        {
            src: "/assets/images/Mouse_Tank_Rd.webp",
            span: 1,
            title: "Valley of Fire\nState Park",
            date: "19/12/2024",
            coordinates: "36.449397, -114.515687",
            camera: "Canon EOS Rebel T7i",
            lens: "EF-S55-250mm ƒ4-5.6 IS STM",
            shutter: "1/250",
            aperture: "7.1",
            iso: "200",
        },
        {
            src: "/assets/images/Joshua_Tree.webp",
            span: 1,
            title: "Joshua Tree\nNational Park",
            date: "28/04/2024",
            coordinates: "34.039031, -116.195558",
            camera: "Canon EOS Rebel T7i",
            lens: "EF-S18-55mm ƒ4-5.6 IS STM",
            shutter: "1/400",
            aperture: "8",
            iso: "200",
        },
        {
            src: "/assets/images/Devils_Bunker.webp",
            span: 1,
            title: "Devil's Bunker",
            date: "14/06/2024",
            coordinates: "37.570078, -122.516173",
            camera: "Canon EOS Rebel T7i",
            lens: "EF-S55-250mm ƒ4-5.6 IS STM",
            shutter: "1/250",
            aperture: "10",
            iso: "100",
        },
        {
            src: "/assets/images/Pigeon_Point.webp",
            span: 1,
            title: "Pigeon Point\nRoad",
            date: "19/06/2024",
            coordinates: "37.182342, -122.393708",
            camera: "Canon EOS Rebel T7i",
            lens: "EF-S18-55mm ƒ4-5.6 IS STM",
            shutter: "1/200",
            aperture: "5.6",
            iso: "100",
        },
        {
            src: "/assets/images/California_St.webp",
            span: 1,
            title: "California St &\nStockton St",
            date: "18/06/2024",
            coordinates: "37.792283, -122.407427",
            camera: "Canon EOS Rebel T7i",
            lens: "EF-S18-55mm ƒ4-5.6 IS STM",
            shutter: "1/250",
            aperture: "6.3",
            iso: "100",
        },
        {
            src: "/assets/images/Santa_Monica.webp",
            span: 1,
            title: "Santa Monica",
            date: "30/04/2024",
        },
        {
            src: "/assets/images/Chevy_Bel_Air.webp",
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
                    <div className="w-5/6 mx-auto columns-4 gap-8 mt-16 pb-16">
                        {images.map((image, index) => (
                            <Image
                                key={index}
                                src={image.src}
                                alt={`Gallery Image ${index + 1}`}
                                title={image.title}
                                date={image.date}
                                coordinates={image.coordinates}
                                camera={image.camera}
                                lens={image.lens}
                                shutter={image.shutter}
                                aperture={image.aperture}
                                iso={image.iso}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Gallery;
