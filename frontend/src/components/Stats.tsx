import * as React from 'react';
import { Grid, Segment, Statistic, Divider, Dropdown } from 'semantic-ui-react';
import plant from '../assets/images/plant1.jpg';
import plant2 from '../assets/images/plant2.jpg';
import plant3 from '../assets/images/plant3.jpg';

const plantOptions = [
    {
        key: 'Bogdan',
        text: 'Bogdan',
        value: '660104',
        image: { avatar: true, src: plant },
    },
    {
        key: 'Dżony',
        text: 'Dżony',
        value: '031002',
        image: { avatar: true, src: plant3 },
    },
    {
        key: 'Stachu',
        text: 'Stachu',
        value: '899085',
        image: { avatar: true, src: plant2 },
    },
];

const Stats: React.FC = (): React.ReactElement => {
    const numbers = [5, 6, 0, 1, 2, 10];
    const [stats, setStats] = React.useState(numbers);

    const handleDropdown = (event: any, data: any) => {
        setStats(data.value);
    };

    return (
        <Grid centered style={{ backgroundColor: '#582949' }}>
            <Dropdown
                style={{ marginRight: 30, marginLeft: 40 }}
                placeholder="Select Plant"
                selection
                fluid
                options={plantOptions}
                onChange={handleDropdown}
            />
            <Segment style={{ marginBottom: 100 }}>
                <Statistic color="yellow">
                    <Statistic.Value>{stats[0]}</Statistic.Value>
                    <Statistic.Label>Current Streak</Statistic.Label>
                </Statistic>
                <Divider />
                <Statistic color="teal">
                    <Statistic.Value>
                        {stats[1]}
                        {stats[2]}
                    </Statistic.Value>
                    <Statistic.Label>Streak Target</Statistic.Label>
                </Statistic>
                <Divider />
                <Statistic color="green">
                    <Statistic.Value>
                        {stats[3]}
                        {stats[4]}
                    </Statistic.Value>
                    <Statistic.Label>Percent Success</Statistic.Label>
                </Statistic>
                <Divider />
                <Statistic color="pink">
                    <Statistic.Value>{stats[5]}</Statistic.Value>
                    <Statistic.Label>Average Month</Statistic.Label>
                </Statistic>
            </Segment>
        </Grid>
    );
};

export default Stats;
