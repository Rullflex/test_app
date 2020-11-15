import React, {Component} from 'react';
import {connect} from 'react-redux';
import {menuAddItem, menuDeleteItem} from '../../actions';

import { Button } from 'reactstrap';

class Toolbar extends Component {

    render() {
        const {isActive, isError, menuAddItem, menuDeleteItem} = this.props
        return (
            <div className="p-2">
                <Button color="primary" disabled={isError} onClick={() => menuAddItem()}>Добавить</Button>{' '}
                <Button color="danger" disabled={!isActive} onClick={() => menuDeleteItem()}>Удалить</Button>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        isActive: state.isMenuItemActive,
        isError: state.isValidateError
    }
};
const mapDispatchToProps = {
    menuAddItem,
    menuDeleteItem
};

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);