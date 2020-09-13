import React, {Component} from 'react';

class OrderItem extends Component {

    render() {
        const { order, handleReformDataId, handleDeleteOrder, handleReformLb } = this.props;
        return (
            <div className="order-item">
                <div className="info-item">
                    <p className="desc">{ order.name }</p>
                    <p>Adet: { order.count}</p>
                </div>
                <div className="process-item">
                    <a onClick={() => {
                        handleReformDataId(order.id);
                        handleReformLb();
                    }}> D </a>
                    <a onClick={() => handleDeleteOrder(order.id)}> Sil </a>
                </div>
            </div>
        );
    }
}

export default OrderItem;