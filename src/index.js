import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

import {Provider} from 'react-redux';
import ErrorBoundry from './components/error-boundry';
import HandbookService from './services/handbook-service';
import HandbookServiceContext from './components/handbook-service-context';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
const handbookService = new HandbookService();


ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <HandbookServiceContext.Provider value={handbookService}>
                <App/>
            </HandbookServiceContext.Provider>
        </ErrorBoundry>
    </Provider>
    , document.getElementById('root'));

