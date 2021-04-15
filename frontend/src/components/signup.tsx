import * as React from 'react';
import { Grid, Segment, Button, Checkbox, Form } from 'semantic-ui-react';

const SignupForm: React.FC = (): any => {
    return (
        <Grid centered style={{ padding: 200, backgroundColor: '#582949' }}>
            <Segment>
                <Form>
                    <Form.Field>
                        <label>Login</label>
                        <Form.Input id="login" placeholder="Your username" />
                    </Form.Field>
                    <Form.Field>
                        <label>Password</label>
                        <Form.Input id="password" type="password" placeholder="Your password" />
                    </Form.Field>
                    <Form.Field>
                        <label>Confirm Password</label>
                        <Form.Input id="passwordConf" type="password" placeholder="Your password" />
                    </Form.Field>
                    <Form.Field>
                        <label>E-mail</label>
                        <Form.Input id="email" type="email" placeholder="default@example.com" />
                    </Form.Field>
                    <Form.Field>
                        <Checkbox label="I agree withe the Privacy Policy" />
                    </Form.Field>
                    <Button type="submit" style={{ backgroundColor: '#1A9593', color: 'white' }}>
                        Create account
                    </Button>
                </Form>
            </Segment>
        </Grid>
    );
};

export default SignupForm;
