import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../components/common/Preloader";

const Navbar = lazy(() => import("../components/layout/Navbar"));

export default function GalleryPage() {
    return (
        <>
            <Helmet>
                <title>Tim Jin</title>
                <meta
                    name="description"
                    content="Student at the University of British Columbia"
                />
            </Helmet>
            <Suspense fallback={<Preloader />}>
                <div>
                    <Navbar />
                    <div className="bold underline text-3xl text-black">
                        Gallery Page
                    </div>
                </div>
            </Suspense>
        </>
    );
}
