import React, {Component} from 'react';

class OrderFormComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            nameValue: "Müşteri Adi",
            productValue: "Ürün ismi",
            countValue: "Miktar"
        }
    }

    handleChange = ((event) => {
        event.preventDefault();
        console.log(event.target.value)
        this.props.onFormDataChange(event.target.name, event.target.value);
    });

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onFormDataSubmit();
        this.formDataRef.reset();
    }

    render() {
        const { nameValue, productValue, countValue } = this.state;
        const { isFormOpen, handleFormLb } = this.props;
        return (
            <div className={`order-form-root ${isFormOpen ? "open" : ""}`}>
                <div className="order-form-wrapper">
                    <div className="order-form-container">
                        <h1>Yeni Sipariş Girişi</h1>
                        <form ref={(data) => this.formDataRef = data} onSubmit={this.handleSubmit}>
                            <label className="form-label">
                                <input className="form-input" name={"name"} type="text" placeholder={nameValue} onChange={this.handleChange}/>
                            </label>
                            <label className="form-label">
                                <input className="form-input" name={"product"} type="text" placeholder={productValue} onChange={this.handleChange}/>
                            </label>
                            <label className="form-label">
                                <input className="form-input" name={"count"} type="number" placeholder={countValue} onChange={this.handleChange}/>
                            </label>
                            <input onClick={() => handleFormLb()} className="form-btn" type="submit" value="Gönder"/>
                        </form>
                        <div onClick={() => {
                            handleFormLb();
                        }} className="close-btn">X</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default OrderFormComponent;