import { prismaClient } from '$lib/db';
import { getSupabase } from '@supabase/auth-helpers-sveltekit';
import { redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async (event) => {
	const { session } = await getSupabase(event);

	if (session && new Date(session?.user.created_at!)) {
		try {
			await prismaClient.user.create({
				data: {
					id: session?.user.id!
				}
			});
		} catch {}
	}

	throw redirect(303, '/index');
};
