function Cards(): JSX.Element {
    const cards = [a,c,v,d];
      return (
        <div className="cards">
            {cards.map((card)=>(<Card key={1} card={card}/>))}
        </div>
      );
    }
    
    export default Cards;
    