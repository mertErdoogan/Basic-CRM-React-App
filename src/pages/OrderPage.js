import React, {Component} from 'react';
import MenuComponent from "../components/MenuComponent";
import OrderItem from '../components/OrderItem';
import OrderFormComponent from '../components/OrderFormComponent';
import OrderReformComponent from "../components/orderReformComponent";

class OrderPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isFormOpen: false,
            isReformOpen: false,
            reformDataId: null,
        }
    }

    handleReformDataId = (id) => {
        this.setState({
            reformDataId: id
        })
    }

    handleFormLb = () => {
        let status = this.state.isFormOpen;

        if(!status) {
            status = !status;
        } else {
            status = false;
        }

        this.setState({
            isFormOpen: status
        })
    }

    handleReformLb = () => {
        let status = this.state.isReformOpen;

        if(!status) {
            status = !status;
        } else {
            status = false;
        }

        this.setState({
            isReformOpen: status
        })
    }

    render() {
        const { orders, handleDeleteOrder, handleReformOrderChange, onReformDataSubmit } = this.props;
        const { isFormOpen, reformDataId, isReformOpen } = this.state;
        return (
            <div className="panel-root">
                <MenuComponent/>
                <div className="order-root">
                    <div className="order-wrapper">
                        <div className="order-container">
                            <h1>Siparişler</h1>
                            <div className="order-list-block">
                                {
                                    orders && orders.map((item, id) => <OrderItem
                                        key={id}
                                        order={item}
                                        handleDeleteOrder={handleDeleteOrder}
                                        handleReformDataId={this.handleReformDataId}
                                        isReformOpen={isReformOpen}
                                        handleReformLb={this.handleReformLb}
                                    />
                                    )
                                }
                                <OrderReformComponent
                                    handleReformLb={this.handleReformLb}
                                    isReformOpen={isReformOpen}
                                    handleReformOrderChange={handleReformOrderChange}
                                    reformDataId={reformDataId}
                                    onReformDataSubmit={onReformDataSubmit}
                                    handleResetReformInput={this.props.handleResetReformInput}/>
                            </div>
                            <div className="newItemBtn" onClick={() => this.handleFormLb()}>Yeni Sipariş Oluştur</div>
                            <OrderFormComponent
                                onFormDataSubmit={this.props.onFormDataSubmit}
                                onFormDataChange={this.props.onFormDataChange}
                                isFormOpen={isFormOpen}
                                handleFormLb={this.handleFormLb}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default OrderPage;