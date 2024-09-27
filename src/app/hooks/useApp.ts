/**
 * useApp
 */

import React from "react";
/**
 * components
 */
import { INIT_TODO_LIST, INIT_TODO_ID } from "../constants/data";

/**
 * 
 * @returns 
 */
export const useApp = () => {
  // addInputTodo
  const [addInputTodo, setAddInputTodo] = React.useState("");
  // todoList
  const [todoList, setTodoList] = React.useState(INIT_TODO_LIST);
  // 採番用ID
  const [uniquId, setUniquId] = React.useState(INIT_TODO_ID);
  // selectTab
  const [selectTab, setSelectTab] = React.useState("未完了");
  
  /**
   * TodoList取得処理
   */
  // const getData = async () => {
  //   try {
  //     const response = await axios.get("/api/todo")
  //     setTodoList(response.data); 
  //   } catch (error) {
  //     console.error("Error fetching todo data:", error);
  //   }
  // };
  
  /**
   * addInputTodo更新処理
   * @param e 
   */
  const onChangeAddInputTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddInputTodo(e.target.value);
  };

  /**
   * Todo追加処理
   */
  const handleAddTodo = () => {
    // addInputTodoが空じゃないとき
    if ( addInputTodo !== "" ) {
      const nestUniquId = uniquId + 1;
      const newTodoList = [...todoList, {
        id:  nestUniquId,
        title: addInputTodo,
        isDone: false,
      }]
      setTodoList(newTodoList);
      // IDをインクリメント
      setUniquId(nestUniquId);      
      // addINputTodoをリセット
      setAddInputTodo("");
    };
  };

  /**
   * Todo削除処理
   * @param targetId 
   * @param targetTitle 
   */
  const handleDeleteTodo = (targetId: number, targetTitle:string) => {
    if(window.confirm(`${targetTitle}を削除しますか?`)) {
      const newTodoList = todoList.filter((todo: any) => {
        return todo.id !== targetId;
      });
      setTodoList(newTodoList);
    }
  };

  /**
   * Todo完了処理
   * @param targetId 
   */
  const handleCheckTodo = (targetId: number, targetTitle:string) => {
    if(window.confirm(`${targetTitle}を完了しましたか?`)) {
      const doneTodoList = todoList.map((todo: any) => {
        if (todo.id === targetId) {
          return {...todo, isDone: !todo.isDone};
        }
        return todo
      });
      // 更新されたTodoListをセット
      setTodoList(doneTodoList);
    };
  };

  // React.useEffect(() => {
  //   getData();
  // }, []);

  return[
    {
      addInputTodo,
      selectTab,
      todoList,
    },
    {
      onChangeAddInputTodo,
      handleAddTodo,
      setSelectTab,
      handleCheckTodo,
      handleDeleteTodo
    }
  ]
}