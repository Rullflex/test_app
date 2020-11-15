const initialState = {
    menu: [
        {
            "full_name": "Горшков Дмитрий Витальевич",
            "position": "junior frontend developer",
            "date_of_birth": "26.03.1999",
            "gender": "Мужской",
            "fired": false,
            "id": 0
        },
        {
            "full_name": "Анисимова Кристина Олеговна",
            "position": "senior backend developer",
            "date_of_birth": "11.11.2001",
            "gender": "Женский",
            "fired": true,
            "id": 1
        }
    ],
    formData: {
        fullName: '',
        position: '',
        dateOfBirth: '',
        gender: '',
        fired: false
    },
    activeId: -1,
    isMenuItemActive: false,
    isValidateError: false
}

let idCounter = 2;

const reducer = (state = initialState, actions) => {
    switch (actions.type) {
        case 'MENU_LOADED':
            return {
                ...state,
                menu: actions.payload
            };
        case 'MENU_ITEM_CLICKED':
            if (!state.isValidateError) {
                const itemIndex = state.menu.findIndex(item => item.id === actions.currentId);
                return {
                    ...state,
                    formData: {
                        ...state.formData, 
                        fullName: state.menu[itemIndex].full_name,
                        position: state.menu[itemIndex].position,
                        dateOfBirth: state.menu[itemIndex].date_of_birth,
                        gender: state.menu[itemIndex].gender,
                        fired: state.menu[itemIndex].fired
                    },
                    activeId: actions.currentId,
                    isMenuItemActive: true
                };
            } else {
                return {
                    ...state
                };
            }
        case 'MENU_ADD_ITEM':
            let newMenu = [...state.menu];
            newMenu.push({
                "full_name": "",
                "position": "",
                "date_of_birth": "",
                "gender": "",
                "fired": "",
                "id": idCounter
            });
            return {
                ...state,
                menu: newMenu,
                formData: {
                    fullName: '',
                    position: '',
                    dateOfBirth: '',
                    gender: '',
                    fired: false
                },
                activeId: idCounter++,
                isMenuItemActive: true,
                isValidateError: true
            };
        case 'MENU_DELETE_ITEM':
            const itemIndex = state.menu.findIndex(item => item.id === state.activeId);
            return {
                ...state,
                    menu: [
                        ...state.menu.slice(0, itemIndex),
                        ...state.menu.slice(itemIndex + 1)
                    ],
                formData: {
                    fullName: '',
                    position: '',
                    dateOfBirth: '',
                    gender: '',
                    fired: false
                },
                activeId: -1,
                isMenuItemActive: false,
                isValidateError: false
            };
        case 'FORM_NAME_CHANGE':
            if (state.activeId >= 0) {
                const itemIndex = state.menu.findIndex(item => item.id === state.activeId);
                let newMenu = [...state.menu];
                newMenu[itemIndex].full_name = actions.payload;
                return {
                    ...state,
                    menu: newMenu,
                    formData: {...state.formData, fullName: actions.payload},
                    isValidateError: (actions.payload === '') || (state.formData.position === '') ? true : false
                };
            } else {
                return {
                    ...state,
                    formData: {...state.formData, fullName: actions.payload}
                };
            }
        case 'FORM_POSITION_CHANGE':
            if (state.activeId >= 0) {
                const itemIndex = state.menu.findIndex(item => item.id === state.activeId);
                let newMenu = [...state.menu];
                newMenu[itemIndex].position = actions.payload;
                return {
                    ...state,
                    menu: newMenu,
                    formData: {...state.formData, position: actions.payload},
                    isValidateError: (actions.payload === '') || (state.formData.fullName === '') ? true : false
                };
            } else {
                return {
                    ...state,
                    formData: {...state.formData, position: actions.payload}
                };
            }
        case 'FORM_DATE_CHANGE':
            if (state.activeId >= 0) {
                const itemIndex = state.menu.findIndex(item => item.id === state.activeId);
                let newMenu = [...state.menu];
                newMenu[itemIndex].date_of_birth = actions.payload;
                return {
                    ...state,
                    menu: newMenu,
                    formData: {...state.formData, dateOfBirth: actions.payload}
                };
            } else {
                return {
                    ...state,
                    formData: {...state.formData, dateOfBirth: actions.payload}
                };
            }
        case 'FORM_GENDER_CHANGE':
            if (state.activeId >= 0) {
                const itemIndex = state.menu.findIndex(item => item.id === state.activeId);
                let newMenu = [...state.menu];
                newMenu[itemIndex].gender = actions.payload;
                return {
                    ...state,
                    menu: newMenu,
                    formData: {...state.formData, gender: actions.payload}
                };
            } else {
                return {
                    ...state,
                    formData: {...state.formData, gender: actions.payload}
                };
            }
        case 'FORM_FIRED_CHANGE':
            if (state.activeId >= 0) {
                const itemIndex = state.menu.findIndex(item => item.id === state.activeId);
                let newMenu = [...state.menu];
                newMenu[itemIndex].fired = actions.payload;
                return {
                    ...state,
                    menu: newMenu,
                    formData: {...state.formData, fired: actions.payload}
                };
            } else {
                return {
                    ...state,
                    formData: {...state.formData, fired: actions.payload}
                };
            }
        default:
            return state;
    }
}

export default reducer;