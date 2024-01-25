import { Button } from '../section4/buttonblock/buttonblock'
import './section5.scss'
import image8 from '../../image/img8.png'

export const Section5 = () => {
    return (
        <div className='section5'>
            <div className='section5-items'>
                <h1>Консультация для действующих поставщиков. <br />
                    Как повысить продажи и выйти на новый уровень</h1>
                <h2>Групповые обучения, Бизнес завтраки, мастермайнды устраиваю по запросу. Для этого не пропускайте сториз</h2>
            </div>
            <div className='section5-item'>
                <div>
                    <div>
                        <p>Длительность: 2 часа</p>
                        <p>-Работаю с Вашим запросом</p>
                        <p>- Аудит Вашей карточки</p>
                        <p>- Анализ конкурентов</p>
                        <p>- Создаю план- стратегию для дальнейшей продуктивной работы</p>
                    </div>
                    <Button btn={'10 000'} />
                </div>
                <img src={image8} alt="" />
            </div>
        </div>
    )
}