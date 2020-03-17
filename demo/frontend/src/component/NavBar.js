import React from 'react'
import { Menu, Button, Row,Col } from 'antd';
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  InboxOutlined,
  MailOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;

export default class NavBar extends React.Component {
  state = {
    collapsed: false,
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

    logOut = (event)=>{
        console.log('Log out');
        localStorage.removeItem('token');
        localStorage.clear();
        //console.log(localStorage.getItem('token'));
        //console.log(this.state.redirect);
        alert('Logged out of the session!!')
        this.props.history.push('/');
    }

  render() {
    return (
      <div>
        <Row >
            <Col span={5}>
                <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
                {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
                </Button>
                <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                theme="dark"
                inlineCollapsed={this.state.collapsed}
                >
                    <Menu.Item key="1">
                        <PieChartOutlined />
                        <span>Registration</span>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <DesktopOutlined />
                        <span>Multiple Image Upload</span>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <InboxOutlined />
                        <span>Add Extra Details</span>
                    </Menu.Item>
                    <Menu.Item key="4">
                        <InboxOutlined />
                        <span>
                            <Button type="primary" 
                                htmlType="submit" 
                                className="login-form-button"
                                onClick={this.logOut}
                            >
                                LogOut
                            </Button>
                        </span>
                    </Menu.Item>
                    <SubMenu
                        key="sub1"
                        title={
                        <span>
                            <MailOutlined />
                            <span>Update Or Edit</span>
                        </span>
                        }
                    >
                        <Menu.Item key="5">Your Info</Menu.Item>
                        <Menu.Item key="6">Property Info</Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="sub2"
                        title={
                        <span>
                            <MailOutlined />
                            <span>Delete</span>
                        </span>
                        }
                    >
                        <Menu.Item key="7">
                            <Button type="primary" 
                                htmlType="submit" 
                                className="login-form-button"
                                onClick={this.delete}
                            >
                                Delete Profile
                            </Button>
                        </Menu.Item>
                        <Menu.Item key="8">Property Info</Menu.Item>
                    </SubMenu>
                </Menu>
            </Col>
            <Col span={1}></Col>
            <Col span={18}>
                <h1>Where to write a content</h1>
            </Col>
        </Row>
        
      </div>
    );
  }
}

