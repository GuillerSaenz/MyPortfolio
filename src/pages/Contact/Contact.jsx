import { useState } from "react";

import "./Contact.css";

const validateEmail = (email) => {
	if (!email.includes("@")) return false;

	const parts = email.split("@");
	if (parts.length !== 2) return false;

	const domainParts = parts[1].split(".");
	if (domainParts.length < 2) return false;

	const tld = domainParts[domainParts.length - 1];
	return tld.length > 1;
};

export function Contact() {
	const [formData, setFormData] = useState({ name: "", email: "", message: "" });
	const [errors, setErrors] = useState({});

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
		setErrors({ ...errors, [e.target.name]: "" });
	};

	const handleBlur = (e) => {
		const { name, value } = e.target;
		const validationErrors = {};
		if (!value) {
			validationErrors[name] = `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;
		} else if (name === "email" && !validateEmail(value)) {
			validationErrors.email = "Valid email is required";
		}
		setErrors({ ...errors, ...validationErrors });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const validationErrors = {};
		if (!formData.name) validationErrors.name = "Name is required";
		if (!formData.email || !validateEmail(formData.email)) validationErrors.email = "Valid email is required";
		if (!formData.message) validationErrors.message = "Message is required";
		setErrors(validationErrors);
		if (Object.keys(validationErrors).length === 0) {
			// Handle form submission...
		}
	};

	return (
		<div className="contact">
			<div className="form__container">
				<form
					onSubmit={handleSubmit}
					className="form"
				>
					<h2 className="form__title">Contact me</h2>
					<label className="form__label">
						Name
						<input
							type="text"
							name="name"
							value={formData.name}
							onChange={handleChange}
							onBlur={handleBlur}
							className="form__input"
						/>
					</label>
					{errors.name && <p className="form__error">{errors.name}</p>}
					<label className="form__label">
						E-mail
						<input
							type="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							onBlur={handleBlur}
							className="form__input"
						/>
					</label>
					{errors.email && <p className="form__error">{errors.email}</p>}
					<label className="form__label">
						Message
						<textarea
							rows={4}
							name="message"
							value={formData.message}
							onChange={handleChange}
							onBlur={handleBlur}
							className="form__textarea"
						></textarea>
					</label>
					{errors.message && <p className="form__error">{errors.message}</p>}
					<button
						type="submit"
						className="form__submit button"
					>
						Contactame
					</button>
					<div className="form__otherWays">
						<p className="form__otherWaysTitle">Other ways to contact me</p>
						<p className="form__otherWaysEmail">E-mail: me@myself.com</p>
						<p className="form__otherWaysPhoneNumber">Phone number: 956 555 1234</p>
					</div>
				</form>
			</div>
		</div>
	);
}