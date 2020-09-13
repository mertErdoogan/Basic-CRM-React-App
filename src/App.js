import React from 'react';
import OrderPage from "./pages/OrderPage";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            orders: [
                {
                    "id": 1,
                    "name": "Ahmet Yılmaz",
                    "product": "Adobe Photoshop CS",
                    "count": "12"
                },
                {
                    "id": 2,
                    "name": "Kenan Karabulut",
                    "product": "Microsoft Office",
                    "count": "3"
                },
                {
                    "id": 3,
                    "name": "Mahmut Sari",
                    "product": "Antivirüs Programı",
                    "count": "11"
                },
                {
                    "id": 4,
                    "name": "Eda Bulut",
                    "product": "Adobe İllistrator",
                    "count": "34"
                },
                {
                    "id": 5,
                    "name": "İrem Yılmaz",
                    "product": "Adobe Premier Pro",
                    "count": "5"
                }
            ],
            orderForm: [],
            errors: "",
            changingData: []
        }
    }

    handleDeleteOrder = (id) => {

        let orderArray = this.state.orders.filter(item => item.id !== id);
        this.setState({
            orders: [...orderArray]
        })
        console.log(this.state.orders);
    }

    handleReformOrderChange = (formName, formValue, id) => {
        // let tempState = this.state.orders.find((item) => item.id === id);
        let tempState = this.state.changingData;
        const changingDataID = id;
        let value = formValue;
        this.setState({
            changingData: {
                ...tempState,
                "id": changingDataID,
                [formName]: value
            }
        })
        console.log(this.state.changingData);

    }

    handleResetReformInput = () => {
        this.setState({
            changingData: []
        })
    }


    onReformDataSubmit = (id) => {
        let tempObj = [this.state.orders];
        let tempItemIndex = this.state.orders.findIndex(element => element.id === id);
        let tempChangeData = this.state.changingData;
        tempObj[tempItemIndex] = {
            ...tempObj[tempItemIndex],
            name: tempChangeData.name,
            product: tempChangeData.product,
            count: tempChangeData.count
        }
        this.setState({
            orders: tempObj
        })
        console.log(this.state.orders);
    }

    onFormDataChange = (formName, formValue) => {
        let tempState = this.state.orderForm;
        let ordersLen = this.state.orders.length

        let value = formValue;
        this.setState({
            orderForm: {
                ...tempState,
                "id": ++ordersLen,
                [formName]: value,
            }
        })
    };

    handleFormValidation = () => {
        let tempFormData = this.state.orderForm;
        let errors = "";
        let isFormValid = true;

        if(!tempFormData.name || !tempFormData.product || !tempFormData.count) {
            isFormValid = false;
            errors = "Cannot be Empty";

        }

        if(typeof tempFormData.name !== "undefined" || typeof tempFormData.product !== "undefined" || typeof tempFormData.count !== "undefined" ) {
            if(!tempFormData.name.match(/^[a-zA-Z ğĞşŞöÖiüÜ]+$/)) {
                isFormValid = false;
                errors = "Only letters";
            }
            if(!tempFormData.product.match(/^[a-zA-Z ğĞşŞöÖiüÜ]+$/)) {
                isFormValid = false;
                errors = "Only letters";
            }
            if(!tempFormData.count.match(/^[0-9]+$/)) {
                isFormValid = false;
                errors = "Only numbers";
            }
        }

        this.setState({
            errors : errors
        });
        return isFormValid;

    }

    onFormDataSubmit = () => {
        if(this.handleFormValidation()) {
            const tempOrder = [...this.state.orders];

            let tempFormData = [this.state.orderForm];
            this.setState({
                orders: [
                    ...tempOrder,
                    tempFormData[0]
                ]
            })
            console.log(this.state.orderForm)
            console.log(this.state.orders)
            this.handleFormValidation();
            this.setState({
                orderForm: []
            })
        } else {
            alert("Hatalı Form Girişi")
        }

    }


    render() {
        return (
            <div className="App">
                <OrderPage
                    orders={this.state.orders}
                    handleDeleteOrder={this.handleDeleteOrder}
                    onFormDataSubmit={this.onFormDataSubmit}
                    onFormDataChange={this.onFormDataChange}
                    handleReformOrderChange={this.handleReformOrderChange}
                    handleResetReformInput={this.handleResetReformInput}
                    onReformDataSubmit={this.onReformDataSubmit}/>
            </div>
        );
    }
}

export default App;
