import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Toolbar from '../toolbar';
import EmployeesList from '../employees-list';
import EmployeesEditArea from '../employees-edit-area';


const App = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <Toolbar/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <EmployeesList/>
                </Col>
                <Col>
                    <EmployeesEditArea/>
                </Col>
            </Row>
            
        </Container>
    )
}

export default App;