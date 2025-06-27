
# 📘 Trivanace Tech Website

Welcome to the Trivanace Tech website repository! This documentation explains the project setup, tools used, and how you can run and develop the site. Whether you’re a developer or a non‑technical team member, this guide is for you.

---

## 📁 Project Directory Structure

-   **public**  
    Static assets such as images, fonts, and icons

-   **src**  
    Main source code for the application

    -   **app**  
        Next.js App Router folder containing routes and layout logic

    -   **components**  
        Reusable React UI components

    -   **context**  
        React Contexts for global state management

    -   **data**  
        Static/mock data and configuration

        -   `bodyHeaderData.tsx`
        -   `contactDetails.tsx`
        -   `productsData.tsx`
        -   `servicesData.tsx`

    -   **libs**  
        Utility functions and external API logic


---

## 🚀 Live Site & Dashboards

- **Company Website**: [http://trivancetech.com/](http://trivancetech.com/)  
- **Strapi Backend (API endpoint)**: [https://wealthy-power-26376c166d.strapiapp.com/](https://wealthy-power-26376c166d.strapiapp.com/)  
- **Strapi Cloud Dashboard**: [https://cloud.strapi.io/](https://cloud.strapi.io/)  
  > 🛠️ Log in via GitHub or company Gmail  
- **EmailJS Dashboard**: [https://dashboard.emailjs.com/admin](https://dashboard.emailjs.com/admin)  
- **Netlify Dashboard**: [https://app.netlify.com/sites/trivancetech/overview](https://app.netlify.com/sites/trivancetech/overview)  

---

## 🧰 Project Overview

This repository powers the official Trivancetech website, built with a modern stack:

- **Next.js** – React-based framework for building web pages  
- **Tailwind CSS** – Utility-first styling for responsive and clean design  
- **Framer Motion** – Used for animations across the site
- **Next-Sitemap** – For generating website sitemaps for Next.js applications  
- **EmailJS** – Handles "Contact Us" form submissions to the CEO's email  
- **Strapi** – Headless CMS powering the blog and content/images  
- **Netlify** – Hosts frontend and manages deployments  
- **Bluehost** – Domain registrar; DNS points to Netlify  

Any future domain-related configuration should happen through Netlify. 

For other packages used in the project that weren't listed above, please refer to or visit the package.json file of this repo.

---

## 💻 Frontend: Run Locally

1. **Clone** this repository  
2. **Install dependencies**  
   ```bash
   npm install
   ```  
3. **Add environment variables**  
   - Request `.env.local` from the CEO (contains API keys, EmailJS IDs, Strapi URL, etc.)  
   - Place the file in the root directory  
4. **Start development server**  
   ```bash
   npm run dev
   ```  
5. Open your browser to `http://localhost:3000`

---

## 🗄️ Backend: Strapi (Blog & Images)

Strapi powers the blog and stores client logos.

1. **Clone** the Strapi backend, which is a separate repo in this same organisation  
2. **Install dependencies**  
   ```bash
   npm install
   ```  
3. **Configure environment**  
   - Use `.env` or a Strapi-specific file (provided by the CEO)  
4. **Run Strapi**  
   ```bash
   npm run develop
   ```
5. Open your browser to `http://localhost:1337/admin`. This is mostly the endpoint that will be used by the server.
6. Access hosted admin at: `https://wealthy-power-26376c166d.strapiapp.com/admin`

---

## 🎯 Development Workflow

### Frontend  
- Pages built with **Next.js**  
- Styled using **Tailwind CSS**  
- Animations via **Framer Motion**  
- Contact form powered by **EmailJS**

### Content Management  
- Log in to the Strapi admin to create/edit blog posts and upload images  
- Articles and logos update in real-time on the website
- It will be nice to trigger a redeploy of the website on Netlify anytime a new article is uploaded. This will help with generating a new sitemap that will have the new blog page.

### Deployment  
- Frontend auto-deploys via Netlify on `main` branch merges
- Domain managed via Bluehost DNS, pointing to Netlify  
- For any new domain or tool integration, update via the Netlify dashboard

---

## 📞 Need Help?

- **Access issues**: Contact CEO for `.env.local` or login credentials  
- **Frontend bugs**: Troubleshoot in `pages/` or `components/` folders
- **Website Data Update**: Update the data in the `data/` folders. The file names and the field names of these data are self-explanatory.
- **Blog/Strapi issues**: Use the Strapi admin to adjust content or check API connectivity, especially if the usage limit for the month hasn't been reached.

---

## ✅ Summary

- **Stack**: Next.js, TailwindCSS, Framer Motion, EmailJS, Strapi  
- **Hosting**: Frontend on Netlify; backend on Strapi Cloud  
- **Domain**: Registered on Bluehost; routed via Netlify  
- **Local Dev**:
  - Frontend: `npm install` + `npm run dev`
  - Strapi: `npm install` + `npm run develop`
- **Config/secrets**: Provided via `.env.local` by CEO

Thank you for contributing to Trivancetech! If you need help with setup, customization, or features, don’t hesitate to ask! 🚀
