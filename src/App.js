import './App.css';
import fog from './imgs/fog.png'
import cloud from './imgs/cloudy.png'
import rain from './imgs/rain.png'
import sun from './imgs/sun.png'

function App() {

    const data = [
        {
            time: "morning",
            temperature: "+10",
            fallout: "Туманно",
            imgPath: fog
        },
        {
            time: "day",
            temperature: "+15",
            fallout: "Солнечно",
            imgPath: sun
        },
        {
            time: "evening",
            temperature: "+5",
            fallout: "Пасмурно",
            imgPath: cloud
        },
        {
            time: "night",
            temperature: "0",
            fallout: "Дождливо",
            imgPath: rain
        }
    ]


    return (
        <div className="App">
            <div className="card-list">

                {data.map(card => (
                    <div className="card">
                        <div className="time">
                            {card.time}
                        </div>
                        <div className="temperature">
                            {card.temperature}
                        </div>
                        <div className="fallout">
                            {card.fallout}
                        </div>
                        <img className="icon" src={card.imgPath} alt="Погодная иконка"/>
                    </div>
                ))}

            </div>
        </div>
    );
}

export default App;