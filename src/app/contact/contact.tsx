'use client'
import ContactDetailsCard from '@/components/contact_details_card';
import { contactDetails } from '@/data/contactDetails';
import emailjs from "emailjs-com";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { toast } from 'sonner';

const Contact = () => {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        subject: "",
        email: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                {
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    phoneNumber: formData.phoneNumber,
                    subject: formData.subject,
                    email: formData.email,
                    message: formData.message,
                },
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            );
            setFormData({         
                firstName: "",
                lastName: "",
                phoneNumber: "",
                subject: "",
                email: "",
                message: "",
            });
            toast.success("Success! Your message has been received.");
        } catch (err) {
            toast.error(`We couldn't send your message. Please try later. ${err}`);
        } 
    };

    return (
        <>
        <section className='w-full py-[3.75rem] overflow-hidden'>
            <div className='px-[1rem] 1sm:px-[1.5rem] w-full'>
                <div className='w-full grid grid-cols-1 3sm:grid-cols-2 1sm:grid-cols-4 1sm:max-w-[67.25rem] mx-auto gap-[3rem] 1sm:gap-0'>
                    {contactDetails.map((detail, index) => (
                        <ContactDetailsCard 
                            key={index} 
                            iconUrl={detail.iconUrl} 
                            title={detail.title} 
                            detail={detail.detail} 
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
        <section className='w-full py-[3.75rem] bg-secondary overflow-hidden'>
            <div className='w-full px-[1rem] 1sm:px-[1.5rem]'>
                <div className='w-full max-w-[67.25rem] mx-auto'>
                    <motion.div className='flex flex-col 2sm:flex-row gap-0 2sm:gap-[1.5rem] w-full justify-between h-fit'
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{
                            duration: 1,
                            ease: "easeInOut",
                        }}
                        viewport={{ once: true }}  
                        style={{ willChange: "transform, opacity" }}
                    >
                        <div className='w-full'>
                            <Image width={1279} height={853} src='/images/image3.webp' alt='someone calling' className='object-cover h-full'/>
                        </div>
                        <div className='flex flex-col p-[2.5rem] w-full 2sm:max-w-[40rem] bg-white'>
                            <h2 className='tracking-[2px] uppercase font-medium text-[1rem]/[1.25rem] text-primary opacity-[.6]'>Business consulting</h2>
                            <h3 className='pt-[1.25rem] pb-[1.5rem] tracking-[-1px] text-[2.5rem]/[3rem] font-semibold text-primary'>Get in touch</h3>
                            <form onSubmit={handleSubmit} className='flex flex-col w-full gap-[1.25rem]'>
                                <div className='flex flex-col 2sm:flex-row gap-[1.25rem]'>
                                    <div className='flex flex-col w-full'>
                                        <label htmlFor="firstName" className='mb-[.25rem] capitalize font-medium text-primary text-[1rem]/[1.5rem]'>first name</label>
                                        <input value={formData.firstName} onChange={handleChange} required id="firstName" name="firstName" placeholder='First name' type="text" className="border py-[.56rem] px-[1rem] w-full border-primary-100 outline-0 h-[2.5rem] text-[14px] text-other focus:border-other" />
                                    </div>
                                    <div className='flex flex-col w-full'>
                                        <label htmlFor="lastName" className='mb-[.25rem] capitalize font-medium text-primary text-[1rem]/[1.5rem]'>last name</label>
                                        <input value={formData.lastName} onChange={handleChange} required id="lastName" name="lastName" placeholder='Last name' type="text" className="border py-[.56rem] px-[1rem] w-full border-primary-100 outline-0 h-[2.5rem] text-[14px] text-other focus:border-other" />
                                    </div>
                                </div>
                                <div className='flex flex-col 2sm:flex-row gap-[1.25rem]'>
                                    <div className='flex flex-col w-full'>
                                        <label htmlFor="phoneNumber" className='mb-[.25rem] capitalize font-medium text-primary text-[1rem]/[1.5rem]'>your phone</label>
                                        <input value={formData.phoneNumber} onChange={handleChange} required id="phoneNumber" name="phoneNumber" placeholder='Your phone' type="tel" className="border py-[.56rem] px-[1rem] w-full border-primary-100 outline-0 h-[2.5rem] text-[14px] text-other focus:border-other" />
                                    </div>
                                    <div className='flex flex-col w-full'>
                                        <label htmlFor="email" className='mb-[.25rem] capitalize font-medium text-primary text-[1rem]/[1.5rem]'>your email</label>
                                        <input value={formData.email} onChange={handleChange} required id="email" name="email" placeholder='Your email' type="email" className="border py-[.56rem] px-[1rem] w-full border-primary-100 outline-0 h-[2.5rem] text-[14px] text-other focus:border-other" />
                                    </div>
                                </div>
                                <div className='flex flex-col w-full'>
                                    <label htmlFor="subject" className='mb-[.25rem] capitalize font-medium text-primary text-[1rem]/[1.5rem]'>Subject</label>
                                    <input value={formData.subject} onChange={handleChange} required id="subject" name="subject" placeholder='Example text' type="text" className="border py-[.56rem] px-[1rem] w-full border-primary-100 outline-0 h-[2.5rem] text-[14px] text-other focus:border-other" />
                                </div>
                                <div className='flex flex-col w-full'>
                                    <label htmlFor="message" className='mb-[.25rem] capitalize font-medium text-primary text-[1rem]/[1.5rem]'>Your Message</label>
                                    <input value={formData.message} onChange={handleChange} required id="message" name="message" placeholder='Your Message' type="text" className="border py-[.56rem] px-[1rem] w-full border-primary-100 outline-0 h-[2.5rem] text-[14px] text-other focus:border-other" />
                                </div>
                                <button type='submit' className='transition-all duration-[400ms] border-[2px] hover:bg-primary py-[.625rem] 2sm:py-[.875rem] px-[1.875rem] text-[1.125rem]/[1.375rem] my-auto text-black hover:text-brand bg-brand border-brand hover:border-primary hover:cursor-pointer font-semibold w-fit'>
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Contact
