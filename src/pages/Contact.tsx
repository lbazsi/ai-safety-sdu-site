import { useState } from "react";
import { Calendar, Instagram, Mail } from "lucide-react";
import {
  SOCIAL_LINKS,
  contactEmail,
  contactLocation,
  teamContacts,
} from "../content/siteData";
import { FacebookIcon, WhatsAppIcon } from "../components/BrandIcons";

type ContactFormState = {
  name: string;
  email: string;
  message: string;
};

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormState>({
    name: "",
    email: "",
    message: "",
  });
  const [newsletterEmail, setNewsletterEmail] = useState("");

  const handleContactSubmit = async () => {
    if (formData.name && formData.email && formData.message) {
      try {
        const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            service_id: "service_jtstqdb",
            template_id: "template_ba4zexl",
            user_id: "XNNeVYHQQpXho8fms",
            template_params: {
              from_name: formData.name,
              from_email: formData.email,
              message: formData.message,
            },
          }),
        });

        if (response.ok) {
          alert("Thank you for your message! We'll get back to you soon.");
          setFormData({ name: "", email: "", message: "" });
        } else {
          alert(
            "Sorry, there was an error sending your message. Please try again or email us directly.",
          );
        }
      } catch (error) {
        console.error("Error:", error);
        alert(
          "Sorry, there was an error sending your message. Please try again or email us directly.",
        );
      }
    }
  };

  const handleNewsletterSubmit = () => {
    if (newsletterEmail) {
      alert("Thank you for subscribing to our newsletter!");
      setNewsletterEmail("");
    }
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight mb-12 text-center">Contact us</h1>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Contact Form</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2 text-zinc-800">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 bg-white border border-zinc-300 rounded-lg focus:outline-none focus:border-zinc-950"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-zinc-800">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 bg-white border border-zinc-300 rounded-lg focus:outline-none focus:border-zinc-950"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-zinc-800">Message</label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2 bg-white border border-zinc-300 rounded-lg focus:outline-none focus:border-zinc-950"
                />
              </div>
              <button
                onClick={handleContactSubmit}
                className="w-full bg-zinc-950 text-stone-50 px-6 py-3 rounded-lg font-semibold hover:bg-zinc-800 transition-colors"
              >
                Send Message
              </button>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-6">Connect With Us</h2>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-zinc-900" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-zinc-700">{contactEmail}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Calendar className="w-6 h-6 text-zinc-900" />
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-zinc-700">{contactLocation}</p>
                </div>
              </div>

              <div className="pt-6 border-t border-zinc-200">
                <p className="font-medium mb-4">Team Contacts</p>
                <div className="space-y-4">
                  {teamContacts.map((contact) => (
                    <div
                      key={contact.email}
                      className="bg-white p-4 rounded-lg border border-zinc-200"
                    >
                      <p className="font-medium text-zinc-950 mb-1">{contact.name}</p>
                      <p className="text-sm text-zinc-700">{contact.email}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6">
                <p className="font-medium mb-4 text-center">Join Our Community</p>
                <div className="flex justify-center gap-4">
                  <a
                    href={SOCIAL_LINKS.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white rounded-lg border border-zinc-200 flex items-center justify-center hover:border-zinc-400 transition-colors"
                    aria-label="WhatsApp"
                  >
                    <WhatsAppIcon className="w-5 h-5 text-zinc-900" />
                  </a>
                  <a
                    href={SOCIAL_LINKS.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white rounded-lg border border-zinc-200 flex items-center justify-center hover:border-zinc-400 transition-colors"
                    aria-label="Facebook"
                  >
                    <FacebookIcon className="w-5 h-5 text-zinc-900" />
                  </a>
                  <a
                    href={SOCIAL_LINKS.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white rounded-lg border border-zinc-200 flex items-center justify-center hover:border-zinc-400 transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5 text-zinc-900" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-16 border-t border-zinc-200">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-6">Stay Updated</h2>
            <p className="text-lg text-zinc-700 mb-8">
              Subscribe to our newsletter for updates on events, research opportunities, and AI safety news.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white border border-zinc-300 rounded-lg focus:outline-none focus:border-zinc-950"
              />
              <button
                onClick={handleNewsletterSubmit}
                className="bg-zinc-950 text-stone-50 px-8 py-3 rounded-lg font-semibold hover:bg-zinc-800 transition-colors"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
