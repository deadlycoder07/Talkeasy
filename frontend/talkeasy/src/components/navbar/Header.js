import React from 'react';

import 'antd/dist/antd.css';
import { Menu } from 'antd';
import {
    MailOutlined,
} from '@ant-design/icons';



class Header extends React.Component {
    state = {
        current: 'mail',
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };

    render() {
        return (
            <div className="menu">
                <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                    <Menu.Item key="brand" style={{ float: "left", paddingLeft: 30, fontSize: 20 }} >
                        <a href="/"> Talkeasy</a>
                    </Menu.Item>
                    <Menu.Item key="mail" style={{ float: "right" }}>
                        <MailOutlined />
                        About
                </Menu.Item>



                </Menu>
            </div>
        );
    }
}
export default Header;