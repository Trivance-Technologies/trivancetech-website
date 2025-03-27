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
        description: "Enhance user onboarding and reduce support tickets with clear training manuals, release notes, user guides, and FAQs."
    },
    {
        iconUrl: "/gear.svg",
        title: "Technical Manual",
        description: "Guide tech users with a detailed manual covering system logic, functionality, and troubleshooting."
    },
    {
        iconUrl: "/checklist.svg",
        title: "Process Documentation",
        description: "Improve clarity and optimize operations with clear and effective process documentation."
    },
    {
        iconUrl: "/network.svg",
        title: "Knowledge Base Platform",
        description: "Centralize your organization's knowledge with an AI-powered platform for secure access and collaboration."
    },
    {
        iconUrl: "/code.svg",
        title: "Software Development",
        description: "Empowering your business with tailored software solutions designed to enhance performance, scalability, and user experience."
    },
    {
        iconUrl: "/build.svg",
        title: "Implementation Services",
        description: "We guide you through the entire implementation process, from data migration to final deployment."
    },
    {
        iconUrl: "/lightbulb.svg",
        title: "Advisory Services",
        description: "Get expert guidance on optimizing your technology stack to achieve better performance and efficiency."
    },
    {
        iconUrl: "/support.svg",
        title: "Support Services",
        description: "Our support is fully local, ensuring fast response times and personalized assistance."
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
                name: "Software Development"
            },
            {
                name: "Implementation Services"
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
        description: "Enhance user onboarding and reduce support tickets with clear training manuals, release notes, user guides, and FAQs.",
        fullDescription: "An effective user manual is very vital in a solution adoption. This not only reduces your support tickets but also enhances user onboarding on the system. Our Training manuals, Release Notes, User guide and FAQs give a yearning to come back experience of the solution, provide clear information and how to surmount challenges on the solution.",
        imageUrl: "/images/services/image1.webp",
        imageAlt: "image of a woman writing on her notebook whilst looking at her tablet.",
        width: 1280,
        height: 1920,
        whatWeOffer: [
            {
                title: "Comprehensive Training Manuals",
                details: "Detailed guides that simplify system adoption, helping users understand features and navigate challenges effortlessly."
            },
            {
                title: "Clear Release Notes",
                details: "Summarized updates that inform users about new features, enhancements, and bug fixes to improve understanding and engagement."
            },
            {
                title: "User-Friendly Guides",
                details: "Step-by-step instructions that provide clarity on product usage, ensuring a seamless onboarding experience."
            },
        ]
    },
    "technical-manual": {
        description: "Guide tech users with a detailed manual covering system logic, functionality, and troubleshooting.",
        fullDescription: "Reach out to us to build a comprehensive Technical manual that would detail your solution or system inner workings, logic and functionality and guide the Techies and Users through the management, configuration, and testing of the solution. It serves as an essential resource during product development, maintenance and troubleshooting.",
        imageUrl: "/images/services/image2.webp",
        imageAlt: "image of a page of a book on a Quick Tour section on using the PageMaker app.",
        width: 1920,
        height: 1440,
        whatWeOffer: [
            {
                title: "System Logic Explanation",
                details: "Outlines the system’s architecture, logic, and functionality."
            },
            {
                title: "Management Guide",
                details: "Provides guidance on system configuration, management, and testing."
            },
            {
                title: "Troubleshooting Support",
                details: "Acts as a vital reference for resolving technical issues and maintenance."
            }
        ]
    },
    "process-documentation": {
        description: "Improve clarity and optimize operations with clear and effective process documentation.",
        fullDescription: "Proper Process documentation is very crucial in achieving success in various departments of an organization. Our process documentation service will help bring more clarity to procedures and general operations' effectiveness and optimization.",
        imageUrl: "/images/services/image3.webp",
        imageAlt: "image of a woman writing on a notebook with her other hand on her laptop whilst looking at the notebook.",
        width: 1280,
        height: 855,
        whatWeOffer: [
            {
                title: "Improved Clarity",
                details: "Helps teams understand operational processes."
            },
            {
                title: "Boosted Efficiency",
                details: "Ensures streamlined procedures for improved productivity."
            },
            {
                title: "Enhanced Optimization",
                details: "Identifies opportunities to refine and improve processes."
            }
        ]
    },
    "knowledge-base-platform": {
        description: "Centralize your organization's knowledge with an AI-powered platform for secure access and collaboration.",
        fullDescription: "Do you have all your documents in place already? We can transform them into a centralized AI-Powered knowledge platform accessible to your team and other relevant users from anywhere or device based on required access. It provides security for your organization's knowledge asset and fosters team collaboration. Our documentation services are also delivered on this All-in-one knowledge base platform.",
        imageUrl: "/images/services/image4.webp",
        imageAlt: "image of books on a bookshelf.",
        width: 1280,
        height: 855,
        whatWeOffer: [
            {
                title: "Centralized Access",
                details: "Teams can securely retrieve information from anywhere."
            },
            {
                title: "Enhanced Security",
                details: "Protects your organization's knowledge assets."
            },
            {
                title: "Promotes Collaboration",
                details: "Encourages teamwork by sharing knowledge in a unified platform."
            },
            {
                title: "All-in-One Solution",
                details: "Documentation services are integrated seamlessly within the platform."
            }
        ]
    },
    "software-development": {
        description: "Empowering your business with tailored software solutions designed to enhance performance, scalability, and user experience.",
        fullDescription: "We specialize in creating custom software solutions tailored to your business needs. From concept to deployment, our expert developers work with you to build scalable, secure, and high-performance applications that drive results.",
        imageUrl: "/images/services/image5.webp",
        imageAlt: "image showing only a man's hand coding on his laptop.",
        width: 1280,
        height: 848,
        whatWeOffer: [
            {
                title: "Custom Solutions",
                details: "We design and develop software that aligns perfectly with your unique business requirements."
            },
            {
                title: "Scalable Architecture",
                details: "Our solutions are built to grow with your business, ensuring long-term efficiency and performance."
            },
            {
                title: "Agile Development",
                details: "We follow agile methodologies to deliver iterative improvements, ensuring your software evolves with changing needs."
            }
        ]
    },
    "implementation-services": {
        description: "We guide you through the entire implementation process, from data migration to final deployment.",
        fullDescription: "We work with you to manage the implementation process, from data migration through to final deployment.",
        imageUrl: "/images/services/image6.webp",
        imageAlt: "image of a woman writing on some sticky notes placed on a transparent board.",
        width: 1280,
        height: 853,
        whatWeOffer: [
            {
                title: "Seamless Data Migration",
                details: "Ensures your data is transferred securely and accurately with minimal downtime."
            },
            {
                title: "Deployment Assistance",
                details: "Provides expert support to ensure a smooth and successful deployment process."
            },
            {
                title: "Post-Launch Guidance",
                details: "Offers continued support to help your team adapt and maximize the new system's potential."
            }
        ]
    },
    "advisory-services": {
        description: "Get expert guidance on optimizing your technology stack to achieve better performance and efficiency.",
        fullDescription: "Do you need advice on any aspect of your technology stack? We've got you covered.",
        imageUrl: "/images/services/image7.webp",
        imageAlt: "image of a woman in an office listening to another woman talk.",
        width: 1280,
        height: 1920,
        whatWeOffer: [
            {
                title: "Technology Strategy",
                details: "Align your IT strategy with your business goals for sustainable growth."
            },
            {
                title: "Architecture Review",
                details: "Ensure your system architecture is scalable, secure, and efficient."
            },
            {
                title: "Best Practices Guidance",
                details: "Implement industry best practices to enhance development and deployment processes."
            }
        ]
    },
    "support-services": {
        description: "Local support you can rely on, ensuring quick responses to critical updates and changes.",
        fullDescription: "Our support is 100% local. Turnaround time for important statutory changes is kept to a minimum.",
        imageUrl: "/images/services/image8.webp",
        imageAlt: "image of a black man and woman with headphones in an office, with the girl noting on her notebook whilst looking at her monitor.",
        width: 1280,
        height: 853,
        whatWeOffer: [
            {
                title: "Local Support",
                details: "Our support is fully local, ensuring fast response times and personalized assistance."
            },
            {
                title: "Rapid Response",
                details: "We prioritize urgent statutory changes to minimize delays and disruptions."
            },
            {
                title: "Expert Guidance",
                details: "Our local specialists provide in-depth knowledge and tailored solutions."
            }
        ]
    },
};

export const serviceMetadata: Record<string, Metadata> = {
    "user-documentation": {
        title: "User Documentation - Trivance Technologies",
        description: "Streamline user onboarding and reduce support inquiries with comprehensive training manuals, release notes, user guides, and FAQs."
    },
    "technical-manual": {
        title: "Technical Manual - Trivance Technologies",
        description: "Empower technical users with detailed manuals that explain system logic, functionality, and troubleshooting steps."
    },
    "process-documentation": {
        title: "Process Documentation - Trivance Technologies",
        description: "Improve operational clarity and efficiency with well-structured process documentation tailored for your organization."
    },
    "knowledge-base-platform": {
        title: "Knowledge Base Platform - Trivance Technologies",
        description: "Centralize your organization's knowledge with a secure, AI-powered platform for collaboration and information sharing."
    }
};


