export default function Timeline() {
    const timelinePoints = [
        { id: 1, label: "Amazon", date: "2020" },
        { id: 2, label: "Stanford Emergency Medicine", date: "2021" },
        { id: 3, label: "Rivian", date: "2022" },
        { id: 4, label: "UBC Cloud Innovation Centre", date: "2023" },
    ];

    return (
        <div className="w-5/6 md:w-2/3 relative">
            {/* Vertical Timeline Line */}
            <div
                className="absolute left-1/2 border-l-4 border-[#301000] rounded-full transform -translate-x-1/2"
                style={{
                    top: "-1.5rem", // Overflows a little at the top
                    height: `calc(${
                        (timelinePoints.length - 1) * 6
                    }rem - 1rem)`, // Adjusts height of the timeline line
                }}
            ></div>

            {/* Timeline Items */}
            {timelinePoints.map((point, index) => (
                <div
                    key={point.id}
                    className="relative flex items-center mb-12 last:mb-0"
                    style={{
                        top: `${(index / (timelinePoints.length - 1)) * 100}%`, // Ensure proper vertical spacing
                    }}
                >
                    {/* Word on the Left, aligned to the right */}
                    <div className="text-xl font-inria font-medium cursor-pointer mr-6 w-full">
                        {point.label}
                    </div>

                    {/* Circle on the Vertical Line */}
                    <div
                        className="w-6 h-6 rounded-full absolute left-1/2 transform -translate-x-1/2"
                        style={{
                            backgroundColor: "#FFFDFA", // Custom hex color (replace with your desired color)
                            border: "4px solid #301000", // Outline with custom color (replace with your desired border color)
                        }}
                    ></div>
                </div>
            ))}
        </div>
    );
}
