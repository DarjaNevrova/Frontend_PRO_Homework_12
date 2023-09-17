import { addAction } from "../../store/reducer/addedCardsReducer";
import { useDispatch, useSelector } from 'react-redux';
import style from './style.module.css';

export default function AddDays() {
    const dispatch = useDispatch();
    const days = useSelector(state => state.days);

    const submit = (event) => {
        event.preventDefault();
        const { task, price, dayOfTheWeek } = event.target;
        if (task.value && price.value && dayOfTheWeek.value !== '-1') {
            const newTask = {
                task: task.value,
                price: +price.value,
                dayId: +dayOfTheWeek.value
            }
            dispatch(addAction(newTask));
            console.log(newTask)
            event.target.reset();
        }
    }

    return (
        <div className={style.form}>
            <form onSubmit={submit}>
                <input className={style.input} type="text" placeholder='Задача' name='task' />
                <input className={style.input} type="number" placeholder='Цена' name='price' />
                <select className={style.select} defaultValue={'-1'} name='dayOfTheWeek'>
                    <option value='-1'>День недели</option>
                    {days.map(({ id, title }) => (
                        <option key={id} value={id}>{title}</option>
                    ))}
                </select>
                <button className={style.button} type="submit">Добавить</button>
            </form>
        </div>
    );
}