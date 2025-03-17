interface ImageProps {
    src: string;
    alt: string;
    title: string;
    date: string;
}

const Image: React.FC<ImageProps> = ({ src, alt, title, date }) => {
    return (
        <div className="mb-4 break-inside-avoid-column">
            <img src={src} alt={alt} className="w-full" />
            <div className="text-sm text-left mt-1 ml-1 font-lekton text-[#B8B8B8]">
                {date}
            </div>
        </div>
    );
};

export default Image;
