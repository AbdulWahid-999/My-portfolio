import Wrapper from "../../components/wrapper/Wrapper";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <Wrapper>
      <section className="bg-[#074643] h-screen text-white flex flex-col items-center justify-center text-center p-6">
        <h1 className="text-xl font-bold my-5 text-yellow-400 sm:text-2xl md:text-3xl lg:text-3xl">Let’s Connect!</h1>
        <p className="text-md mb-4 font-semibold sm:text-xl md:text-2xl lg:text-2xl">
          Have a project in mind? Let’s build something great together!
        </p>
        <p className="text-md mb-4 font-semibold sm:text-lg md:text-xl lg:text-xl">Contact Me on social media</p>

        {/* Social Media Links */}
        <div className="flex space-x-6 text-xl mb-8 sm:text-xl md:text-2xl ">
          <a
            href="https://www.instagram.com/im_goku_xd"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition duration-300 text-[#E4405F]"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/abdul-wahid-8724152b3?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B4bKAUACIQAudBCzJHcGs%2Fg%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition duration-300 text-[#0A66C2]"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://wa.me/03103898237" // Replace with your WhatsApp link
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition duration-300 text-[#25D366]"
          >
            <FaWhatsapp />
          </a>
        </div>

        {/* Brief Introduction */}
        <p className="text-md mb-5 font-semibold sm:text-lg md:text-xl lg:text-xl">
          I&apos;m passionate about crafting user-friendly interfaces and exploring new technologies.
        </p>
      </section>
    </Wrapper>
  );
}
