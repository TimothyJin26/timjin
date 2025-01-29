import { ClimbingBoxLoader } from "react-spinners";

export default function Preloader() {
    return (
        <>
            <div className="flex items-center justify-center w-screen h-screen">
                <ClimbingBoxLoader
                    color={"#243540"}
                    size={20}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
            </div>
        </>
    );
}
