import React, { Component } from 'react'
import { Card, Button, Modal } from 'antd';
import MoreInfo from './MoreInfo';
import MoreImage from './MoreImage';
import ExtraInfo from './ExtraInfo';
const { Meta } = Card;


export default class ListData extends Component {
    state = { 
        visible1: false,
        visible2: false,
     };

	showModal1 = () => {
		this.setState({
		visible1: true,
		});
	};

	handleOk1 = e => {
		console.log(e);
		this.setState({
		visible1: false,
		});
	};

	handleCancel1 = e => {
		console.log(e);
		this.setState({
		visible1: false,
		});
    };
    
    showModal2 = () => {
		this.setState({
		visible2: true,
		});
	};

	handleOk2 = e => {
		console.log(e);
		this.setState({
		visible2: false,
		});
	};

	handleCancel2 = e => {
		console.log(e);
		this.setState({
		visible2: false,
		});
	};


    render() {
        //console.log('ListDATA')
        //console.log(this.props.value._id);
        return (
            <Card
                hoverable
                style={{ width: '100%' }}
                cover={<img alt="example" src={"data:image/jpeg;base64,"+this.props.value.image} />}
            >
                <Meta title="Property Description" 
                description={'Address : '+this.props.value.address.street+','
                                    +this.props.value.address.area+','
                                    +this.props.value.address.city+','
                                    +this.props.value.address.pincode+','
                                    +this.props.value.address.state+','
                                    +this.props.value.address.country+','} />
                <br/>
                <Button type='submit' onClick={this.showModal1}>More Info</Button>
                <Button type='submit' onClick={this.showModal2}>Extra Facility</Button>
                <div>
                    <Modal
                    title={<h2>Complet Information Is Here ...</h2>}
                    visible={this.state.visible1}
                    onOk={this.handleOk1}
                    onCancel={this.handleCancel1}
                    
                    >
                       <MoreInfo id={this.props.value._id}/> 
                    </Modal>
                </div>
                <div>
                    <Modal
                    title={<h2>Extra Facility Is Here ...</h2>}
                    visible={this.state.visible2}
                    onOk={this.handleOk2}
                    onCancel={this.handleCancel2}
                    
                    >
                       <ExtraInfo id={this.props.value._id}/> 
                    </Modal>
                </div>
            </Card>
        )
    }
}
