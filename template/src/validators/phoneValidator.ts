import Joi from 'joi';

export const validatePhone = (phone: number) => {
    const schema = Joi.number();

	const validation = schema.validate(phone);

	if (validation.error) {
		console.log(validation.error);
		let err = new Error('Enter a valid phone number');
		err.name = 'phone';
		throw err;
	}
	return validation;
};
