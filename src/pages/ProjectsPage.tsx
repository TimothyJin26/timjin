import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../components/common/Preloader";
import Projects from "../components/Projects";

const Navbar = lazy(() => import("../components/layout/Navbar"));

export default function ProjectsPage() {
    return (
        <>
            <Helmet>
                <title>Tim Jin | Projects</title>
                <meta
                    name="description"
                    content="Student at the University of British Columbia"
                />
            </Helmet>
            <Suspense fallback={<Preloader />}>
                <div>
                    <Navbar />
                    <Projects />
                </div>
            </Suspense>
        </>
    );
}
