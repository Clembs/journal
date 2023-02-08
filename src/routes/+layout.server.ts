import { prismaClient } from '$lib/db';
import { getServerSession } from '@supabase/auth-helpers-sveltekit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async (event) => {
	const session = await getServerSession(event);
	let data = null;

	if (session) {
		data = await prismaClient.user.findFirst({
			where: { id: session.user.id! }
		});
	}

	return {
		session,
		data
	};
};
