import * as React from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';

const SignupForm: React.FC = (): any => {
    <Form>
        <Form.Field>
            <label>Login</label>
            <input placeholder="Your username" />
        </Form.Field>
        <Form.Field>
            <label>Password</label>
            <input placeholder="Your password" />
        </Form.Field>
        <Form.Field>
            <label>Confirm Password</label>
            <input placeholder="Your password" />
        </Form.Field>
        <Form.Field>
            <label>E-mail</label>
            <input placeholder="example@domain.com" />
        </Form.Field>
        <Form.Field>
            <Checkbox label="I agree to the Terms and Conditions" />
        </Form.Field>
        <Button type="submit">Submit</Button>
    </Form>;
};

export default SignupForm;
