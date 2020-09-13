import React, {Component} from 'react';

class OrderReformComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nameValue: "Müşteri Adi",
            productValue: "Ürün ismi",
            countValue: "Miktar"
        }
    }

    handleChange = ((event) => {
        const orderId = this.props.reformDataId;
        event.preventDefault();
        this.props.handleReformOrderChange(event.target.name, event.target.value, orderId);
    });

    render() {
        const { nameValue, productValue, countValue } = this.state;
        const { isReformOpen, handleReformLb, handleResetReformInput } = this.props;
        return (
            <div className={`order-form-root ${isReformOpen ? "open" : ""}`}>
                <div className="order-form-wrapper">
                    <div className="order-form-container">
                        <h1>Sipariş Düzenleme</h1>
                        <form ref={(data) => this.reformDataRef = data} onSubmit={() => this.props.onReformDataSubmit}>
                            <label className="form-label">
                                <input className="form-input" name={"name"} type="text" placeholder={nameValue} onChange={this.handleChange}/>
                            </label>
                            <label className="form-label">
                                <input className="form-input" name={"product"} type="text" placeholder={productValue} onChange={this.handleChange}/>
                            </label>
                            <label className="form-label">
                                <input className="form-input" name={"count"} type="number" placeholder={countValue} onChange={this.handleChange}/>
                            </label>
                            <input onClick={() => {
                                handleReformLb();
                                handleResetReformInput(isReformOpen);
                                this.reformDataRef.reset();
                            }} className="newItemBtn" type="submit" value={"Gönder"}></input>
                            <div onClick={() => {
                                handleReformLb();
                            }} className="close-btn">X</div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default OrderReformComponent;