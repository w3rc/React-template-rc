import { CircularProgress } from '@material-ui/core';
import { VerticalGap } from 'styles/globals';
import { AuthContainer, LogoHeading, AuthBox, AuthButton } from 'styles/auth/auth.styled';
import { useAppDispatch, useAppSelector } from 'hooks/rtk';
import { setLoggedIn, userData } from 'store/slices/userSlice';
import { useMutation } from '@apollo/client';
import { ADD_USER } from 'apollo/mutations/addUser';
import { useEffect } from 'react';
import { useRouter } from 'hooks/useRouter';
import { authVariant } from 'animations/auth';

const RegisterPageConfirmation = () => {
    const router = useRouter();

    const user = useAppSelector(userData);
    const dispatch = useAppDispatch();

    const [addUserMutation, { data, loading }] = useMutation(ADD_USER);

    useEffect(() => {
        if (data) {
            const isApi = localStorage.getItem('isApi');
            const referrer = localStorage.getItem('referrer');

            if (isApi && referrer) {
                const responseObj = {
                    ...data?.loginUser.payload,
                    token: null,
                    refreshToken: null
                };

                const responseObjString = JSON.stringify(responseObj);
                const base64ResponseObj = btoa(responseObjString);

                router.push(`${referrer}?auth=${base64ResponseObj}`);
            } else {

                localStorage.setItem('token', data?.signupUser.token);
                localStorage.setItem('refreshToken', data?.signupUser.refreshToken);
                dispatch(setLoggedIn(true));
                router.push('/freelancer');
            }
        }
    }, [data, router, dispatch]);

    const addUser = () => {
        addUserMutation({
            variables: {
                name: user.fullName,
                username: user.userName,
                email: user.email,
                dateOfBirth: user.dateOfBirth,
                gender: user.gender,
                phoneNumber: user.phoneNumber,
                language: user.language,
                city: user.address.city,
                country_code: user.address.country_code,
                country_name: user.address.country_name,
                latitude: user.address.latitude,
                roles: user.roles,
                longitude: user.address.longitude,
                postal: user.address.postal,
                defaultRole: user.defaultRole,
                state: user.address.state,
                password: user.password,
                provider: user.provider,
                ip: user.ip,

            }
        });
    };

    return (
        <AuthContainer variants={authVariant} initial="hidden" animate="visible">
            <LogoHeading>Entrawpy</LogoHeading>
            <AuthBox style={{ padding: '25px 40px' }}>
                <h3 style={{ maxWidth: 350, textAlign: 'justify' }}>You must agree to the terms and conditions in order to use our sevices</h3>
                <ul>
                    <li style={{ cursor: 'pointer' }}><h2>Terms & Conditions</h2></li>
                    <li style={{ cursor: 'pointer' }}><h2>Privacy Policy</h2></li>
                </ul>

                <VerticalGap gap={20} />
                {/* If redirect uri -> go back to the subdomain */}
                <AuthButton style={{ background: 'crimson', color: 'white', opacity: 0.9 }} onClick={addUser}>{loading ? <CircularProgress size="18px" /> : 'I AGREE'}</AuthButton>
                {!loading && <AuthButton >CANCEL</AuthButton>}
            </AuthBox>
        </AuthContainer>
    );
};

export default RegisterPageConfirmation;