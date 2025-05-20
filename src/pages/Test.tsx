import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../components/common/Preloader";
import notionData from "../data/notion.json";

const Navbar = lazy(() => import("../components/layout/Navbar"));

export default function AboutPage() {
    // Map over all pages in the notionData array
    // Extract relevant info from each page
    const roles = notionData.map((item) => {
        const properties = item.properties || {};
        return {
            companyName: properties.Company?.title?.[0]?.plain_text || "Unknown Company",
            role: properties.Role?.rich_text?.[0]?.plain_text || "Unknown Role",
            location: properties.Location?.rich_text?.[0]?.plain_text || "Unknown Location",
            dates: properties.Dates?.rich_text?.[0]?.plain_text || "Unknown Dates",
            description: properties.Description?.rich_text?.[0]?.plain_text || "No description",
            skills: (properties.Skills?.multi_select || []).map(skill => skill.name).join(", ") || "None",
            id: item.id
        };
    });

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
                    <h1 className="text-3xl font-bold text-center mt-6 mb-4">
                        Experience Roles
                    </h1>
                    <div className="max-w-3xl mx-auto space-y-8">
                        {roles.map(({ id, companyName, role, location, dates, description, skills }) => (
                            <section key={id} className="p-4 border rounded-md shadow-sm">
                                <h2 className="text-xl font-semibold">{companyName}</h2>
                                <ul className="list-disc list-inside mt-2 space-y-1">
                                    <li><strong>Role:</strong> {role}</li>
                                    <li><strong>Location:</strong> {location}</li>
                                    <li><strong>Dates:</strong> {dates}</li>
                                    <li><strong>Description:</strong> {description}</li>
                                    <li><strong>Skills:</strong> {skills}</li>
                                </ul>
                            </section>
                        ))}
                    </div>
                </div>
            </Suspense>
        </>
    );
}
