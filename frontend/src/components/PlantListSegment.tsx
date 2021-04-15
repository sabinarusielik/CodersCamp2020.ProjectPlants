import React from 'react';
import { Segment, List, Image } from 'semantic-ui-react';

interface IPlantProps {
    name: string;
    src: string;
}

const PlantListSegment: React.FC<IPlantProps> = (props: IPlantProps): React.ReactElement => {
    return (
        <Segment style={{ width: '100px', height: '100px', display: 'inline-block', marginRight: '16px' }}>
            <Image src={props.src} style={{ margin: '0 auto' }} />
            <List.Content style={{ margin: '0 auto' }}>
                <List.Header style={{ textAlign: 'center' }}>{props.name}</List.Header>
            </List.Content>
        </Segment>
    );
};

export default PlantListSegment;
