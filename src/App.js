import React, {useState} from 'react';

export default function App() {
    
    const [state, setState] = useState({count: 4, id: 1, uname: 'mohamed'})
    const id = state.id
    const uname = state.uname
    const count = state.count

    function pluscount(){
        setState(prevState => {
            return {...prevState, count: prevState.count + 1}
        })
    }
    function minus(){
        setState(prevState => {
            return {...prevState, count: prevState.count - 1}
        })
    }

  return (
    <>
      <button onClick={pluscount}>+</button>
        <span>{count}</span>
        <span>{id}</span>
        <span>{uname}</span>
      <button onClick={minus}>-----</button>
    </>
  )
}
