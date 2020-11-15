import React from 'react';
import HandbookServiceContext from '../handbook-service-context';

const WithHandbookService = () => (Wrapped) => {
    return (props) => {
        return (
            <HandbookServiceContext.Consumer>
                {
                    (HandbookService) => {
                        return <Wrapped {...props} HandbookService={HandbookService}/>
                    }
                }
            </HandbookServiceContext.Consumer>
        )
    };
};

export default WithHandbookService;