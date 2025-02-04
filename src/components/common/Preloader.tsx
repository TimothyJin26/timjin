import { ClipLoader } from "react-spinners";

export default function Preloader() {
    return (
        <>
            <div className="flex items-center justify-center w-screen h-screen">
                <ClipLoader
                    color={"#243540"}
                    size={50}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
            </div>
        </>
    );
}
