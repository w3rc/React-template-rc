import Joi from 'joi';

export const validateNames = (name: string, value: string) => {
	const schema = Joi.string().regex(/[$()<>@$!^&#*[]\+-\/]/, {
		invert: true
	});
	const validation = schema.validate(value);

	if (validation.error) {
		if (value.trim() === '') {
			let err = new Error(
				name.charAt(0).toUpperCase() + name.slice(1) + ' cannot be empty'
			);
			err.name = name;
			throw err;
		}
		let err = new Error(
			'Cannot use special characters in ' +
				name.charAt(0).toUpperCase() +
				name.slice(1)
		);
		err.name = name;
		throw err;
	}
	return validation;
};
