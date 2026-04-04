"use client";

const ACTION_NAME = "signUp";

export async function getRecaptchaToken() {
	return new Promise<string>((resolve, reject) => {
		grecaptcha.ready(async () => {
			const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

			if (!siteKey) {
				reject(null);
				return;
			}

			try {
				const token = await grecaptcha.execute(siteKey, {
					action: ACTION_NAME,
				});

				resolve(token);
			} catch (error) {
				reject(error);
			}
		});
	});
}
