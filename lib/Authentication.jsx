import { Component } from "react";
import { connect } from "react-redux";
import { Login } from "../components";
import { Container, Card } from "@material-ui/core";
import css from "../less";

const mapStateToProps = state => ({
    isAuthenticated: state.isAuthenticated
});

export default function withAuth(AuthComponent) {
    class Authentication extends Component {
        constructor(props) {
            super(props);
        }
    
        componentDidMount() {
            console.log(this.props);
        }
    
        render() {
            return this.props.isAuthenticated ? <AuthComponent {...this.props} /> : (
                <Container maxWidth="sm">
                    <Card className={css.padded}>
                        <Login />
                    </Card>
                </Container>
            );
        }
    }

    return connect(
        mapStateToProps,
        null
    )(Authentication);
};