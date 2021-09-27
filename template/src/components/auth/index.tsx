import { Dispatch, SetStateAction, useState } from 'react';
import { OperationVariables, QueryLazyOptions } from '@apollo/client';

import { AiOutlineMail, AiOutlineGoogle } from 'react-icons/ai';

import { VerticalGap } from 'styles/globals';
import { AuthButton } from 'styles/auth/auth.styled';
import axios from 'axios';
import { setAddressAction, setIPAction, setLanguageAction, userData } from 'store/slices/userSlice';
import { useAppDispatch, useAppSelector } from 'hooks/rtk';
import { validateEmail } from 'validators/emailValidator';

const AuthComponent = ({ checkEmailQuery, email, setEmail, setLoading, isApi }: { checkEmailQuery: (options?: QueryLazyOptions<OperationVariables> | undefined) => void; email: string; setEmail: Dispatch<SetStateAction<string>>; setLoading: Dispatch<SetStateAction<boolean>>; isApi: string | string[] | undefined; }) => {

    const [err, setErr] = useState<string>();

    const user = useAppSelector(userData);
    const dispatch = useAppDispatch();

    const getIp = async () => {
        const res = await axios.get('https://geolocation-db.com/json/');
        return res.data;
    };

    const checkEmailAndFetchIp = async (event: any) => {
        event?.preventDefault();
        setErr(undefined);

        try {
            const validEmail = validateEmail(email);
            setLoading(true);
            const res: any = await getIp();
            dispatch(setIPAction(res?.IPv4));
            dispatch(setLanguageAction(navigator.language));
            dispatch(setAddressAction({
                city: res?.city,
                country_code: res?.country_code,
                country_name: res?.country_name,
                latitude: res?.latitude,
                longitude: res?.longitude,
                postal: res?.postal,
                state: res?.state
            }));
            if (!err) {
                checkEmailQuery({
                    variables: {
                        email: validEmail.value,
                        defaultRole: user.defaultRole
                    }
                });
            }

        } catch (e: any) {
            console.log(err);
            setErr(e?.message);
        }
    };

    return (
        <>
            <form onSubmit={checkEmailAndFetchIp}>
                <h4>Enter your email</h4>
                <input autoFocus type="email" value={email} onChange={(e: any) => setEmail(e?.target.value)} />
                {err && <p style={{ color: 'red', margin: '8px 0', fontWeight: 450 }}>Enter a valid email</p>}
                <h5 style={{ cursor: 'pointer' }}>Forgot Email ?</h5>
                {isApi === 'true' && <VerticalGap gap={10} />}
                <AuthButton type="submit" onClick={checkEmailAndFetchIp} style={{ background: 'hsl(249, 85%, 39%)', color: 'white', opacity: 0.9 }}>
                    <AiOutlineMail fontSize={25} style={{ marginRight: '0.5em' }} />
                    {isApi !== 'true' ? 'Continue with Email' : 'Continue'}
                </AuthButton>
            </form>
            <VerticalGap gap={5} />
            <p style={{
                margin: 'auto', fontWeight: 500
            }}>OR</p>
            <VerticalGap gap={5} />
            <AuthButton style={{ background: 'hsl(5, 81%, 56%)', color: 'white', marginBottom: -10 }}>
                <AiOutlineGoogle fontSize={25} style={{ marginRight: '0.5em' }} />
                Continue with Google
            </AuthButton>

        </>

    );
};

export default AuthComponent;;