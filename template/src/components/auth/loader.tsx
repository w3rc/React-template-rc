import { CircularProgress } from "@material-ui/core";
import { LoadingContainer } from 'styles/auth/auth.styled';

const AuthLoader = () => {
    return (
        <LoadingContainer><h3>Please wait while we check your account</h3>
            <CircularProgress value={6} />
        </LoadingContainer>
    );
};

export default AuthLoader;