import React from "react";

const footerData = [
    {
        heading: "Platform",
        items: [
            {
                title: "AI Risk Intelligence Engine",
                content:
                    "Core AI system that evaluates financial health, detects anomalies, and generates explainable credit risk scores."
            },
            {
                title: "Credit Decision Modules",
                content:
                    "Decision tools that calculate loan eligibility, limits, and risk-adjusted pricing using financial signals."
            },
            {
                title: "Financial Data Connectors",
                content:
                    "Automated ingestion of GST filings, bank statements, MCA records, and financial documents."
            },
            {
                title: "Compliance & Audit Monitoring",
                content:
                    "Tracks regulatory compliance and audit logs required for lending transparency."
            },
            {
                title: "Enterprise Security",
                content:
                    "Secure infrastructure protecting financial data with encryption and strict access control."
            }
        ]
    },
    {
        heading: "Company",
        items: [
            {
                title: "About IntelliCredit",
                content:
                    "Learn how IntelliCredit is transforming corporate credit analysis."
            },
            {
                title: "AI Research",
                content:
                    "Explore the machine learning systems behind IntelliCredit."
            },
            {
                title: "Technology & Innovation",
                content:
                    "Architecture and engineering behind the platform."
            },
            {
                title: "Careers",
                content:
                    "Join the team building financial intelligence platforms."
            },
            {
                title: "Contact",
                content:
                    "Reach the IntelliCredit team for demos or partnerships."
            },
            {
                title: "Privacy Policy",
                content:
                    "How we protect and handle financial data."
            }
        ]
    }
];

const Footer = () => {
    return (
        <footer className="py-16 md:py-24 px-6 lg:px-12 bg-white/40 border-t border-forest-text/10 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                    {/* Brand Section */}
                    <div className="lg:col-span-5 flex flex-col gap-6">
                        <div className="flex items-center gap-3">
                            <img
                                src="assets/logo.png"
                                alt="IntelliCredit Logo"
                                className="w-8 h-8 object-contain"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).src = "https://upload.wikimedia.org/wikipedia/commons/1/1f/IntelliCredit.png";
                                }}
                            />
                            <span className="font-bold text-xl tracking-tight text-forest-text">IntelliCredit</span>
                        </div>
                        <p className="text-olive-detail text-sm leading-relaxed max-w-sm font-medium">
                            Enterprise Credit Intelligence Platform.<br />
                            Accelerating lending decisions with institutional-grade AI risk models and automated insights.
                        </p>
                    </div>

                    {/* Links Section */}
                    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-12 lg:gap-8">
                        {footerData.map((section) => (
                            <div key={section.heading}>
                                <h4 className="font-bold mb-8 uppercase text-xs tracking-[0.2em] text-forest-text/40">
                                    {section.heading}
                                </h4>

                                <ul className="space-y-4 text-sm font-semibold text-olive-detail">
                                    {section.items.map((item) => (
                                        <li key={item.title}>
                                            <a
                                                title={item.content}
                                                className="hover:text-forest-text transition-colors"
                                            >
                                                {item.title}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-8 md:pt-12 border-t border-forest-text/10 mt-16 md:mt-24">
                    <p className="text-xs text-olive-detail/60 uppercase tracking-[0.2em] font-bold text-center md:text-left w-full">
                        © 2026 IntelliCredit AI. Enterprise Decision Intelligence Platform.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;