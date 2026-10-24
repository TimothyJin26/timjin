import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../components/common/Preloader";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Footer from "../components/layout/Footer";
import Chat from "../components/Chat";

const Navbar = lazy(() => import("../components/layout/Navbar"));

export default function HomePage() {
    return (
        <>
            <Helmet>
                <title>Timothy Jin</title>
                <meta
                    name="description"
                    content="Software Engineer at Google"
                />
            </Helmet>
            <Suspense fallback={<Preloader />}>
                <div>
                    <Navbar />
                    <Hero />
                    <About />
                    <Experience />
                    <Chat />
                    <Footer />
                </div>
            </Suspense>
        </>
    );
}
