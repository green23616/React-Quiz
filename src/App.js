import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Detail from './pages/Detail';
import { useEffect, useState } from 'react';
import Quizlist from './components/Quizlist';

function App() {

  const [userName, setUserName] = useState('')
  const [QuizList, setQuizList] = useState(Quizlist)
  const quiz = [...Quizlist]
  const [selected, setSelected] = useState(12)
  const [quizCnt, setQuizCnt] = useState(Quizlist.length)
  const [typeTxt, setTypeTxt] = useState('전체')

  const ChangeEvent = (data) => {
    const classValue = data.target.className;
    const dataValue = data.target.value;
    switch(true){   
      case classValue.includes('name') :
        setUserName(dataValue)
      break;
      case classValue.includes('random') :
        (dataValue === '1' ? setQuizList([...Quizlist].sort(()=>{return Math.random() - 0.5}).slice(0, selected)
        ) : setQuizList([...Quizlist]).slice(0, selected))        
      break;
      case classValue.includes('cnt') : 
        setSelected(dataValue);
      break;
      case classValue.includes('type') : 
        (dataValue === '전체'
        ? setQuizList([...Quizlist].slice(0, selected))
        : setQuizList([...Quizlist].filter((e)=>{
          return e.type === dataValue
        }).slice(0, selected))
        )
        setTypeTxt(dataValue)

      break;
      default:
        console.log('데이터가 없습니다.')
    }
  }
  
  useEffect(()=>{
    setQuizList([...Quizlist].slice(0, selected));
    setQuizCnt([...Quizlist].filter((e)=>{
      return typeTxt === '전체' ? true : e.type === typeTxt;
    }).length);
  },[typeTxt, selected])
  
  return (
    <Routes>
      <Route path='/' element={<Main ChangeEvent={ChangeEvent} userName={userName} quiz={quiz} selected={selected} QuizList={QuizList} quizCnt={quizCnt} />} />
      <Route path='/quiz' element={<Detail QuizList={QuizList} userName={userName} />}/>
    </Routes>
  );
}

export default App;
