import './footer.scss'
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { motion } from 'framer-motion'

export const Footer = () => {
    return (
        <div className='footer'>
            <div className="wrap">
                <div className="column">
                    <div>
                        <h1>Остались вопросы?</h1>
                        <p>Тогда жду тебя</p>
                    </div>
                    <div className='footer-icons'>
                        <motion.div
                            whileHover={{ scale: 1.1 }}>
                            <a target='_blank' href="https://api.whatsapp.com/send?phone=996507092973"><FaWhatsapp size={50} /></a>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.1 }}>
                            <a target='_blank' href="https://www.instagram.com/medina01.01.01/"><FaInstagram size={50} /></a>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}