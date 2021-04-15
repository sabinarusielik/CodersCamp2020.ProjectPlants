import React from 'react';
import NameHeader from '../components/NameHeader';
import YourPlantsList from '../components/YourPlantsList';
import Calendar from '../components/Calendar';
import UpcomingAlerts from '../components/UpcomingAlerts';

const HomePage: React.FC = (): React.ReactElement => {
    return (
        <div className="home-wrapper" style={{ padding: '40px 30px', backgroundColor: '#582949' }}>
            <NameHeader />
            <YourPlantsList />
            <Calendar />
            <UpcomingAlerts />
        </div>
    );
};

export default HomePage;
