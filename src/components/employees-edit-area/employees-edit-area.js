import React, {Component} from 'react';
import {connect} from 'react-redux';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import {formChangeName, formChangePosition, formChangeDate, formChangeGender,formChangeFired} from '../../actions';

import { Form, FormGroup, Label, Input} from 'reactstrap';
import './day-picker.scss';
import './employees-edit-area.scss';

import MomentLocaleUtils, {
    formatDate,
    parseDate,
  } from 'react-day-picker/moment';
  
import 'moment/locale/ru';

class EmployeesEditArea extends Component {

    render() {
        const isActive = this.props.isActive;
        const isError = this.props.isError;
        const {fullName, position, dateOfBirth, gender, fired} = this.props.formData;
        const {formChangeName, formChangePosition, formChangeDate, formChangeGender, formChangeFired} = this.props;
        let nameError = false, 
            positionError = false;
        if (isError) {
            if (fullName === '') {
                nameError = true;
            }
            if (position === '') {
                positionError = true;
            }
        }
        return (
            <Form>
                <FormGroup>
                    <Label>Фамилия Имя Отчество</Label>
                    <Input  
                        type="text" 
                        name="full_name" 
                        disabled={!isActive} 
                        value={fullName} 
                        required={true} 
                        className={(nameError ? 'error' : '')}
                        onChange={(event) => formChangeName(event.currentTarget.value)}/>
                </FormGroup>
                <FormGroup>
                    <Label>Должность</Label>
                    <Input 
                        type="select" 
                        name="position" 
                        disabled={!isActive} 
                        value={position} 
                        required={true}  
                        className={(positionError ? 'error' : '')}
                        onChange={(event) => formChangePosition(event.currentTarget.value)}>
                        <option value=""></option>
                        <option value="junior frontend developer">junior frontend developer</option>
                        <option value="middle frontend developer">middle frontend developer</option>
                        <option value="senior frontend developer">senior frontend developer</option>
                        <option value="junior backend developer">junior backend developer</option>
                        <option value="middle backend developer">middle backend developer</option>
                        <option value="senior backend developer">senior backend developer</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label>Дата рождения</Label>
                    <DayPickerInput  
                        inputProps={{
                             disabled: !isActive,
                             className: 'form-control' 
                            }}
                        value={dateOfBirth}
                        onDayChange={formChangeDate}
                        formatDate={formatDate}
                        parseDate={parseDate}
                        format="L"
                        placeholder={`${formatDate(new Date(), 'L', 'ru')}`}
                        dayPickerProps={{
                        locale: 'ru',
                        localeUtils: MomentLocaleUtils,
                        }}/>
                        
                </FormGroup>
                <FormGroup tag="fieldset"  disabled={!isActive}>
                    <legend>Пол</legend>
                    <FormGroup check>
                    <Label check>
                        <Input 
                            type="radio" 
                            name="gender" 
                            value="Мужской" 
                            checked={gender === 'Мужской'} 
                            onChange={(event) => formChangeGender(event.currentTarget.value)}/>
                        Мужской
                    </Label>
                    </FormGroup>
                    <FormGroup check>
                    <Label check>
                        <Input 
                            type="radio" 
                            name="gender" 
                            value="Женский" 
                            checked={gender === 'Женский'} 
                            onChange={(event) => formChangeGender(event.currentTarget.value)}/>
                        Женский
                    </Label>
                    </FormGroup>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                    <Input 
                        type="checkbox" 
                        name="fired" 
                        disabled={!isActive} 
                        checked={fired} 
                        onChange={(event) => formChangeFired(event.currentTarget.checked)}/>
                    Уволен
                    </Label>
                </FormGroup>
            </Form>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        formData: state.formData,
        isActive: state.isMenuItemActive,
        isError: state.isValidateError
    }
};
const mapDispatchToProps = {
    formChangeName,
    formChangePosition,
    formChangeDate,
    formChangeGender,
    formChangeFired
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployeesEditArea);