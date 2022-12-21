import './intro.css'
import { useTypingText } from "./useTypingText";


export default function Intro() {
  const { word } = useTypingText(
    ["Data",'Software'],
    130,
    20
  );
  return (
    <div className='intro' id='intro'>
      <div className="leftIntro">
        <div className="imageContainer">
          <img src="assests/man.png" alt="" />
        </div>
      </div>
      <div className="rightIntro">
        <div className="wrapperIntro">
          <h2>Hi There, I'm</h2>
          <h1>Mehmet Nazliay</h1>
          <h3><span>{word}</span> Engineer</h3>
        </div>
        <a href="#portfolio" className='introWrapperA'>
          <img src="assests/down.png" alt="" className='introWrapperImg'/>
        </a>
      </div>
    </div>
  )
}