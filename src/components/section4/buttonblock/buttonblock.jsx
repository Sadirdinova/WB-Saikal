import './buttonblock.scss'

export const Button = ({ btn }) => {
    return (
        <div className='buttonblock'>
            <button>
                {btn} сом
            </button>
        </div>
    )
}