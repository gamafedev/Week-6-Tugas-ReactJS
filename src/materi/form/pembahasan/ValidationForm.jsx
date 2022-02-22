import React from "react";

const Input = ({ Label, type, name, onChange }) => {
    return (
        <div>
            <label>{Label}: </label>
            <br />
            <input type={type} name={name} onChange={e => onChange(e.target.value)} />
            <br />
        </div>
    )
}

const ShowErrors = ({ errors }) => {
    return (
        <ul style={{ color: 'red' }}>
            {
                errors.map((error, i) => <li key={i}>{error}</li>)
            }
        </ul>
    )
}

export default class ValidationForm extends React.Component {
    state = {
        email: '',
        password: '',
        errors: []
    }

    handleLogin = event => {
        event.preventDefault();
        const { email, password } = this.state;

        let message = [];
        if (email.length === 0) {
            message = [...message, 'Email tidak boleh kosong'];
        }

        if (password.length === 0) {
            message = [...message, 'Password tidak boleh kosong'];
        }

        if (message.length > 0) {
            this.setState({
                errors: message
            }, () => console.log(this.state.errors))
        }
    }
    render() {
        const style = {
            width: '400px',
            margin: '100px auto 0',
            border: '1px solid black',
            padding: '10px'
        }

        return (
            <div style={style}>
                {
                    this.state.errors && <ShowErrors errors={this.state.errors} />
                }
                <h3>Login Page</h3>
                <form onSubmit={this.handleLogin}>
                    <Input
                        type="email"
                        name="email"
                        Label="Email"
                        onChange={value => this.setState({ email: value })} />

                    <Input
                        type="password"
                        name="password"
                        Label="Password"
                        onChange={value => this.setState({ password: value })} />
                    <br />
                    <button type="submit">Login</button>
                </form>
            </div>
        )
    }
}