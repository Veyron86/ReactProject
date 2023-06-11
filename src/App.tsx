import "./App.css"
import TagList from './components/TagList';
import {Licznik} from './components/LicznikTest';
import {Weather} from './components/Weather';



// function App() {
//   return <TagList />;
// }
// tutaj tworzymy typ Tag
interface TagType {
  name: string;
  description: string;
}

const jedenTag: TagType =  {
  name: "div",
  description: "Element blokowy służący do grupowania innych elementów HTML.",
}

// const sumaLiczb = (a: number, b: number) => {
//   return a + b
// } 

// const r: string = 'domy'
// const x: number = 45
// const y: number = 78

// console.log(sumaLiczb(r, x))
// console.log(sumaLiczb(y, x))

// let abcd: string;
// abcd = sumaLiczb(23, 45)

// let tablicaLiczb: number[];
// tablicaLiczb = [ 34, 34]


const naszTytul = 'Nasza lista tagów ze zmiennej'
const paragraf = 'To jest testowy paragraf'
const element = "Span to element liniowy"

const naszeTagi: TagType[] = [
  {
    name: "div", // 'div', `div`
    description: "Element blokowy służący do grupowania innych elementów HTML.",
  },
  {
    name: "span",
    description:
      "Element liniowy służący do wstawiania fragmentów tekstu lub innych elementów HTML wewnątrz bloku.",
  },
  { name: "a", description: "Element służący do tworzenia hiperłączy." },
  { name: "img", description: "Element służący do wstawiania obrazów." },
];

const imie = 'Adam'

const App = () => (
  <>
  <Licznik tytul={"Test komponentu"}/>
  <h1 className="h1tytul">Tytul na index</h1>
  {/* <TagList tytul={paragraf} tags={naszeTagi}  />}
   <TagList numb={123}/>} */}
  <TagList tytu={naszeTagi[0].description} numb={123} title={paragraf} czyPokazacZdjecie={true}/>
  {/* <Licznik tytul={"Paragraf"}/> */}
  <Weather />
  
  {/* <TagList tytul={paragraf} />} */}
  </>

)


export default App;
