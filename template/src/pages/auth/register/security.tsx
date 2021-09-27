import { VerticalGap } from 'styles/globals';
import { AuthContainer, LogoHeading, AuthBox, AuthButton, EmailText } from 'styles/auth/auth.styled';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks/rtk';
import { setPasswordAction, userData } from 'store/slices/userSlice';
import { validatePwd } from 'validators/passwordValidator';
import { useRouter } from 'hooks/useRouter';
import { authVariant } from 'animations/auth';

const RegisterPageSecurity = () => {
    const router = useRouter();

    const user = useAppSelector(userData);

    // const [countryDialCode, setCountryDialCode] = useState<string>('+93');
    // const [phone, setPhone] = useState<number>();
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');

    const [errors, setErrors] = useState<{ name: string, message: string; } | undefined>();

    const dispatch = useAppDispatch();

    const goToConfirmation = (event: any) => {
        event.preventDefault();
        setErrors(undefined);
        try {
            // if (phone !== undefined) {
            //     const validPhone = validatePhone(phone);
            //     dispatch(setPhoneNumberAction(`${countryDialCode}-${validPhone.value}`));
            // }
            if (password === confirmPassword) {
                const validPwd = validatePwd(password);
                dispatch(setPasswordAction(validPwd.value));
            } else {
                let err = new Error(
                    'Password and Confirm Password must be same'
                );
                err.name = 'confirmPassword';
                throw err;
            }
            router.push('/auth/register/confirmation');
        } catch (e: any) {
            setErrors({ name: e?.name, message: e?.message });
        }
    };

    const errorMessage =
        <p style={{ color: 'red', maxWidth: '20em', margin: '8px 0', fontWeight: 450, fontSize: 14 }}>{errors?.message}</p>;

    return (
        <AuthContainer variants={authVariant} initial="hidden" animate="visible">
            <LogoHeading>Entrawpy</LogoHeading>
            <AuthBox style={{ padding: '25px 40px' }}>
                <h3 style={{ margin: 'auto' }}>Secure your account</h3>
                <VerticalGap gap={15} />
                <EmailText>{user.email}</EmailText>
                <VerticalGap gap={25} />

                <form onSubmit={goToConfirmation}>
                    {/* <h4>Phone Number(optional)</h4>
                    <PhoneInput>
                        <select value={countryDialCode} onChange={(e: any) => { setCountryDialCode(e?.target.value); }}>
                            {
                                countryCodes.map((countryCode: any) =>
                                    <option key={countryCode.code} value={countryCode.dial_code}>{countryCode.code}</option>
                                )
                            }
                        </select>
                        <input type="text" style={{ maxWidth: 80, border: 'none', marginRight: -100 }} value={`(${countryDialCode})`} readOnly />
                        <input type="number" value={phone} onChange={(e: any) => { setPhone(e?.target.value); }} style={{ paddingLeft: 60, background: 'transparent' }} />
                    </PhoneInput>
                    {errors?.name === 'phone' && errorMessage} */}
                    <h4>Enter your Password</h4>
                    <input type="password" value={password} onChange={(e: any) => { setPassword(e?.target.value); }} />
                    {errors?.name === 'password' && errorMessage}
                    <h4>Confirm Password</h4>
                    <input type="password" value={confirmPassword} onChange={(e: any) => { setConfirmPassword(e?.target.value); }} />
                    {errors?.name === 'confirmPassword' && errorMessage}
                    <VerticalGap gap={25} />
                    <AuthButton type="submit" style={{ background: 'crimson', color: 'white', opacity: 0.9, marginBottom: -5 }} onClick={goToConfirmation}>Next</AuthButton>
                </form>
            </AuthBox>
        </AuthContainer>
    );
};

export default RegisterPageSecurity;