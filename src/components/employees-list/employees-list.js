import React, {Component} from 'react';
import EmployeesListItem from '../employees-list-item';
import {connect} from 'react-redux';
import {menuLoaded, itemClicked} from '../../actions';
import { ListGroup } from 'reactstrap';

import './employees-list.scss';

class EmployeesList extends Component {

    render() {
        const {menuItems, activeId} = this.props;
        const items = menuItems.map((person) => {
            return (
                <EmployeesListItem 
                key = {person.id} 
                person = {person}
                activeId = {activeId}
                onClicked={() => this.props.itemClicked(person.id)}/>
            )
        })
        return (
            <View items = {items}/> 
        )
    }
    
};
const mapStateToProps = (state) => {
    return {
        menuItems: state.menu,
        activeId: state.activeId
    }
};
const mapDispatchToProps = {
    menuLoaded,
    itemClicked
};

const View = ({items}) => {

    return (
        <ListGroup>
            {items}
        </ListGroup>
    ) 
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeesList);
