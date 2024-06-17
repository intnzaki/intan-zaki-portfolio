import { CONTACT } from "../constants"
import { motion } from "framer-motion"
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl">Contact Me</motion.h2>

      <div className="text-center tracking-tight">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-4">{CONTACT.address}</motion.p>

        {/* <motion.p 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="my-4">{CONTACT.phoneNo}</motion.p> */}
        {/* <a href="#" className="border-b">{CONTACT.email}</a> */}

        <div className="flex justify-center gap-4 my-8 text-2xl">
          <a href="https://www.linkedin.com/in/intanzaki" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="intnzaki19@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
    // flex justify-center gap-4 my-8 text-2xl
  )
}

export default Contact