import Joi from 'joi';

export const validatePwd = (password: string) => {
	const schema = Joi.string().trim().min(8);
	// .regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/);
	const validation = schema.validate(password);

	if (validation.error) {
		if (password.trim() === '') {
			let err = new Error('Password cannot be empty');
			err.name = 'password';
			throw err;
		}
		console.log(validation.error);
		let err = new Error('Enter a valid password');
		err.name = 'password';
		throw err;
	}
	return validation;
};
