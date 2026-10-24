import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../components/common/Preloader";
import Projects from "../components/Projects";

const Navbar = lazy(() => import("../components/layout/Navbar"));

export default function ProjectsPage() {
    return (
        <>
            <Helmet>
                <title>Timothy Jin | Projects</title>
                <meta
                    name="description"
                    content="Software Engineer at Google"
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
