const initialState = [
    { id: 1, title: 'Понедельник'},
    { id: 2, title: 'Вторник' },
    { id: 3, title: 'Среда' },
    { id: 4, title: 'Четверг' },
    { id: 5, title: 'Пятница' },
    { id: 6, title: 'Суббота' },
    { id: 7, title: 'Воскресенье'}
];

const daysReducer = (state = initialState) => {
    return state;
}

export default daysReducer;