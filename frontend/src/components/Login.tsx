import * as React from 'react';
import { Grid, Segment, Form } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

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
                        Sign in{' '}
                    </Form.Button>
                    <Form.Button basic type="submit" color="purple" as={NavLink} to="/signup">
                        {' '}
                        Sign up{' '}
                    </Form.Button>
                </Form>
            </Segment>
        </Grid>
    );
};

export default Login;
