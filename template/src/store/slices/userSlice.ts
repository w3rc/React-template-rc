import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserRole } from 'types/enums';
import { AppState } from '..';

export interface UserState {
	logged_in: boolean | 'loading' | 'pending';
	defaultRole: UserRole;
	userName: string;
	fullName: string;
	photoURL: string;
	email: string;
	gender: string;
	dateOfBirth: number;
	ip: string;
	language: string;
	address: {
		city: string;
		country_code: string;
		country_name: string;
		latitude: number;
		longitude: number;
		postal: number;
		state: string;
	};
	phoneNumber: string;
	provider: 'password' | 'google';
	password: string;
	roles: UserRole[];
}

const initialState: UserState = {
	logged_in: 'pending',
	defaultRole: UserRole.freelancer,
	userName: '',
	fullName: '',
	photoURL: '',
	email: '',
	gender: 'female',
	ip: '',
	language: '',
	address: {
		city: '',
		country_code: '',
		country_name: '',
		latitude: 0,
		longitude: 0,
		postal: 0,
		state: ''
	},
	dateOfBirth: 0,
	phoneNumber: '',
	provider: 'password',
	password: '',
	roles: [UserRole.freelancer, UserRole.recruiter]
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setLoggedIn: (
			state,
			action: PayloadAction<boolean | 'loading' | 'pending'>
		) => {
			state.logged_in = action.payload;
		},
		setDefaultRoleAction: (state, action: PayloadAction<UserRole>) => {
			localStorage.setItem('defaultRole', action.payload);
			state.defaultRole = action.payload;
		},
		setEmailAction: (state, action: PayloadAction<string>) => {
			state.email = action.payload;
		},
		setIPAction: (state, action: PayloadAction<string>) => {
			console.log({ state });
			state.ip = action.payload;
		},
		setLanguageAction: (state, action: PayloadAction<string>) => {
			state.language = action.payload;
		},
		setAddressAction: (state, action: PayloadAction<any>) => {
			state.address = action.payload;
		},
		setNameAction: (state, action: PayloadAction<string>) => {
			state.fullName = action.payload;
		},
		setUsernameAction: (state, action: PayloadAction<string>) => {
			state.userName = action.payload;
		},
		setGenderAction: (state, action: PayloadAction<string>) => {
			state.gender = action.payload;
		},
		setBirthdayAction: (state, action: PayloadAction<number>) => {
			state.dateOfBirth = action.payload;
		},
		setPasswordAction: (state, action: PayloadAction<string>) => {
			state.password = action.payload;
		},
		setPhoneNumberAction: (state, action: PayloadAction<string>) => {
			state.phoneNumber = action.payload;
		}
	}
});

export const {
	setLoggedIn,
	setDefaultRoleAction,
	setNameAction,
	setIPAction,
	setLanguageAction,
	setAddressAction,
	setBirthdayAction,
	setGenderAction,
	setPasswordAction,
	setPhoneNumberAction,
	setEmailAction,
	setUsernameAction
} = userSlice.actions;

export const userData = (state: AppState) => state.user;

export default userSlice.reducer;
