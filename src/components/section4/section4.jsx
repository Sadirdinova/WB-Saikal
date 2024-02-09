import { Button } from './buttonblock/buttonblock'
import './section4.scss'
import { motion } from 'framer-motion'

export const Section4 = () => {
    return (
        <div className='section4' id='section4'>
            <div className="wrap">
                        <h1>Выбери свой тариф</h1>
                    <div className='section4-items'>
                        <motion.div
                            className='section4-text1'
                            whileHover={{ scale: 1.1 }}>
                            <h1>Базовый</h1>
                            <div>
                                <p>Индивидуальное трехдневное обучение без сопровождения</p>
                                <p>Обратная связь – 1 <br /> месяц</p>
                                <Button btn={'60 000'} />
                            </div>
                        </motion.div>
                        <motion.div
                            className='section4-text2'
                            whileHover={{ scale: 1.1 }}>
                            <h1>Бизнес</h1>
                            <div>
                                <p>Индивидуальное трехдневное обучение с сопровождением до вывода на первые продажи</p>
                                <p>Обратная связь – 3 <br /> месяца</p>
                                <p>Добавление в закрытый личный ТГ канал со всеми новинками и новостями из мира Вайлдберриз</p>
                                <Button btn={'100 000'} />
                            </div>
                        </motion.div>
                </div>
            </div>
        </div>
    )
}