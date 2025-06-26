import { Metadata } from "next";

export const servicesData: {
    iconUrl: string;
    title: string;
    description: string;
    typesOfService?: { name: string }[];  
}[] = [
    {
        iconUrl: "/book.svg",
        title: "User Documentation",
        description: "Empower users. Minimize support. Simplify adoption."
    },
    {
        iconUrl: "/gear.svg",
        title: "Technical Manual",
        description: "For tech teams. By specialists. Built for clarity."
    },
    {
        iconUrl: "/checklist.svg",
        title: "Process Documentation",
        description: "Document smarter. Operate better."
    },
    {
        iconUrl: "/network.svg",
        title: "Knowledge Base Platform",
        description: "Centralized organization's knowledge. Smarter access. Secure collaboration. Powered by AI."
    },
    {
        iconUrl: "/code.svg",
        title: "Software Development and Implementation",
        description: "Code that scales. Design that connects. Results that last. From data to deployment, we've got you."
    },
    {
        iconUrl: "/lightbulb.svg",
        title: "Advisory Services",
        description: "Strategic guidance. Operational brilliance."
    },
    {
        iconUrl: "/support.svg",
        title: "Support Services",
        description: "Your team. Our experts. Always within reach.."
    }
];

export const mainServicesData: {
    iconUrl: string;
    title: string;
    description: string;
    typesOfService?: { name: string }[]; 
}[] = [
    {
        iconUrl: "/documentation.svg",
        title: "Documentation",
        description: "Enhance user onboarding and reduce support tickets with clear training manuals, release notes, user guides, and FAQs.",
        typesOfService: [
            {
                name: "User Documentation"
            },
            {
                name: "Technical Manual"
            },
            {
                name: "Process Documentation"
            },
            {
                name: "Knowledge Base Platform"
            }
        ]
    },
    {
        iconUrl: "/consultancy.svg",
        title: "Consulting",
        description: "Guide tech users with a detailed manual covering system logic, functionality, and troubleshooting.",
        typesOfService: [
            {
                name: "Software Development and Implementation"
            },
            {
                name: "Advisory Services"
            },
            {
                name: "Support Services"
            }
        ]
    },
];

export const serviceData: Record<string, {
    description: string;
    fullDescription: string;
    imageUrl: string;
    imageAlt: string;
    width: number;
    height: number;
    whatWeOffer: {
        title: string;
        details: string;
    }[];
}> = {
    "user-documentation": {
        description: "Empower users. Minimize support. Simplify adoption.",
        fullDescription: "Great documentation is more than support — it's your product's voice. With structured accessible guides, you reduce ticket volume, elevate user confidence, and foster long-term adoption.",
        imageUrl: "/images/services/image1.webp",
        imageAlt: "image of a woman writing on her notebook whilst pointing at her tablet.",
        width: 1800,
        height: 1350,
        whatWeOffer: [
            {
                title: "Intuitive Training Manuals",
                details: "Clear, visual-first documentation that eases users into your system and drives confident usage from day one."
            },
            {
                title: "Digestible Release Notes",
                details: "Concise, well-organized updates that keep users engaged and informed without being overwhelmed."
            },
            {
                title: "Interactive User Guides & FAQs",
                details: "Step-by-step pathways that anticipate user questions and guide actions effortlessly."
            },
        ]
    },
    "technical-manual": {
        description: "For tech teams. By specialists. Built for clarity.",
        fullDescription: "From deployment to debugging, our technical manuals give your developers a living blueprint. It's clarity, continuity, and control—all in one place.",
        imageUrl: "/images/services/image2.webp",
        imageAlt: "image of a laptop open with a code editor running.",
        width: 1800,
        height: 1198,
        whatWeOffer: [
            {
                title: "Detailed System Architecture",
                details: "Comprehensive walkthroughs of backend logic, system design, and operational flow."
            },
            {
                title: "Config & Management Toolkit",
                details: "Practical guidance for setup, maintenance, and feature management."
            },
            {
                title: "Troubleshooting Frameworks",
                details: "Robust, scenario-based solutions to empower your tech team when it matters most."
            }
        ]
    },
    "process-documentation": {
        description: "Document smarter. Operate better.",
        fullDescription: "Process documentation isn't just paperwork — it's how organizations grow with precision. Our service transforms everyday operations into repeatable excellence.",
        imageUrl: "/images/services/image3.webp",
        imageAlt: "image of an engineer testing sound system.",
        width: 1280,
        height: 1919,
        whatWeOffer: [
            {
                title: "Operational Clarity",
                details: "Map out workflows with intuitive logic and structured visual representation."
            },
            {
                title: "Increased Productivity",
                details: "Standardize key processes to minimize errors and improve delivery speed."
            },
            {
                title: "Process Optimization",
                details: "Uncover bottlenecks and create space for strategic improvements."
            }
        ]
    },
    "knowledge-base-platform": {
        description: "Centralized organization's knowledge. Smarter access. Secure collaboration. Powered by AI.",
        fullDescription: "Transform scattered knowledge into a powerful ecosystem. Our AI-driven knowledge base fuels productivity, consistency, and informed decision-making.",
        imageUrl: "/images/services/image4.webp",
        imageAlt: "image of a woman sitting with a fingers interlocked, with her laptop.",
        width: 1800,
        height: 1200,
        whatWeOffer: [
            {
                title: "Centralized Search",
                details: "Instant access to indexed documentation, organized by roles and relevance."
            },
            {
                title: "Enterprise-Grade Security",
                details: "Confidently control who sees what — safeguard your IP without sacrificing access.."
            },
            {
                title: "Collaborative Environment",
                details: "Create, edit, and share knowledge effortlessly across teams."
            },
            {
                title: "Integrated Documentation Delivery",
                details: "We build and host your documentation right inside the platform."
            }
        ]
    },
    "software-development-and-implementation": {
        description: "Code that scales. Design that connects. Results that last. From data to deployment, we've got you.",
        fullDescription: "We don't just build software — we build your competitive edge. From concept to deployment, our solutions are born from collaboration and built for impact.",
        imageUrl: "/images/services/image5.webp",
        imageAlt: "image of a laptop open with a code editor running.",
        width: 1800,
        height: 1200,
        whatWeOffer: [
            {
                title: "Tailored Software Solutions",
                details: "Solution-built apps that match your unique needs and goals."
            },
            {
                title: "Scalable, Future-Ready Architecture",
                details: "Performance today. Expansion tomorrow."
            },
            {
                title: "Agile Delivery Model",
                details: "Iterative improvements that adapt with your business — not against it."
            }
        ]
    },
    "advisory-services": {
        description: "Strategic guidance. Operational brilliance.",
        fullDescription: "Whether you're scaling up or pivoting fast, expert insight turns vision into strategy. We help you build smarter from the inside out.",
        imageUrl: "/images/services/image7.webp",
        imageAlt: "closeup image of a woman placing a document on a table.",
        width: 1800,
        height: 1201,
        whatWeOffer: [
            {
                title: "Tech-Stack Alignment",
                details: "Architect solutions that move in step with your business goals."
            },
            {
                title: "Performance-Driven Reviews",
                details: "Identify inefficiencies and architect high-performing systems."
            },
            {
                title: "Best Practice Integration",
                details: "Industry benchmarks infused into every decision you make."
            }
        ]
    },
    "support-services": {
        description: "Your team. Our experts. Always within reach.",
        fullDescription: "When issues arise, proximity matters. Our local-first support model ensures that help isn't just fast—it's relevant, contextual, and human.",
        imageUrl: "/images/services/image8.webp",
        imageAlt: "image of a black headset with mouthpiece.",
        width: 1280,
        height: 853,
        whatWeOffer: [
            {
                title: "Hyper-Responsive Local Support",
                details: "Quick resolutions from experts who understand your environment."
            },
            {
                title: "Change Management Confidence",
                details: "Handle updates and statutory requirements without delays."
            },
            {
                title: "Specialist Care",
                details: "From minor fixes to critical escalations, you're in skilled hands."
            }
        ]
    },
};

export const serviceMetadata: Record<string, Metadata> = {
    "user-documentation": {
        title: "User Documentation Services | Training Manuals, FAQs & Support Content",
        description: "Minimize support requests with visual-first manuals, FAQs, and release notes—designed to drive adoption and long-term system use."
    },
    "technical-manual": {
        title: "Technical Manuals | System Architecture & Troubleshooting Guides",
        description: "Equip your developers with deep system documentation, backend logic blueprints, and scenario-based troubleshooting frameworks."
    },
    "process-documentation": {
        title: "Business Process Documentation | Workflow Mapping & Optimization",
        description: "Standardize processes with visual documentation. Increase productivity and uncover operational gaps across your business."
    },
    "knowledge-base-platform": {
        title: "AI Knowledge Base Platform | Centralized Docs & Secure Collaboration",
        description: "Build a searchable, role-based knowledge platform for your teams. Secure, AI-powered access to documentation and team learning."
    },
    "software-development-and-implementation": {
        title: "Custom Software Development & Implementation | Scalable Solutions, Seamless Rollouts",
        description: "From tailored apps and enterprise tools to secure data migrations and post-go-live support, we design, build, and deploy scalable software with agile processes — ensuring smooth, successful implementation every time."
    },
    "advisory-services": {
        title: "Business & Tech Advisory Services | Strategy, Performance, Compliance",
        description: "Get expert insights to align tech with business goals. We optimize systems for growth, efficiency, and compliance."
    },
    "support-services": {
        title: "Support Services | Trivance Technical Help & Local Expertise",
        description: "Local-first technical support for fast issue resolution, change management, and mission-critical escalations."
    }
};


