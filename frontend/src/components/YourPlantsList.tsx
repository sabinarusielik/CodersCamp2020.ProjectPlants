import React from 'react';
import { Header, List, Image, Segment } from 'semantic-ui-react';

const YourPlantsList: React.FC = (): React.ReactElement => {
    return (
        <div>
            <Header as="h2" style={{ marginBottom: '10px', color: 'white' }}>
                Your Plants
            </Header>
            <List horizontal style={{ overflowX: 'scroll', height: '100px' }}>
                <List.Item>
                    <Segment>
                        <List.Content>
                            <List.Header>+</List.Header>
                        </List.Content>
                    </Segment>
                </List.Item>
                <List.Item>
                    <Segment>
                        <Image avatar src="/images/avatar/small/tom.jpg" />
                        <List.Content>
                            <List.Header>Aloevera</List.Header>
                        </List.Content>
                    </Segment>
                </List.Item>
                <List.Item>
                    <Segment>
                        <Image avatar src="/images/avatar/small/christian.jpg" />
                        <List.Content>
                            <List.Header>Cactus</List.Header>
                        </List.Content>
                    </Segment>
                </List.Item>
                <List.Item>
                    <Segment>
                        <Image avatar src="/images/avatar/small/matt.jpg" />
                        <List.Content>
                            <List.Header>Monstera</List.Header>
                        </List.Content>
                    </Segment>
                </List.Item>
            </List>
        </div>
    );
};

export default YourPlantsList;
