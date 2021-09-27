import Joi, { ValidationError } from 'joi';

export const validateEmail = (email: string) => {
	const schema = Joi.string()
		.trim()
		.email({ tlds: false })
		.lowercase()
		.required();
	const validation = schema.validate(email);

	if (validation.error) {
		throw new ValidationError('Enter a valid email', '', '');
	}
	return validation;
};
