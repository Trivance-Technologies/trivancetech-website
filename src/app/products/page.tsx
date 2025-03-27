import { Metadata } from "next";
import Products from "./products";

export const metadata: Metadata = {
    title: "Our Products - Trivance Technologies",
    description: "Discover powerful solutions like Odoo ERP, Metafold Accounting, and Metafold Pension to enhance your business operations.",
  };

export default function Page() {
    return <Products />;
}