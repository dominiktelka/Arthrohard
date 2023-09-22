import React, { Suspense, useEffect, useState, useMemo } from "react";
import { Section } from "./Section.jsx";
import { Section2 } from "./Section2.jsx";

export const MainPage = () => {
    const [activeSectionId, setActiveSectionId] = useState(null);
    const [loadSection3, setLoadSection3] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const section1 = document.getElementById("section1");
            const section2 = document.getElementById("section2");
            const section3 = document.getElementById("section3");

            if (section1 && isElementInViewport(section1)) {
                setActiveSectionId("section1");
            } else if (section2 && isElementInViewport(section2)) {
                setActiveSectionId("section2");
            } else if (section3 && isElementInViewport(section3)) {
                setActiveSectionId("section3");
            }

            if (section2 && isElementAtEnd(section2)) {
                setLoadSection3(true);
            }
        };

        const isElementInViewport = (element) => {
            const rect = element.getBoundingClientRect();
            return rect.top < window.innerHeight && rect.bottom >= 0;
        };

        const isElementAtEnd = (element) => {
            const rect = element.getBoundingClientRect();
            return rect.bottom <= window.innerHeight;
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const LazyLoadedSection3 = useMemo(() => {
        return React.lazy(() => {
            return new Promise(resolve => setTimeout(resolve, 100)).then(
                () =>
                    loadSection3
                        ? import("./Section3")
                        : Promise.reject(new Error())
            );
        });
    }, [loadSection3]);

    return (
        <>
            <header>
                <h2 className="arthroTitle">
                    arthro<span className="hard">hard</span>
                </h2>
                <ul className="ulHeader">
                    <li className={activeSectionId === "section1" ? "active" : ""}>
                        co nas wyróżnia
                    </li>
                    <li className={activeSectionId === "section2" ? "active" : ""}>skład</li>
                    <li className={activeSectionId === "section3" ? "active" : ""}>
                        <b>produkty</b>
                    </li>
                </ul>
            </header>
            <main className="mainPage">
                <Section id="section1" />
                <Section2 id="section2" />
                <Suspense fallback={null}>
                    {loadSection3 ? <LazyLoadedSection3 id="section3" /> : null}
                </Suspense>
            </main>
        </>
    );
};
