interface LoginState {
    showPassword: boolean;
    loginDisabled: boolean;
    credentials: {
        username: string;
        password: string;
    };
}

export default LoginState;