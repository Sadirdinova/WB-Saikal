import './section2.scss'
import image4 from '../../image/img4.png'

export const Section2 = () => {

    return (
        <div className='section2' id='section2'>
            <div className="wrap">
                <div className="section2-items">
                    <div className='section2-img'>
                        <img src={image4} alt="" />
                    </div>
                    <div className='section2-item'>
                        <h1>Кому стоит прийти ко мне на обучение?</h1>
                        <div className='section2-text'>
                            <p>Новичкам, желающим изучить все о WILDBERRIES, выбрать нишу
                                и начать торговать на площадке с моим сопровождением до первых
                                продаж</p>
                            <hr />
                            <p>Желающим работать МЕНЕДЖЕРОМ- освоите новую профессию и
                                дополнительный заработок</p>
                            <hr />
                            <p>Действующим селлерам- консультация для увеличения продаж и
                                оборота</p>
                            <hr />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}