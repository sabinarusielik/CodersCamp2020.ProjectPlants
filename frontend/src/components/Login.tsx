import * as React from 'react';
import { Grid, Segment, Form } from 'semantic-ui-react';

const Login: React.FC = (): any => {
    return (
        <Grid centered style={{ padding: 200 }}>
            <Segment>
                <Form>
                    <Form.Field>
                        <label>Username</label>
                        <Form.Input placeholder="Username" />
                    </Form.Field>
                    <Form.Field>
                        <label>Password</label>
                        <Form.Input type="password" placeholder="Password" />
                    </Form.Field>
                    <Form.Button type="submit" color="purple">
                        {' '}
                        Submit{' '}
                    </Form.Button>
                </Form>
            </Segment>
        </Grid>
    );
};

export default Login;
