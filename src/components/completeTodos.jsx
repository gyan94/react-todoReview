import React from "react";

export const CompleteTodos = (props) => {
    const {todos, onclickBack} = props;
    return (
        <div className='complete-area'>
        <p className='title'>完了したTODO</p>
        {todos.map((todo, index) => {
          return (
            <div key={todo} className='list-row'>
              <ul className='flex' >
                <li>{todo}</li>
                <button onClick={() => onclickBack(index)}>戻す</button>
              </ul>
            </div>
          )
        })}
      </div>
    )
};