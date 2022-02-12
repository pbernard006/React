import { useState } from "react";
import Card from "./components/Card";
import Input from "./components/Input";


function App() {

  const colors = ['♥', '♦', '♣', '♠'];

  const [cards, setCards] = useState([]);
  
  const onAdd = (value) => {
    const id = (cards[cards.length - 1]?.id || 0) + 1 ;
    setCards([...cards, {id: id, value, color: colors[id % colors.length]}])
  }

  const onDelete = (id) => () => {
    setCards(cards.filter(card => card.id !== id))
  }
  return (
    <div className="App">
      <Input onAdd={onAdd}/>
      <ul>
        {cards.map((card) => (
          <li key={card.id}>
            <Card
              value={card.value} 
              color={card.color} 
              onDelete={onDelete(card.id)}/>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
