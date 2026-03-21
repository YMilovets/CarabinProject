import { useState } from "react";
import { signIn } from "next-auth/react";

import { useRouter, useSearchParams } from "next/navigation";

import { ProfileRoute } from "@/src/shared";

export default function useSignForm() {
	const searchParams = useSearchParams();
	const router = useRouter();

	const [errorStatus, setErrorStatus] = useState<string | null | undefined>(
		null,
	);

	const handleSubmit = async (formData: FormData) => {
		const callbackUrl = searchParams?.get("callbackUrl") ?? ProfileRoute;

		const result = await signIn("credentials", {
			email: formData.get("email"),
			password: formData.get("password"),
			redirect: false,
		});

		if (result && result.ok) {
			router.push(callbackUrl);
			return;
		}

		setErrorStatus(result?.error);
	};

	return {
		errorStatus,
		onSubmit: handleSubmit,
	};
}
