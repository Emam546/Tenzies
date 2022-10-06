import React from "react";
import Die from "./Die";
import { nanoid } from "nanoid";
function randomNumber() {
    return Math.ceil(Math.random() * 6);
}
export default function App() {
    const [dice, setDice] = React.useState(allNewDice());

    function allNewDice() {
        const newDice = [];
        for (let i = 0; i < 10; i++) {
            newDice.push({
                value: randomNumber(),
                isHeld: false,
                id: nanoid(),
                setIsHeld: holdDice,
            });
        }
        return newDice;
    }
    function holdDice(id) {
        setDice((preDices) =>
            preDices.map((dice) => {
                if (dice.id === id) return { ...dice, isHeld: !dice["isHeld"] };
                return dice;
            })
        );
    }
    function newGame() {
        setDice((preDice) =>
            preDice.map((dice) => {
                return {
                    ...dice,
                    value: randomNumber(),
                    isHeld: false,
                };
            })
        );
    }
    function rollDice() {
        setDice((preDices) => {
            for (let i = 0; i < 10; i++) {
                if (!preDices[i].isHeld) preDices[i]["value"] = randomNumber();
            }
            return [...preDices];
        });
    }
    React.useEffect(() => {
        let initValue = dice[0].value;
        let state = true;
        for (let i = 0; i < dice.length; i++) {
            if (!dice[i].isHeld || dice[i].value !== initValue) {
                state = false;
                break;
            }
        }
        if (state){
            setTimeout(()=>alert("YOU WIN"),10)
        } 
    }, [dice]);
    const diceElements = dice.map((die) => <Die key={die.id} props={die} />);

    return (
        <main>
            <div className="dice-container">{diceElements}</div>
            <div className="dice-buttons">
                <button className="roll-dice" onClick={rollDice}>
                    Roll
                </button>
                <button className="roll-dice" onClick={newGame}>
                    New
                </button>
            </div>
        </main>
    );
}
