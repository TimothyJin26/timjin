import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../components/common/Preloader";
import About from "../components/About";
import Experience from "../components/Experience";
import Footer from "../components/layout/Footer";
import Chat from "../components/Chat";

const Navbar = lazy(() => import("../components/layout/Navbar"));

export default function AboutPage() {
    return (
        <>
            <Helmet>
                <title>Timothy Jin | About</title>
                <meta
                    name="description"
                    content="Software Engineer at Google"
                />
            </Helmet>
            <Suspense fallback={<Preloader />}>
                <div>
                    <Navbar />
                    <About />
                    <Experience />
                    <Chat />
                    <Footer />
                </div>
            </Suspense>
        </>
    );
}
