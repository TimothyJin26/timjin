import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../components/common/Preloader";
import Gallery from "../components/Gallery";

const Navbar = lazy(() => import("../components/layout/Navbar"));

export default function GalleryPage() {
    return (
        <>
            <Helmet>
                <title>Tim Jin | Gallery</title>
                <meta
                    name="description"
                    content="Student at the University of British Columbia"
                />
            </Helmet>
            <Suspense fallback={<Preloader />}>
                <div>
                    <Navbar />
                    <Gallery />
                </div>
            </Suspense>
        </>
    );
}
