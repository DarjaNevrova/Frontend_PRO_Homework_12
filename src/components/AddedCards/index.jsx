import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeAction } from '../../store/reducer/addedCardsReducer';
import style from './style.module.css';

export default function AddedCards({ day }) {
  const dispatch = useDispatch();

  const tasks = useSelector(({ cards }) => cards.filter(({ dayId }) => dayId === day.id));

  const totalCost = tasks.reduce((acc, { price }) => acc + price, 0);

  if (tasks.length > 0) {
    return (
      <div className={style.cards}>
        <p className={style.DayOfTheWeek}>День недели: {day.title}</p>
        <button className={style.button} onClick={() => dispatch(removeAction(day.id))}>Удалить все дела</button>
        <div className={style.paragraphs}>
          <p>Всего дел: {tasks.length}</p>
          <p>Общая сумма: {totalCost}</p>
        </div>
        <div className={style.paragraphsTwoContainer}>
          {tasks.map(task => (
            <div className={style.paragraphsTwo} key={task.id}>
              <p>Task#  {task.task}</p>
              <p>Стоимость: {task.price}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}