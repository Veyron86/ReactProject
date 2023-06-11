// import { useState } from "react";
import {useState} from 'react';

interface TagType {
  name: string;
  description: string;
}

// tutaj definiujemy jakie parametry przyjmuje TagsList
//     interface LicznikPropsType {
//     tytul: string;

// }
// export const Licznik = ({tytul} : LicznikPropsType) => {
//     const [liczba, setNumber] = useState<number>(0)

//     const increaseNumber = () => { 
//       setNumber((poprzedniStan) => poprzedniStan + 1)
//     }

//     const decreaseNumber = () => {
//       setNumber((poprzedniStan) => poprzedniStan - 1)
//     }

// interface LicznikPropsType {
//   tytul: string;
// }

// export const Licznik = ({tytul} : LicznikPropsType) => {
    
//   const [number, setNumber] = useState<number>(43);

//   const increaseNumber = () => setNumber((poprzedniStan) => poprzedniStan + 1);
//   const decreaseNumber = () => setNumber((poprzedniStan) => poprzedniStan -1);

// interface LicznikPropsType {
//   tytul: string;
// }

// export const Licznik = ({tytul} : LicznikPropsType) => {
//   const [number, setNumber] = useState<number>(0);

//   const increaseNumber = () => setNumber((poprzedniStan) => poprzedniStan + 1);
//   const decreaseNumber = () => setNumber((poprzedniStan) => poprzedniStan -1);

// return (
//   <div>
//     <h1>{tytul}</h1>
//     <h2>{number}</h2>
//     <button onClick={() => setNumber(0)}>Zeruj liczbę</button>
//     <button onClick={increaseNumber}> + </button>
//     <button onClick={decreaseNumber}> - </button>
//   </div>
// )

interface LicznikPropsType {
  tytul: string;
}

export const Licznik = ({tytul} : LicznikPropsType) => {
    const [number, setNumber] = useState<number>(0);

    const increaseNumber = () => setNumber((poprzedniStan) => poprzedniStan + 1);
    const decreaseNumber = () => setNumber((poprzedniStan) => poprzedniStan - 1); 


return (
  <div>
    <h1>{tytul}</h1>
    <h2>{number}</h2>
    <button onClick={increaseNumber}>+</button>
    <button onClick={decreaseNumber}>-</button>
  </div>
)

}
// export const Licznik = ({tytul} : LicznikPropsType) => {
//   const [number, setNumber] = useState<number>(0);

//   // let liczba = 0;
//   const increaseNumber = () => setNumber((poprzedniStan) => poprzedniStan + 1);
//   const decreaseNumber = () => setNumber((poprzedniStan) => poprzedniStan - 1);

// export const Licznik = ({tytul}: LicznikPropsType) => {
  // const [liczba, setLiczba] = useState<number>(0) /* <> do ustawiania typu używamy gdy chcemy użyć funkcji, która może przyjmować 
  // różne typy, a my możemy wybrac jaki typ przyjmuje (teplate type) */
  // let liczba = 5;

  // wrap line do zawijania linii

  // const zwiekszLicznik = () => {setLiczba((poprzedniStan) => poprzedniStan + 1 )}
  // const zmniejszLicznik = () => {setLiczba((poprzedniStan) => poprzedniStan - 1)}
  
  // return (
  //   <div>
  //     <h1 className="title">{tytul}</h1>
  //     <h2>{number}</h2>
  //     <button onClick={() => {setNumber(43)}}> ustaw na 43 </button>
  //     <button onClick={increaseNumber}> + </button>
  //     <button onClick={decreaseNumber}> - </button>
  //   </div>
  // );

  // return (
  //   <div>
  //     <h1 className="title">{tytul}</h1>
  //     <h2>{number}</h2>
  //     {/* <button onClick={() => setNumber(43)}>Ustaw na 43</button> */}
  //     <button onClick={increaseNumber}> + </button>
  //     <button onClick={decreaseNumber}> - </button>
  //   </div>
  // )


// export default Licznik;   // eksport domyślny
