import * as React from 'react';
import { Grid, Segment, Form, Button, Divider } from 'semantic-ui-react';
import { NavLink, Link } from 'react-router-dom';

const Login: React.FC = (): React.ReactElement => {
    return (
        <Grid centered style={{ padding: 200, backgroundColor: '#582949' }}>
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
                    <Button style={{ backgroundColor: '#1A9593', color: 'white' }} as={Link} to="/home">
                        {' '}
                        Sign in{' '}
                    </Button>
                    <Divider />
                    <Button style={{ backgroundColor: '#79546D', color: 'white' }} as={NavLink} to="/signup">
                        {' '}
                        Sign up{' '}
                    </Button>
                </Form>
            </Segment>
        </Grid>
    );
};

export default Login;
