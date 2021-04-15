import React from 'react';
import { Header, List } from 'semantic-ui-react';

import PlantListSegment from './PlantListSegment';
import PlantListButton from './PlantListButton';

import image from '../assets/images/aloe.svg';
import image2 from '../assets/images/cactus.svg';
import image3 from '../assets/images/monstera.svg';

export const listOfPlants = [
    { name: 'Guillermo', src: image },
    { name: 'Laszlo', src: image2 },
    { name: 'Nadja', src: image3 },
    { name: 'Nandor', src: image },
    { name: 'Colin', src: image3 },
];

const createNewPlant = (name: string, src: string) => {
    let newPlant = { name: name, src: src };
    return listOfPlants.push(newPlant);
};

createNewPlant('Bigosik', image2);

const YourPlantsList: React.FC = (): React.ReactElement => {
    return (
        <div>
            <Header as="h2" style={{ marginBottom: '10px', color: 'white' }}>
                Your Plants
            </Header>
            <List style={{ overflowX: 'scroll', whiteSpace: 'nowrap' }}>
                <PlantListButton />
                {listOfPlants.map((plant) => {
                    return <PlantListSegment name={plant.name} src={plant.src} />;
                })}
            </List>
        </div>
    );
};

export default YourPlantsList;
