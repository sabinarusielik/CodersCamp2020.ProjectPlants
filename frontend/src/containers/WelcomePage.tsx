import React from 'react';
import { Header, Button } from 'semantic-ui-react';

import img from '../assets/images/welcome.svg';

const WelcomePage: React.FC = (): React.ReactElement => {
    return (
        <div
            className="welcome-wrapper"
            style={{ padding: '100px 40px 40px', backgroundColor: '#582949', height: '100vh' }}
        >
            <Header style={{ color: 'white', fontSize: '40px' }}>
                Please
                <br /> don't kill me
                <Header.Subheader style={{ color: 'white', paddingTop: '10px' }}>
                    I'm your plant and I wanna live!
                </Header.Subheader>
            </Header>
            <Button fluid style={{ position: 'relative', marginTop: '350px', zIndex: 2, backgroundColor: 'white' }}>
                Get started
            </Button>
            <div>
                <img
                    src={img}
                    alt="lady with plant"
                    style={{ position: 'absolute', bottom: '0px', left: '0px', zIndex: 1 }}
                />
            </div>
        </div>
    );
};

export default WelcomePage;
