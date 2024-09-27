/**
 * data
 */

/**
 * Todo初期値
 */
interface INIT_TODO_LIST {
  id: number;
  title: string;
  isDone: boolean;
}

export const INIT_TODO_LIST: INIT_TODO_LIST[] = [
  {
    id: 1,
    title: "todo1",
    isDone: false,
  },
  {
    id: 2,
    title: "todo2",
    isDone: false,
  },
];

/**
 * Todo採番IDの初期値
 */
export const INIT_TODO_ID = INIT_TODO_LIST.length;