import * as React from 'react';
import { Grid, Segment, Statistic, Divider, Dropdown } from 'semantic-ui-react';
import plant from '../assets/images/plant1.jpg';
import plant2 from '../assets/images/plant2.jpg';
import plant3 from '../assets/images/plant3.jpg';

const plantOptions = [
    {
        key: 'Bogdan',
        text: 'Bogdan',
        value: 'Bogdan',
        image: { avatar: true, src: plant },
    },
    {
        key: 'Dżony',
        text: 'Dżony',
        value: 'Dżony',
        image: { avatar: true, src: plant3 },
    },
    {
        key: 'Stachu',
        text: 'Stachu',
        value: 'Stachu',
        image: { avatar: true, src: plant2 },
    },
];

const Stats: React.FC = (): any => {
    return (
        <Grid centered style={{ backgroundColor: '#582949' }}>
            <Dropdown
                style={{ marginRight: 30, marginLeft: 40 }}
                placeholder="Select Plant"
                selection
                fluid
                options={plantOptions}
            />
            <Segment style={{ marginBottom: 100 }}>
                <Statistic color="yellow">
                    <Statistic.Value>5</Statistic.Value>
                    <Statistic.Label>Current Streak</Statistic.Label>
                </Statistic>
                <Divider />
                <Statistic color="teal">
                    <Statistic.Value>60</Statistic.Value>
                    <Statistic.Label>Streak Target</Statistic.Label>
                </Statistic>
                <Divider />
                <Statistic color="green">
                    <Statistic.Value>12</Statistic.Value>
                    <Statistic.Label>Percent Success</Statistic.Label>
                </Statistic>
                <Divider />
                <Statistic color="pink">
                    <Statistic.Value>10</Statistic.Value>
                    <Statistic.Label>Average Month</Statistic.Label>
                </Statistic>
            </Segment>
        </Grid>
    );
};

export default Stats;
