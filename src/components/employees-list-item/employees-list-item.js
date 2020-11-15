import React from 'react';
import { ListGroupItem } from 'reactstrap';

const EmployeesListItem = ({person, activeId, onClicked}) => {
    const {full_name, gender, position, date_of_birth, fired, id} = person;
    return (
        <ListGroupItem onClick={() => onClicked()} className={id === activeId ? "active" : ""}>
            <h3>{full_name}</h3>
            <p><b>Пол:</b> {gender}</p>
            <p><b>Должность:</b> {position}</p>
            <p><b>Дата рождения:</b> {date_of_birth}</p>
            <p><b>Уволен:</b> {fired ? 'Да' : 'Нет'}</p>
        </ListGroupItem>
    )
}

export default EmployeesListItem;