import { useState } from "react"
import { Card } from "./Card"

function Cards () {
    const [cards,setCards] = useState([
        {id:1, image: './img/css.png', stat: ""},
        {id:1, image: './img/css.png', stat: ""},
        {id:2, image: './img/angular.png', stat: ""},
        {id:2, image: './img/angular.png', stat: ""},
        {id:3, image: './img/html.png', stat: ""},
        {id:3, image: './img/html.png', stat: ""},
        {id:4, image: './img/js.png', stat: ""},
        {id:4, image: './img/js.png', stat: ""},
        {id:5, image: './img/nodejs.png', stat: ""},
        {id:5, image: './img/nodejs.png', stat: ""},
        {id:6, image: './img/vue.png', stat: ""},
        {id:6, image: './img/vue.png', stat: ""},
        {id:7, image: './img/scss.png', stat: ""},
        {id:7, image: './img/scss.png', stat: ""},
        {id:8, image: './img/react.png', stat: ""},
        {id:8, image: './img/react.png', stat: ""}
    ].sort(() => Math.random() - 0.5))
    const[prev,setPrev]= useState(-1)

    function check(current) {
        if(cards[current].id === cards[prev].id) {
            cards[current].stat = 'correct'
            cards[prev].stat =  'correct'
            setCards([...cards])
            setPrev(-1)
        } else {
            cards[current].stat = 'wrong'
            cards[prev].stat = 'wrong'
            setCards([...cards])
            setTimeout(() => {
            cards[current].stat = ''
            cards[prev].stat = ''
            setCards([...cards])
            setPrev(-1)
            }, 1000)
        }

    }

   function handleClick(id) {
    if(prev === -1) {
        cards[id].stat = 'active'
        setCards([...cards])
        setPrev(id)
     } else {
        check(id)
     }
    }
   return (
    <div className="container">
      {cards.map((card,index) => {
        return (
            <Card item={card} key={index} id={index} handleClick={handleClick}/>
        )
      })}
    </div>
   )
}

export {Cards}