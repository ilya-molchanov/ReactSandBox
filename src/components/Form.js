import React from 'react'

class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            card: ''
        }
        this.cardRef = React.createRef();
        this.emailRef = React.createRef();
    }

    // state = {
    //     firstName: '',
    //     email: '',
    //     message: '',
    //     select: '',
    //     subscription: false,
    //     gender: 'male'
    // }
    // state = {
    //     email: '',
    //     isAgreeWithTerms: false
    // }

    handleChange = (event) => {
        // this.setState({[event.target.name]: event.target.value});
        this.setState(() => ({[event.target.name]: event.target.value}), () => {
            if (this.state.card.length === 16) {
                this.emailRef.current.focus();
            }
        });
    }

    handleCheckboxChange = (event) => {
        // this.setState({[event.target.name]: event.target.checked})
        // this.setState({isAgreeWithTerms: event.target.checked})
    }

    validateName = () => {
        // if (this.state.firstName.length < 5) {
        //     alert('Your first name can\'t be less than 5 letters');
        // }
    }

    validateEmail = () => {
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email)) {
            alert('email is not valid');
        }
    }

    handleSubmit = (event) => {
        // const isValidEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email);
        // const isValidCheck = this.state.isAgreeWithTerms;
        // if (!isValidEmail) {
        //     alert('email is not valid');
        //     return;
        // }
        // if (!isValidCheck) {
        //     alert('You should accept all terms and conditions');
        //     return;
        // }
        // this.setState({email: '', isAgreeWithTerms: false});
        // alert('Thank You');
        event.preventDefault();
        if (this.cardRef.current.value.length < 16) {
            alert('card number is not valid');
            return;
        }
        const isValidEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.emailRef.current.value);
        
        if (!isValidEmail) {
            alert('email is not valid');
            return;
        }

        // send
        this.cardRef.current.value = '';
        this.emailRef.current.value = '';
    }

    componentDidMount() {
        console.log(this.cardRef);
        // this.cardRef.current.focus();
    }

    render() {
        // const {firstName, email, message, select, subscription, gender} = this.state;
        // const {email, isAgreeWithTerms} = this.state;
        // const {card, email} = this.state;
        return <form>
            {/* value={card} */}
            <input 
                type="text"
                name="card"
                placeholder="card"
                
                onChange={this.handleChange}
                onBlur={this.validateName}
                ref={this.cardRef} /> 
            {/* value={email} */}
            <input 
                type="text"
                name="email"
                placeholder="email"
                
                onChange={this.handleChange}
                ref={this.emailRef}
            /> 
            <button onClick={this.handleSubmit}>Send</button>
            {/*
            <div>
            <input 
                type="text"
                name="firstName"
                placeholder="firstName"
                value={firstName}
                onChange={this.handleChange}
                onBlur={this.validateName} /> 
            
            <input 
                type="text"
                name="email"
                placeholder="email"
                value={email}
                onChange={this.handleChange}
                onBlur={this.validateEmail} />
            
            <br />
            <label>
                <input 
                    type="checkbox" name="isAgreeWithTerms"
                    checked={isAgreeWithTerms}
                    onChange={this.handleCheckboxChange}
                />
                I agree with terms and conditions
            </label>
            <br />
            
            <button onClick={this.handleSubmit}>Send</button>
            <textarea
                name="message"
                value={message} 
                onChange={this.handleChange} />
            <br />
            <select 
                name="select"
                value={select}
                onChange={this.handleChange} >
                <option value="" disabled></option>    
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
            <br />
            <label>
                <input 
                    type="checkbox" name="subscription"
                    checked={subscription}
                    onChange={this.handleCheckboxChange}
                />
                Subscription
            </label>
            <br />
            <input type="radio" name="gender" value="male"
                onChange={this.handleChange}
                checked={gender === "male"}
            />Male
            <input type="radio" name="gender" value="female"
                onChange={this.handleChange}
                checked={gender === "female"}
            />Female 
        </div>*/}
        </form>
    }
}

export {Form}