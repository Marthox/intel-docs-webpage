import "@styles/reactiveInnerNavbar.css";

import { useState } from "react";

const InnerNavbar = ({ data }) => {
    const [innerNavbarCategoryContent, setInnerNavbarCategoryContent] =
        useState(0);

    return (
        <>
            <nav className="reactive-inner-navbar">
                {data.map((category, index) => {
                    const {
                        fields: { title, url },
                    } = category;
                    return (
                        <button
                            key={`${category.sys.id}${index}`}
                            onClick={() => setInnerNavbarCategoryContent(index)}
                        >
                            <a href={url} className="cta">
                                {title}
                            </a>
                        </button>
                    );
                })}
            </nav>
            <div className="reactive-inner-navbar-container">
                {data[innerNavbarCategoryContent].fields.cardCta.map((cta) => {
                    return (
                        <div className="cta-card" key={cta.id}>
                            <img
                                src={cta?.fields?.cardImage?.fields?.file?.url}
                            />
                            <button
                                onClick={() =>
                                    (window.location.href = cta.fields.url)
                                }
                            >
                                <span className="cta">{cta.fields.text}</span>
                            </button>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default InnerNavbar;
