export default function Gallery() {
    const images = [
        {
            src: "/assets/images/IMG_9598.jpg",
            span: 1,
        },
        {
            src: "/assets/images/IMG_9598.jpg",
            span: 1,
        },
        {
            src: "/assets/images/IMG_9598.jpg",
            span: 2,
        },
        {
            src: "/assets/images/IMG_9598.jpg",
            span: 2,
        },
        {
            src: "/assets/images/IMG_9598.jpg",
            span: 1,
        },
        {
            src: "/assets/images/IMG_9598.jpg",
            span: 1,
        },
        {
            src: "/assets/images/IMG_9598.jpg",
            span: 2,
        },
        {
            src: "/assets/images/IMG_9598.jpg",
            span: 1,
        },
    ];

    return (
        <>
            <div className="h-screen flex">
                <div>
                    <div className="text-4xl font-bold text-[#301000] pt-32 ml-24">
                        Gallery 🔧
                    </div>
                    <div className="w-5/6 mx-auto grid grid-cols-4 gap-8 mt-16">
                        {images.map((image, index) => (
                            <div
                                key={index}
                                className={`col-span-${image.span}`}
                            >
                                <img
                                    src={image.src}
                                    alt={`Gallery Image ${index + 1}`}
                                    className="w-full h-auto shadow-lg"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
