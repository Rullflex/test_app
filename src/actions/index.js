const menuLoaded = (newMenu) => {
    return {
        type: 'MENU_LOADED',
        payload: newMenu
    };
};

const itemClicked = (currentId) => {
    return {
        type: 'MENU_ITEM_CLICKED',
        currentId
    };
};

const menuAddItem = () => {
    return {
        type: 'MENU_ADD_ITEM'
    };
}

const menuDeleteItem = () => {
    return {
        type: 'MENU_DELETE_ITEM'
    };
}


const formChangeName = (name) => {
    return {
        type: 'FORM_NAME_CHANGE',
        payload: name
    };
}

const formChangePosition = (position) => {
    return {
        type: 'FORM_POSITION_CHANGE',
        payload: position
    };
}

const formChangeDate = (selectedDay, modifiers, dayPickerInput) => {
    const input = dayPickerInput.getInput();
    return {
        type: 'FORM_DATE_CHANGE',
        payload: input.value
    };
}

const formChangeGender = (gender) => {
    return {
        type: 'FORM_GENDER_CHANGE',
        payload: gender
    };
}

const formChangeFired = (data) => {
    return {
        type: 'FORM_FIRED_CHANGE',
        payload: data
    };
}

export {
    menuLoaded,
    itemClicked,
    menuAddItem,
    menuDeleteItem,
    formChangeName,
    formChangePosition,
    formChangeDate,
    formChangeGender,
    formChangeFired
};