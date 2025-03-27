import { Metadata } from "next";

export const productsData: {
    iconUrl: string;
    title: string;
    description: string;
    typesOfService?: { name: string }[];  
}[] = [
    {
        iconUrl: "/business_center.svg",
        title: "Odoo",
        description: "An open-source ERP solution that streamlines business processes with seamless integration and customization."
    },
    {
        iconUrl: "/account_balance_wallet.svg",
        title: "Metafold Pension Solution",
        description: "A comprehensive pension administration platform that simplifies registration, exit management, and Pencom requirements."
    },
    {
        iconUrl: "/calculate.svg",
        title: "Metafold Accounting",
        description: "A complete General Ledger system that handles financial operations, reporting, and bank management with ease."
    },
    {
        iconUrl: "/trending_up.svg",
        title: "Metafold Investment",
        description: "An asset management solution designed to manage multi-investments across various asset classes."
    },
    {
        iconUrl: "/admin_panel_settings.svg",
        title: "Metafold Pension Admin",
        description: "A powerful tool for managing funds, contributions, payments, and customer relationships efficiently."
    },
    {
        iconUrl: "/person_celebrate.svg",
        title: "Metafold Customer",
        description: "A client management solution that handles KYC, statement generation, and customer portals seamlessly."
    }
];

export const productData: Record<string, {
    description: string;
    fullDescription: string;
    imageUrl: string;
    width: number;
    height: number;
    imageAlt: string;
    whatWeOffer: {
        title: string;
        details: string;
    }[];
}> = {
    "odoo": {
        description: "An open-source ERP solution that streamlines business processes with seamless integration and customization.",
        fullDescription: "Odoo is an open source ERP app that simplifies your business processes end to end and empowers you to deliver effectively and efficiently. It's highly customizable, integrates perfectly and enables you to have all your businesses in one platform.",
        imageUrl: "/images/products/image1.webp",
        imageAlt: "image showing an overview of applications available on odoo.",
        width: 1341,
        height: 604,
        whatWeOffer: [
            { title: "Customizable Solutions", details: "Tailor the ERP system to suit your specific business needs." },
            { title: "Seamless Integration", details: "Integrates perfectly with third-party tools and services." },
            { title: "Centralized Platform", details: "Manage multiple business processes from one unified platform." }
        ]
    },
    "metafold-pension-solution": {
        description: "A comprehensive pension administration platform that simplifies registration, exit management, and Pencom requirements.",
        fullDescription: "Metafold is a comprehensive pension solution that caters for all aspects of pension administration from registration to exit management and all Pencom requirements. The interface is user friendly and simple to learn. Reports are generated in seconds and interface with any third party is seamless.",
        imageUrl: "/images/products/image2.webp",
        imageAlt: "image of a black elderly man giving a thumbs up with a writing pen in hand and a notebook in front of him.",
        width: 1280,
        height: 855,
        whatWeOffer: [
            { title: "Pension Management", details: "Streamline pension registration, contributions, and benefits." },
            { title: "Compliance Support", details: "Ensure smooth compliance with Pencom regulations." },
            { title: "Fast Reporting", details: "Generate detailed reports efficiently in seconds." }
        ]
    },
    "metafold-accounting": {
        description: "A complete General Ledger system that handles financial operations, reporting, and bank management with ease.",
        fullDescription: "Our Accounting module is a complete General Ledger system that supports all day-to-day financial operations like Accounts Receivables and Payables, Income, Interface with Pencom, Reconciliation, Bank management, Reports, etc.",
        imageUrl: "/images/products/image3.webp",
        imageAlt: "image showing a calculator, a financial report and writing pen.",
        width: 1280,
        height: 754,
        whatWeOffer: [
            { title: "General Ledger", details: "Comprehensive financial tracking and reporting." },
            { title: "Bank Management", details: "Manage accounts, transactions, and reconciliations." },
            { title: "Pencom Interface", details: "Seamlessly integrates with Pencom for streamlined reporting." }
        ]
    },
    "metafold-investment": {
        description: "An asset management solution designed to manage multi-investments across various asset classes.",
        fullDescription: "Our Asset management solution adopts the accounts multibook and effectively manages multi investments in multiple asset classes.",
        imageUrl: "/images/products/image4.webp",
        imageAlt: "image showing a piece of paper, writing pen, and an upwards charting graph on tablet.",
        width: 1280,
        height: 960,
        whatWeOffer: [
            { title: "Asset Management", details: "Manage investments across multiple asset classes efficiently." },
            { title: "Multi-book Accounting", details: "Track multiple investment streams accurately." },
            { title: "Performance Insights", details: "Analyze and optimize investment performance." }
        ]
    },
    "metafold-pension-admin": {
        description: "A powerful tool for managing funds, contributions, payments, and customer relationships efficiently.",
        fullDescription: "The Admin module manages different kinds of funds, Registration, contributions and Benefits, Payments. It also includes a robust Customer Relationship Management system.",
        imageUrl: "/images/products/image5.webp",
        imageAlt: "image of an elderly black man working on his laptop",
        width: 1279,
        height: 854,
        whatWeOffer: [
            { title: "Fund Management", details: "Manage various fund types and their growth." },
            { title: "Contribution Tracking", details: "Easily monitor and manage contributions and payments." },
            { title: "CRM Integration", details: "Maintain strong customer relationships with built-in CRM features." }
        ]
    },
    "metafold-customer": {
        description: "A client management solution that handles KYC, statement generation, and customer portals seamlessly.",
        fullDescription: "The module manages your clients (corporate and individual) end to end, from KYC to statement generation (singly and bulk), access portal, etc.",
        imageUrl: "/images/products/image6.webp",
        imageAlt: "image of a black man on a phone call whilst working on his tablet.",
        width: 1280,
        height: 853,
        whatWeOffer: [
            { title: "Client Management", details: "Manage client records, KYC, and interactions efficiently." },
            { title: "Statement Generation", details: "Generate individual or bulk statements with ease." },
            { title: "Customer Portal", details: "Provide clients with a self-service portal for improved accessibility." }
        ]
    }
};

export const productMetadata: Record<string, Metadata> = {
    "odoo": {
        title: "Odoo ERP Solution - Trivance Technologies",
        description: "Streamline business processes with Odoo's powerful, open-source ERP solution designed for seamless integration and customization."
    },
    "metafold-pension-solution": {
        title: "Metafold Pension Solution - Trivance Technologies",
        description: "Simplify pension administration with Metafold Pension Solution, managing registration, exit processes, and Pencom requirements."
    },
    "metafold-accounting": {
        title: "Metafold Accounting - Trivance Technologies",
        description: "A complete General Ledger system for efficient financial operations, reporting, and bank management."
    },
    "metafold-investment": {
        title: "Metafold Investment - Trivance Technologies",
        description: "Manage multi-investments across various asset classes with Metafold Investment’s powerful asset management features."
    },
    "metafold-pension-admin": {
        title: "Metafold Pension Admin - Trivance Technologies",
        description: "Manage funds, contributions, payments, and customer relationships efficiently with Metafold Pension Admin."
    },
    "metafold-customer": {
        title: "Metafold Customer - Trivance Technologies",
        description: "Handle KYC, statement generation, and customer portals seamlessly with Metafold Customer."
    }
};


