import { useState } from "react";
import "./taglist.css";

interface TagType {
  name: string;
  description: string;
}

// tutaj definiujemy jakie parametry przyjmuje TagsList
interface TagListPropsType {
  tytu: string;
  numb: number;
  title: string;
  czyPokazacZdjecie: boolean;
  // ten znak zapytania znaczy, ze ta property jest nieobowiązkowa
  tags?: TagType[];
  // tytulH2: string
  // można przekazać number, boolean, string,
  // czyPokazacZdjecie: boolean
}

// const TagList = ({pies, mojeImie, wiek}) => {
// const TagList = (props: TagListPropsType) => {
// props = {
//   id: '123',
//   name: 'jfjdj'
// }
// const {id, name} = props;

const TagList = ({tytu, numb, title, czyPokazacZdjecie, tags}: TagListPropsType) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleTagClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // props = {
  //   tytul = 'to co mu podamy'
  //     tags = []
  // }

  // console.log("Nasze props z góry:", props);

  const naszeWewnetrzneTagi = tags || [];
  const naszeWewnetrzneTagi35 = tags || [];
  const naszeWewnetrzneTagirozne = tags || [];

  return (
    <div className="tag-list">
      <h1 className="title">{title}</h1>
      <p>Hello {tytu}</p>
      <h2>{numb}</h2>
      <p>{czyPokazacZdjecie}</p>

      {/* <h2 className="title">{props.tytulH2}</h2> */}
      {/* <span>{props.text}</span> */}

      <ul>
        {naszeWewnetrzneTagi.map((tag, index) => (
          <li key={tag.name} className="tag">
            <div className="tag-header" onClick={() => handleTagClick(index)}>
              <h2>{tag.name}</h2>
              <span>{activeIndex === index ? "Ukryj" : "Rozwiń"}</span>
            </div>
            {activeIndex === index && (
              <div
                className={`tag-description ${
                  activeIndex === index ? "active" : ""
                }`}
              >
                {" "}
                <p>{tag.description}</p>
                <a
                  href={`https://developer.mozilla.org/en-US/docs/Web/HTML/Element/${tag.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pokaż więcej
                </a>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TagList;
