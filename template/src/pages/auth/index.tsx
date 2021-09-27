import { useEffect } from 'react';
import AuthLoader from 'components/auth/loader';
import AuthComponent from 'components/auth/index';
import { useRouter } from 'hooks/useRouter';
import { useAppDispatch } from 'hooks/rtk';
import { setEmailAction, setUsernameAction } from 'store/slices/userSlice';
import { AuthContainer, LogoHeading, AuthBox } from 'styles/auth/auth.styled';
import { useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { CHECK_EMAIL } from 'apollo/queries/checkEmail';
import { authInitVariant } from 'animations/auth';

const AuthPage = () => {

    const router = useRouter();

    const [email, setEmail] = useState<string>('');
    const [checkEmailQuery, { data }] = useLazyQuery(CHECK_EMAIL, {
        onError: (err) => {
            alert(err);
        }
    });

    const [loading, setLoading] = useState<boolean>(false);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (data !== undefined) {
            dispatch(setEmailAction(email));
            dispatch(setUsernameAction(data.checkEmail?.username));
            if (data.checkIfUserExists === 'Login') {
                router.push('/auth/login');
            } else {
                router.push('/auth/register');
            }
        }

    }, [data, dispatch, email, router]);

    return (
        <AuthContainer variants={authInitVariant} initial="hidden" animate="visible">
            <LogoHeading>WorkHour</LogoHeading>
            <AuthBox>
                {
                    loading ?
                        <AuthLoader /> :
                        <AuthComponent
                            checkEmailQuery={checkEmailQuery}
                            email={email} setEmail={setEmail} setLoading={setLoading}
                            isApi={'false'}
                        />
                }

            </AuthBox>
        </AuthContainer>
    );
};


export default AuthPage;