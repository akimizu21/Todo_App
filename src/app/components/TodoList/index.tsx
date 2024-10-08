/**
 * TodoList
 */
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleCheck,
  faCircleXmark,
} from '@fortawesome/free-solid-svg-icons';
/**
 * styles
 */
import styles from './style.module.css';

export const TodoList = (props: any) => {
  const { selectTab, todoList, handleCheckTodo, handleDeleteTodo } = props;
  return (
    <>
      {selectTab === '未完了' && (
        <ul className={styles.todoList}>
          {todoList
            .filter((todo: any) => todo.isDone === false)
            .map((todo: any) => {
              return (
                <li className={styles.todoContents} key={todo.id}>
                  <span>{todo.title}</span>
                  <div className={styles.farContainer}>
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      onClick={() => handleCheckTodo(todo.id, todo.title)}
                      className={styles.far}
                    />
                    <FontAwesomeIcon
                      icon={faCircleXmark}
                      onClick={() => handleDeleteTodo(todo.id, todo.title)}
                      className={styles.far}
                    />
                  </div>
                </li>
              );
            })}
        </ul>
      )}
      {selectTab === '完了' && (
        <ul className={styles.todoList}>
          {todoList
            .filter((todo: any) => todo.isDone === true)
            .map((todo: any) => {
              return (
                <li className={styles.todoContents} key={todo.id}>
                  <span>{todo.title}</span>
                  <div className={styles.farContainer}>
                    <FontAwesomeIcon
                      icon={faCircleXmark}
                      onClick={() => handleDeleteTodo(todo.id, todo.title)}
                      className={styles.far}
                    />
                  </div>
                </li>
              );
            })}
        </ul>
      )}
    </>
  );
};
