import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../components/common/Preloader";
import Gallery from "../components/Gallery";

const Navbar = lazy(() => import("../components/layout/Navbar"));

export default function GalleryPage() {
    return (
        <>
            <Helmet>
                <title>Timothy Jin | Gallery</title>
                <meta
                    name="description"
                    content="Software Engineer at Google"
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
