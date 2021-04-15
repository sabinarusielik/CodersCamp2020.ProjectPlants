import React from 'react';
import { Header, Segment } from 'semantic-ui-react';

// import src from '../assets/images/alerts.svg';

const UpcomingAlerts = () => {
    return (
        <div>
            <Header as="h2" style={{ marginBottom: '10px', color: 'white' }}>
                Upcoming alerts
            </Header>
            <Segment style={{ width: '100%', height: '67px', backgroundColor: '#FFCEB6' }}></Segment>
            <Segment style={{ width: '100%', height: '67px', backgroundColor: '#FFDEB0' }}></Segment>
            {/* <img alt="interactive alerts wink wink" src={src}></img> */}
        </div>
    );
};

export default UpcomingAlerts;
