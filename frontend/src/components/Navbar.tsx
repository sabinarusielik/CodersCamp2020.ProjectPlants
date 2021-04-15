import * as React from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = (): React.ReactElement => {
    return (
        <Menu fixed={'bottom'} widths={5}>
            <Menu.Item as={NavLink} to="/profile">
                <Icon size="big" name="user" />
            </Menu.Item>
            <Menu.Item as={NavLink} to="/stats">
                <Icon size="big" name="chart bar" />
            </Menu.Item>
            <Menu.Item as={NavLink} to="/home">
                <Icon size="big" style={{ color: '#1A9593' }} name="home" />
            </Menu.Item>
            <Menu.Item as={NavLink} to="/plant">
                <Icon size="big" name="leaf" />
            </Menu.Item>
            <Menu.Item as={NavLink} to="/calendar">
                <Icon size="big" name="calendar outline" />
            </Menu.Item>
        </Menu>
    );
};

export default Navbar;
