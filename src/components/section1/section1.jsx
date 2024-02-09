import './section1.scss'
import image1 from '../../image/img1.png'
import image2 from '../../image/img2.png'
import image3 from '../../image/img3.png'
import phone from '../../image/phone.png'
import wa from '../../image/wa.png'
import instagram from '../../image/instagram.png'
import { motion } from 'framer-motion'
import React from 'react'

export const Section1 = () => {

    return (
        <div className='section1'>
                <div className="wrap">
                    <div className='section1-item'>
                        <div>
                            <h1>WILDBERRIES <br /> от А до Я</h1>
                            <p>Продажи от 100 000, рейтинг 5* с первого <br /> месяца. <br />
                                Знаю как продвигать Ваш бренд и как выбрать <br /> денежную нишу.</p>
                            <div className='section1-span'>
                                <span>WILDBERRIES ~ WILDBERRIES ~ WILDBERRIES ~ WILDBERRIES ~ WILDBERRIES ~</span>
                            </div>
                        </div>
                        <div className='section1-img'>
                            <motion.div
                                whileHover={{ scale: 0.9 }}>
                                <img className='section1-img1' src={image1} alt="" />
                                <img className='section1-img2' src={image2} alt="" />
                                <img className='section1-img3' src={image3} alt="" />
                            </motion.div>
                            <div className='section1-image'>
                                    <a target='_blank' href="tel:+996507092973"><img src={phone} alt="" /></a>
                                    <a target='_blank' href="https://api.whatsapp.com/send?phone=996507092973"><img src={wa} alt="" /></a>
                                    <a target='_blank' href="https://www.instagram.com/medina01.01.01/"><img src={instagram} alt="" /></a>
                            </div>
                        </div>
                    </div>
                    <div className='section1-items'>
                        <div className='section1-box1'>
                            <h1>30+</h1>
                            <p>Lorem Ipsum has been</p>
                        </div>
                        <div className='section1-box2'>
                            <h1>200k+</h1>
                            <p>Lorem Ipsum has been</p>
                        </div>
                        <div>
                            <h1>500+</h1>
                            <p>Lorem Ipsum has been</p>
                        </div>
                    </div>
                </div>
        </div>
    )
} 