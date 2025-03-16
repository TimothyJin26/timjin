import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../components/common/Preloader";
import About from "../components/About";
import Experience from "../components/Experience";

const Navbar = lazy(() => import("../components/layout/Navbar"));

export default function AboutPage() {
    return (
        <>
            <Helmet>
                <title>Tim Jin | About</title>
                <meta
                    name="description"
                    content="Student at the University of British Columbia"
                />
            </Helmet>
            <Suspense fallback={<Preloader />}>
                <div>
                    <Navbar />
                    <About />
                    <Experience />
                </div>
            </Suspense>
        </>
    );
}
