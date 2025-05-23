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
        description: "A flexible open-source ERP designed to unify enterprise functions — from HR to finance — ideal for SMEs, and regulatory-driven organizations."
    },
    {
        iconUrl: "/account_balance_wallet.svg",
        title: "Metafold Pension Solution",
        description: "Digitize the entire retirement journey for seamless, simplified experiences, while meeting all Pencom standards."
    },
    {
        iconUrl: "/calculate.svg",
        title: "Metafold Accounting",
        description: "A robust General Ledger platform built for precise financial tracking, regulatory compliance, and integration across systems"
    },
    {
        iconUrl: "/trending_up.svg",
        title: "Metafold Investment",
        description: "A robust investment platform supporting Custodians, Trustees, and Asset Managers in tracking multi-asset portfolios with precision—ideal for retirement and institutional finance."
    },
    {
        iconUrl: "/admin_panel_settings.svg",
        title: "Metafold Pension Admin",
        description: "A centralized administration hub for managing pension fund flows, contribution histories, disbursements, and client communications."
    },
    {
        iconUrl: "/person_celebrate.svg",
        title: "Metafold Customer",
        description: "A client management solution that streamlines KYC, statements, and portal access for seamless user experiences."
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
        description: "A flexible open-source ERP designed to unify enterprise functions — from HR to finance — ideal for SMEs, and regulatory-driven organizations.",
        fullDescription: "Odoo unifies critical business functions. It provides efficiency across departments and gives each module agility with full control over workflows and data.",
        imageUrl: "/images/products/image1.webp",
        imageAlt: "image showing an overview of applications available on odoo.",
        width: 1341,
        height: 604,
        whatWeOffer: [
            { title: "Customizable Solutions", details: "Customizable Solutions that tailor every module — from payroll to procurement— to your specialized need." },
            { title: "Seamless Integration", details: "Seamless Integration with third-party tools and services: Compliance APIs, financial systems, and CRMs." },
            { title: "Centralized Platform", details: "Manage HR tasks, financial reports, inventory etc., from one platform: All operations are centralized." }
        ]
    },
    "metafold-pension-solution": {
        description: "Digitize the entire retirement journey for seamless, simplified experiences, while meeting all Pencom standards.",
        fullDescription: "Metafold enables PFAs to run efficient, compliant, and client-focused pension services. It simplifies the complexities of regulation, allowing teams to focus on member satisfaction and transparency.",
        imageUrl: "/images/products/image2.webp",
        imageAlt: "image showing the metafold pension solution modules.",
        width: 975,
        height: 456,
        whatWeOffer: [
            { title: "Pension Management", details: "Pension Management through end-to-end lifecycle tracking: Streamlining onboarding, contributions, and benefits." },
            { title: "Compliance Support", details: "Built-in Pencom reporting and validation tools reduce manual errors and ensure regulatory alignment at every stage." },
            { title: "Fast Reporting", details: "Generate dynamic and Pencom-compliant reports in seconds—whether by scheme, fund, or employer." }
        ]
    },
    "metafold-accounting": {
        description: "A robust General Ledger platform built for precise financial tracking, regulatory compliance, and integration across systems",
        fullDescription: "Metafold Accounting delivers financial accuracy through a complete General Ledger system—integrating compliance, receivables, payables, and reconciliations. It brings structure to daily operations while simplifying back-office workflows.",
        imageUrl: "/images/products/image3.webp",
        imageAlt: "image showing the metafold accounting module.",
        width: 975,
        height: 456,
        whatWeOffer: [
            { title: "General Ledger", details: "Comprehensive financial tracking and reporting." },
            { title: "Streamlines Cash Flow Visibility", details: "Bank Management with multi-bank setup, reconciliations, and payment automation." },
            { title: "Supports Compliance", details: "Reporting with configurable formats that can align with external regulatory platforms." }
        ]
    },
    "metafold-investment": {
        description: "A robust investment platform supporting Custodians, Trustees, and Asset Managers in tracking multi-asset portfolios with precision—ideal for retirement and institutional finance.",
        fullDescription: "Built for institutions managing complex portfolios, Metafold Investment streamlines oversight, reporting, and growth strategy.",
        imageUrl: "/images/products/image4.webp",
        imageAlt: "image showing a piece of paper, writing pen, and an upwards charting graph on tablet.",
        width: 1280,
        height: 960,
        whatWeOffer: [
            { title: "Asset Management", details: "Monitor bonds, equities, real estate, and alternative assets — all in one dashboard." },
            { title: "Multi-book Accounting", details: "Run multiple investment books concurrently: Compare fund strategies, and generate audit-ready financials." },
            { title: "Built-in analytics", details: "Show fund performance trends, benchmarks, and growth projections." }
        ]
    },
    "metafold-pension-admin": {
        description: "A centralized administration hub for managing pension fund flows, contribution histories, disbursements, and client communications.",
        fullDescription: "A unified system for PFAs to manage funds, contributions, benefits, and client relationships with full transparency.",
        imageUrl: "/images/products/image5.webp",
        imageAlt: "image showing metadfold pension admin module.",
        width: 975,
        height: 420,
        whatWeOffer: [
            { title: "Fund Management", details: "Support for RSA, gratuity, legacy funds, and multi-employer schemes with real-time NAV tracking." },
            { title: "Contribution Tracking", details: "Automatically records employer/employee contributions, handles arrears, and generates batch validations." },
            { title: "CRM Integration", details: "Improve client servicing with automated communication, inquiry tracking, and SLA monitoring." }
        ]
    },
    "metafold-customer": {
        description: "A client management solution that streamlines KYC, statements, and portal access for seamless user experiences.",
        fullDescription: "The module facilitates secure delivery, transparent, and accessible client services. From KYC to real-time statements, it streamlines engagement and reduces admin load.",
        imageUrl: "/images/products/image6.webp",
        imageAlt: "image showing metafold customer module.",
        width: 975,
        height: 430,
        whatWeOffer: [
            { title: "Client Management", details: "Centralize KYC, client records, and communication for better oversight." },
            { title: "Statement Generation", details: "Create and issue at scale, ready for download or distribution." },
            { title: "Customer Portal", details: "Empower clients with secure access to balances, histories, and updates — improving transparency and reducing service load." }
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


