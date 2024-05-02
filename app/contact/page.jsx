import ContactForm from "@/components/contact/ContactForm";

export async function generateMetadata({ params, searchParams }, parent) {
  return { title: `iTech - Contact` };
}

export const Contact = () => {
  return (
    <>
      <ContactForm />;
    </>
  );
};

export default Contact;
