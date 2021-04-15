import React from 'react';
import { Button, Modal } from 'semantic-ui-react';

import PlantListForm from './PlantListForm';

import './plantListStyle.css';

const PlantListButton = () => {
    return (
        <Modal trigger={<Button content="+" className="addPlantButton" />}>
            <Modal.Header style={{ backgroundColor: '#582949', color: 'white' }}>Add your plant!</Modal.Header>
            <Modal.Content>
                <PlantListForm />
            </Modal.Content>
        </Modal>
    );
};

export default PlantListButton;
