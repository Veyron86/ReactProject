import {useState} from 'react';
interface LicznikPropsType {
    name: string;
}

export const LicznikTestowy = ({name}: LicznikPropsType) => {

    const [number, setNumber] = useState<number>(0);

    const increaseNumber = () => setNumber((previousNumber) => previousNumber + 1);
    const decreaseNumber = () => setNumber((previousNumber) => previousNumber -1);

    return (
        <div>
            <h1>{name}</h1>
            <h2>{number}</h2>
            <button onClick={increaseNumber}>+</button>
            <button onClick={decreaseNumber}>-</button>
        </div>
    )
}