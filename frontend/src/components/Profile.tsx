import * as React from 'react';
import { Card, Icon, Grid } from 'semantic-ui-react';
import person from '../assets/images/wojtek.png';

const extra = (
    <a>
        <Icon name="leaf" />3 plants
    </a>
);

const Profile: React.FC = (): any => {
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
