import { VerticalGap } from 'styles/globals';
import { AuthContainer, LogoHeading, AuthBox, AuthButton, EmailText } from 'styles/auth/auth.styled';
import { useEffect, useState } from 'react';
import { LOGIN_USER } from 'apollo/queries/loginUser';
import { useRouter } from 'hooks/useRouter';
import { useMutation } from '@apollo/client';
import { useAppDispatch, useAppSelector } from 'hooks/rtk';
import { setGenderAction, setLoggedIn, setNameAction, setUsernameAction, userData } from 'store/slices/userSlice';
import { CircularProgress } from '@material-ui/core';
import jwtDecode from 'jwt-decode';
import { authVariant } from 'animations/auth';

const LoginPage = () => {
    const router = useRouter();

    const [password, setPassword] = useState('');

    const user = useAppSelector(userData);

    console.log('render');

    const [loginUserQuery, { loading, data, error }] = useMutation(LOGIN_USER, {
        onError: (err) => {
            alert(err);
        }
    });
    const [errors, setErrors] = useState<{ message: string | undefined; } | undefined>();

    useEffect(() => {
        setErrors({ message: error?.message });
    }, [error]);

    const dispatch = useAppDispatch();

    useEffect(() => {
        if (data) {
            const token = data.loginUser;
            const decodedToken: any = jwtDecode(token);
            console.log(decodedToken);
            if (decodedToken.exp < new Date().getTime() / 1000) {
                alert('JWT Expired');
            } else {
                localStorage.setItem('token', token);
                dispatch(setLoggedIn(true));
                dispatch(setNameAction(decodedToken?.name));
                dispatch(setUsernameAction(decodedToken?.username));
                dispatch(setGenderAction(decodedToken?.gender));

                router.push('/freelancer');

            }
        }

    }, [data, dispatch, router]);

    const loginUser = (event: any) => {
        event?.preventDefault();
        try {
            console.log({ user });
            loginUserQuery({
                variables: {
                    email: user.email,
                    password,
                    ip: user.ip
                }
            });
        } catch (e: any) {
            setErrors({ message: e?.message });
        }
    };

    const errorMessage =
        <p style={{ color: 'red', maxWidth: '20em', margin: '8px 0', fontWeight: 450, fontSize: 14 }}>{errors?.message?.split(':')[1]?.trim()}</p>;

    return (
        <AuthContainer variants={authVariant} initial="hidden" animate="visible">
            <LogoHeading>AppName</LogoHeading>
            <AuthBox>
                <h2 style={{ margin: 'auto' }}>Welcome</h2>
                <VerticalGap gap={15} />
                <EmailText>{user.email}</EmailText>
                <VerticalGap gap={30} />
                <form onSubmit={loginUser}>
                    <h3>Enter your password</h3>
                    <input autoFocus type="password" value={password} onChange={(e: any) => { setPassword(e?.target.value); }} />
                    {errors !== undefined && errorMessage}
                    <VerticalGap gap={15} />
                    <AuthButton type="submit" style={{ background: 'hsl(249, 85%, 39%)', color: 'white', opacity: 0.9 }} onClick={loginUser}>{loading ? <CircularProgress size="18px" /> : 'Login'}</AuthButton>
                </form>
                <AuthButton style={{ background: 'red', color: 'white', opacity: 0.9 }} onClick={() => router.push('/auth')}>{loading ? <CircularProgress size="18px" /> : 'Cancel'}</AuthButton>
            </AuthBox>
        </AuthContainer>
    );
};

export default LoginPage;