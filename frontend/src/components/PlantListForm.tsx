import React from 'react';
import { Form, Button, Checkbox } from 'semantic-ui-react';

const PlantListForm = () => {
    return (
        <Form>
            <Form.Field>
                <label>Name</label>
                <input placeholder="Plant Name" />
            </Form.Field>
            <Form.Field>
                <label>Species</label>
                <input placeholder="Species" />
            </Form.Field>
            <Form.Field>
                <label>Watering interval</label>
                <input placeholder="2 days" />
            </Form.Field>
            <Form.Field>
                <Checkbox label="Send me e-mail notification" />
            </Form.Field>
            <Button type="submit">Add</Button>
        </Form>
    );
};

export default PlantListForm;
