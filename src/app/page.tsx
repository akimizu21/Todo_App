"use client"

import React from "react";
import axios from "axios";
/**
 * components
 */
import { AddTodo } from "./components/AddTodo";
import { SelectTodo } from "./components/SelectTodo";
import { TodoList } from "./components/TodoList";
import { InputForm } from "./components/Common/InputForm";
/**
 * hooks
 */
import { useApp } from "./hooks/useApp";
/**
 * styles
 */
import styles from "./page.module.css"


const Home = () => {
  /* hooks */
  const [states, actions] = useApp();
  
  return (
    <>
      <h1 className={styles.title}>TODO LIST</h1>

      {/* ADD TODO 領域 */}
      <section className={styles.commonArea}>
        <AddTodo 
          addInputTodo={states.addInputTodo}
          onChangeAddInputTodo={actions.onChangeAddInputTodo}
          handleAddTodo={actions.handleAddTodo}
        />
      </section>

      {/* Todo検索フォーム 領域*/}
      <section className={styles.commonArea}>
        <InputForm
          placeholder={"Search keyword"}
        /> 
      </section>

      {/* SELECT TODO 領域 */}
      <section className={styles.commonArea}>
        <SelectTodo 
          setSelectTab={actions.setSelectTab}
          selectTab={states.selectTab}
        />
      </section>

      {/* TODO LIST 表示領域 */}
      <section className={styles.commonArea}>
        <TodoList 
          selectTab={states.selectTab}
          todoList={states.todoList}
          handleCheckTodo={actions.handleCheckTodo}
          handleDeleteTodo={actions.handleDeleteTodo}
        />
      </section>
    </>    
  );
}

export default Home;
