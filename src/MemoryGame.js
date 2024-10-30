import React, { useState, useEffect } from "react";
import './MemoryGame.css'
import Card from './Card' 

// Card data structure
const cardData = [
    { id: 1, value: '🐶' },
    { id: 2, value: '🐱' },
    { id: 3, value: '🐭' },
    { id: 4, value: '🐹' },
    { id: 5, value: '🐰' },
    { id: 6, value: '🦊' },
    { id: 7, value: '🐻' },
    { id: 8, value: '🐼' }
];

// Sample custom hook
const useGameState = () => {
    const [cards, setCards] = useState([]);
    const [moves, setMoves] = useState(0);
    const [matches, setMatches] = useState(0);

    //flippedIndices is for checking the 2 cards Clicked
    const [flippedIndices, setFlippedIndices] = useState([]);
    //matched Indices will store all the matched card ids
    const [matchedIndices, setMatchedIndices] = useState([]);
    
    // Add game logic here
    useEffect(() => {
        const shuffledCards = [...cardData, ...cardData]
            .map(card => ({ ...card, id: `${card.id}-${Math.random()}` })) // unique IDs for shuffled cards
            .sort(() => Math.random() - 0.5);
        setCards(shuffledCards);
    }, []);

    const handleCardClick = (index) => {
        //when card clicked, check that flipped index contains only one value & flipped index doesnt have clicked index
        if(flippedIndices.length < 2 && !flippedIndices.includes(index)) {
            //adding current index with existing array
            setFlippedIndices(prev => [...prev, index])
            //incrementing moves value
            setMoves(prev => prev + 1);
        }
    };

    useEffect(() => {
        if(flippedIndices.length === 2){ // if second card is clicked the size of flippedIndices will be 2
            const [firstIndex, secondIndex] = flippedIndices // taking first and second indexes
            //Checking whether 2 symbols are equal
            if(cards[firstIndex].value === cards[secondIndex].value) {
                //Increase the match value +1
                setMatches(prev => prev + 1)
                //reset Flipped array
                setFlippedIndices([]);
                //adding new 1st and 2nd index to existing array if matched 
                setMatchedIndices(prev => [...prev, firstIndex, secondIndex])
            }else{
                // if it didnt matched set a timer for 1 second and reset the flippedIndices
                const timer = setTimeout(() => {
                    setFlippedIndices([]);
                },1000);
                return () => clearTimeout(timer);
            }
        }
    }, [flippedIndices, cards]);
    
    return {
      cards,
      moves,
      matches,
      handleCardClick,
      flippedIndices,
      matchedIndices
      // Add necessary functions
    };
};

// Sample Game component structure
const MemoryGame = () => {
    // Implement game logic here
    const { cards, moves, matches, handleCardClick, flippedIndices, matchedIndices } = useGameState();

    return (
        <div className="memory-game">
            <h2>Moves: {moves}</h2>
            <h2>Matches: {matches}</h2>
            <div className="grid">
                {cards.map((card, index) => (
                    <Card
                        key={card.id}
                        value={card.value}
                        isFlipped={flippedIndices.includes(index) || matchedIndices.includes(index)}
                        onClick={() => handleCardClick(index)}
                    />
                ))}
            </div>
        </div>
    );
};



export default MemoryGame;