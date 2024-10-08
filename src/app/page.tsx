'use client';

import React from 'react';
import axios from 'axios';
/**
 * components
 */
import { AddTodo } from './components/AddTodo';
import { SelectTodo } from './components/SelectTodo';
import { TodoList } from './components/TodoList';
import { InputForm } from './components/Common/InputForm';
/**
 * hooks
 */
import { useApp } from './hooks/useApp';
/**
 * styles
 */
import styles from './page.module.css';

const Home = () => {
  /* hooks */
  const [state, actions] = useApp();

  return (
    <>
      <h1 className={styles.title}>TODO LIST</h1>

      {/* ADD TODO 領域 */}
      <section className={styles.commonArea}>
        <AddTodo
          addInputTodo={state.addInputTodo}
          onChangeAddInputTodo={actions.onChangeAddInputTodo}
          handleAddTodo={actions.handleAddTodo}
        />
      </section>

      {/* Todo検索フォーム 領域*/}
      <section className={styles.commonArea}>
        <InputForm
          placeholder={'Search keyword'}
          value={state.searchKeyword}
          handleChangeValue={actions.handelSearchTodo}
        />
      </section>

      {/* SELECT TODO 領域 */}
      <section className={styles.commonArea}>
        <SelectTodo
          setSelectTab={actions.setSelectTab}
          selectTab={state.selectTab}
        />
      </section>

      {/* TODO LIST 表示領域 */}
      <section className={styles.commonArea}>
        <TodoList
          selectTab={state.selectTab}
          todoList={state.showTodoList}
          handleCheckTodo={actions.handleCheckTodo}
          handleDeleteTodo={actions.handleDeleteTodo}
        />
      </section>
    </>
  );
};

export default Home;
