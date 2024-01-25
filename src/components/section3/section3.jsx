import { Itemsblock } from './itemsblock/itemsblock'
import { Itemsblock1 } from './itemsblock1/itemsblock1'
import './section3.scss'
import image5 from '../../image/img5.png'
import image6 from '../../image/img6.png'
import image7 from '../../image/img7.png'

export const Section3 = () => {
    return (
        <div className='section3' id='section3'>
            <div className='section3-title'>
                <h1><span>Что входит в обучение?</span></h1>
                <img src={image5} alt="" />
            </div>
            <div className='section3-items'>
                <div>
                    <Itemsblock1 text={'Вся документация для входа на WILDBERRIES. Налоговая отчетность'} />
                    <Itemsblock1 text={'Алгоритмы маркетплейса, система FBO и FBS'} />
                    <Itemsblock1 text={'Выбор и анализ актуальной ниши'} />
                    <Itemsblock1 text={'Что такое фулфилмент и что такое карго'} />
                </div>
                <Itemsblock title={1} />
            </div>
            <div className='section3-items'>
                <img src={image6} alt="" />
                <Itemsblock title={2} />
                <div>
                    <Itemsblock1 text={'Создание карточек, СЕО оптимизация (заполнение описания с ключевыми словами)'} />
                    <Itemsblock1 text={'Платная внешняя, внутренняя и бесплатная реклама'} />
                    <Itemsblock1 text={'Все о внутреннем таргете. Как запускать рекламу и не слить бюджет'} />
                    <Itemsblock1 text={'Правильный и экологичный способ для ответа на отзывы и вопросы'} />
                    <Itemsblock1 text={'Что такое рекомендации и как они влияют на продажи'} />
                    <Itemsblock1 text={'Как повышать рейтинг карточек и работать с негативными отзывами'} />
                    <Itemsblock1 text={'Связь с поддержкой Вайлдберриз'} />
                </div>
            </div>
            <div className='section3-items'>
                <div>
                    <Itemsblock1 text={'Создание поставок в Москву и в регионы РФ'} />
                    <Itemsblock1 text={'Работа с экзель документами'} />
                    <Itemsblock1 text={'Платные и бесплатные аналитические сервисы'} />
                    <Itemsblock1 text={'Работа с аналитикой и отчетами'} />
                    <Itemsblock1 text={'Систематизация работы. Как работать, чтобы не распыляться и не перегореть'} />
                    <Itemsblock1 text={'Контент: продающие фото и видео'} />
                    <Itemsblock1 text={'Ценообразование и UNIT- экономика. Регулирование цен и скидок и участие в акциях'} />
                </div>
                <div className='section3-back'>
                    <img src={image7} alt="" />
                    <Itemsblock title={3} />
                </div>
            </div>
        </div>
    )
}