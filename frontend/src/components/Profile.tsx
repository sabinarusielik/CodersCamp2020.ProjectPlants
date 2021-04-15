import * as React from 'react';
import { Card, Icon, Grid, Container } from 'semantic-ui-react';
import person from '../assets/images/wojtek.png';

const extra: React.ReactElement = (
    <Container>
        <Icon name="leaf" />3 plants
    </Container>
);

const Profile: React.FC = (): React.ReactElement => {
    return (
        <Grid fluid style={{ paddingTop: 70, paddingBottom: 130, paddingLeft: 10, backgroundColor: '#582949' }}>
            <Card
                centered
                image={{ src: person }}
                header="Wojtek"
                meta="Plant lover"
                description="Wojtek is a passionate photographer living in Nashville who enjoys playing guitar and hanging with his plants."
                extra={extra}
            />
        </Grid>
    );
};

export default Profile;
