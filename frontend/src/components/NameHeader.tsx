import React from 'react';
import { Header, Container } from 'semantic-ui-react';

const NameHeader: React.FC = (): React.ReactElement => {
    return (
        <Container>
            <Header as="h3" textAlign="center" style={{ marginBottom: '40px', color: 'white' }}>
                <Header.Subheader textAlign="center" style={{ color: 'white' }}>
                    Welcome back,
                </Header.Subheader>
                Name Surname
            </Header>
        </Container>
    );
};

export default NameHeader;
