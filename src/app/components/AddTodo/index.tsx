/**
 * AddTodo
 */

/**
 * components
 */
import { InputForm } from '../Common/InputForm';

/**
 * styles
 */
import styles from './style.module.css';

export const AddTodo = (props: any) => {
  const { addInputTodo, onChangeAddInputTodo, handleAddTodo } = props;
  return (
    <>
      <h2>ADD TODO</h2>
      <div className={styles.inputArea}>
        <InputForm
          placeholder={'New Todo'}
          inputValue={addInputTodo}
          handleChangeValue={onChangeAddInputTodo}
          className={styles.from}
        />
        <button onClick={handleAddTodo} className={styles.inputButton}>
          追加
        </button>
      </div>
    </>
  );
};
