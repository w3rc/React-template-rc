// import { useRouter } from 'next/router';

import { VerticalGap } from 'styles/globals';
import { AuthContainer, LogoHeading, AuthBox, AuthButton, EmailText, BirthdayInput } from 'styles/auth/auth.styled';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks/rtk';
import { setGenderAction, setNameAction, setUsernameAction, setBirthdayAction, userData } from 'store/slices/userSlice';
import { validateNames } from 'validators/nameValidator';
import { validateLimit } from 'validators/limitValidator';
import { genders, months } from 'data/general';
import { useRouter } from 'hooks/useRouter';
import { authVariant } from 'animations/auth';

const RegisterPage = () => {
    const router = useRouter();

    const user = useAppSelector(userData);

    const [name, setName] = useState<string>('');
    const [username, setUsername] = useState<string>(user?.userName);
    const [gender, setGender] = useState<string>(genders[0]);
    const [customGender, setCustomGender] = useState<string>('');
    const [birthdayDate, setBirthdayDate] = useState<number>(1);
    const [birthdayMonth, setBirthdayMonth] = useState<string>(months[0]);
    const [birthdayYear, setBirthdayYear] = useState<number>(1980);

    const [errors, setErrors] = useState<{ name: string, message: string; } | undefined>();

    const dispatch = useAppDispatch();

    const goToSecurityPage = (event: any) => {
        event?.preventDefault();
        setErrors(undefined);
        try {
            const validName = validateNames("name", name);
            dispatch(setNameAction(validName.value));
            console.log(errors);
            const validUsername = validateNames("username", username);
            dispatch(setUsernameAction(validUsername.value));
            if (gender === genders[3]) {
                const validGender = validateNames("gender", customGender);
                dispatch(setGenderAction(validGender.value));
            } else {
                dispatch(setGenderAction(gender));
            }
            const validBirthDate = validateLimit("birthDate", birthdayDate, 1, 31);
            const validBirthYear = validateLimit("birthYear", birthdayYear, new Date().getFullYear() - 100, new Date().getFullYear() - 10);

            const dateOfBirthEpoch = new Date(`${months.indexOf(birthdayMonth) + 1}/${validBirthDate.value}/${validBirthYear.value}`).getTime();
            dispatch(setBirthdayAction(dateOfBirthEpoch));

            router.push('/auth/register/security');
        } catch (e: any) {
            console.log(e);
            setErrors({ name: e?.name, message: e?.message });
        }
    };

    const errorMessage =
        <p style={{ color: 'red', maxWidth: '20em', margin: '8px 0', fontWeight: 450, fontSize: 14 }}>{errors?.message}</p>;

    return (
        <AuthContainer variants={authVariant} initial="hidden" animate="visible">
            <LogoHeading>App</LogoHeading>
            <AuthBox style={{ padding: '25px 40px' }}>
                <h3 style={{ margin: 'auto' }}>Create Account</h3>
                <VerticalGap gap={10} />
                <EmailText>{user.email}</EmailText>
                <VerticalGap gap={25} />
                <form onSubmit={goToSecurityPage}>
                    <h4>Enter your Name</h4>
                    <input type="text" value={name} onChange={(e: any) => { setName(e?.target.value); }} />
                    {errors?.name === 'name' && errorMessage}
                    <h4>Choose a Username</h4>
                    <input type="text" value={username} onChange={(e: any) => { setUsername(e?.target.value); }} />
                    {errors?.name === 'username' && errorMessage}
                    {/* Can't use special characters */}
                    <h4>Select your Gender</h4>
                    <select value={gender} onChange={(e: any) => { setGender(e?.target.value); }}>
                        <option value="" disabled>Gender</option>
                        {
                            genders.map((gender: string) =>
                                <option key={gender} value={gender}>{gender}</option>
                            )
                        }
                    </select>
                    {gender !== 'Male' && gender !== 'Female' && gender !== 'Prefer not say' &&
                        <>
                            <h4>Enter your Gender</h4>
                            <input type="text" value={customGender} onChange={(e: any) => { setCustomGender(e?.target.value); }} />
                            {errors?.name === 'gender' && errorMessage}
                        </>
                    }
                    <h4>Enter your Birthday</h4>
                    <BirthdayInput>
                        <input type="number" onChange={(e: any) => { setBirthdayDate(e?.target.value); }} value={birthdayDate} min={1} max={31} />

                        <select value={birthdayMonth} placeholder="Select option" onChange={(e: any) => { setBirthdayMonth(e?.target.value); }}>
                            {
                                months.map((month: string) =>
                                    <option key={month} value={month}>{month}</option>
                                )
                            }
                        </select>

                        <input type="number" value={birthdayYear} onChange={(e: any) => { setBirthdayYear(e?.target.value); }} min={new Date().getFullYear() - 100} max={new Date().getFullYear() - 10} />
                    </BirthdayInput>
                    {(errors?.name === "birthYear" || errors?.name === "birthDate") && errorMessage}

                    <VerticalGap gap={25} />
                    <AuthButton type="submit" style={{ background: 'crimson', color: 'white', opacity: 0.9 }} onClick={goToSecurityPage}>Next</AuthButton>
                </form>
            </AuthBox>
        </AuthContainer>
    );
};

export default RegisterPage;