import './header.scss'

export const Header = () => {
    const handlerScroll1 =()=> {
        const el = document.getElementById("section2")
        el.scrollIntoView({behavior:"smooth" , block:"start"})
    }
    const handlerScroll2 =()=> {
        const el = document.getElementById("section3")
        el.scrollIntoView({behavior:"smooth" , block:"start"})
    }
    const handlerScroll3 =()=> {
        const el = document.getElementById("section4")
        el.scrollIntoView({behavior:"smooth" , block:"start"})
    }
    return (
          <div className='header'>
            <div>
                <h1>WB Saikal</h1>
            </div>
            <ul>
                <li onClick={()=>handlerScroll1()}>Кому стоит прийти ко мне на обучение?</li>
                <li onClick={()=>handlerScroll2()}>Обучение</li>
                <li onClick={()=> handlerScroll3()}>Тарифы</li>
            </ul>
            <div>
                <a href="tel:+996507092973"><button>Связаться</button></a>
            </div>
        </div>
    )
}