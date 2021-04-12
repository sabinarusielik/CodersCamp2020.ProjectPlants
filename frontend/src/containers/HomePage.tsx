import React from 'react';
import NameHeader from '../components/NameHeader';
import YourPlantsList from '../components/YourPlantsList';

const HomePage: React.FC = (): React.ReactElement => {
    return (
        <div className="home-wrapper" style={{ padding: '40px 30px', backgroundColor: '#582949', height: '100vh' }}>
            <NameHeader />
            <YourPlantsList />
        </div>
    );
};

export default HomePage;
