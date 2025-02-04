import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../components/common/Preloader";
import Hero from "../components/Hero";

const Navbar = lazy(() => import("../components/layout/Navbar"));
const About = lazy(() => import("../components/About"));

export default function HomePage() {
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
                    <Hero />
                    <About />
                </div>
            </Suspense>
        </>
    );
}
