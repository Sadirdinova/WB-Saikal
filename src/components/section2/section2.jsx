import './section2.scss'
import image4 from '../../image/img4.png'

export const Section2 = () => {
    
    return (
        <div className='section2' id='section2'>
            <div>
                <img src={image4} alt="" />
            </div>
            <div>
                <h1>Кому стоит прийти ко мне на обучение?</h1>
                <p>Новичкам, желающим изучить все о WILDBERRIES, выбрать нишу
                 и начать торговать на площадке с моим сопровождением до первых
                  продаж</p>
                <p>Желающим работать МЕНЕДЖЕРОМ- освоите новую профессию и
                 дополнительный заработок</p>
                <p>Действующим селлерам- консультация для увеличения продаж и
                 оборота</p>
            </div>
        </div>
    )
}