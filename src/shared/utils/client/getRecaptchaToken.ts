"use client";

export default async function getRecaptchaToken(actionName: string) {
	return new Promise<string>((resolve, reject) => {
		grecaptcha.ready(async () => {
			const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

			if (!siteKey) {
				reject(null);
				return;
			}

			try {
				const token = await grecaptcha.execute(siteKey, {
					action: actionName,
				});

				resolve(token);
			} catch (error) {
				reject(error);
			}
		});
	});
}
