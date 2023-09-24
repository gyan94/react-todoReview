import React, { useState } from 'react';
import './App.css';
import { InputTodo } from "./components/inputTodo";
import { IncompleteTodos } from "./components/incompleteTodos"
import { CompleteTodos } from './components/completeTodos';

export const App = () => {
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);
  const [todoText, setTodoText] = useState();

  // 入力できないのを防ぐ関数
  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText) {
      const newTodos = [...incompleteTodos, todoText];
      setIncompleteTodos(newTodos);
      setTodoText("");
    }
  }

  // 削除処理：mapのindexを削除ボタンの関数に渡して、その関数の中で何番目かを判定
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  }

  // 完了ボタン処理：
  const onClickComplete = (index) => {
    // 未完了TODOのステイトを格納
    const newIncompleteTodos = [...incompleteTodos];
    // 完了ボタンの押されたインデックスの要素を削除
    newIncompleteTodos.splice(index, 1);
    // 完了TODOリストに削除されたインデックス要素を追加する
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  }


  // 戻すボタン処理
  const onclickBack = (index) => {
    // 完了TODOリストの準備
    const newCompleteTodos = [...completeTodos];
    // 戻すを押したインデックスの要素削除する
    newCompleteTodos.splice(index,1);
    // 未完了のTODOリストに削除された完了のTODOを追加する
    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];

    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);

  }




  return (
    <>
      <InputTodo
        todoText={todoText} 
        onChange={onChangeTodoText} 
        onClick={onClickAdd}
      />
      <IncompleteTodos
        todos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />  
      <CompleteTodos
        todos={completeTodos}
        onclickBack={onclickBack}
      />
    </>  
    );
}

export default App;
