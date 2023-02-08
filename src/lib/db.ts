import { building } from '$app/environment';
import { PUBLIC_SUPABASE_ANON_KEY, PUBLIC_SUPABASE_URL } from '$env/static/public';
import { PrismaClient } from '@prisma/client';
import { createClient } from '@supabase/auth-helpers-sveltekit';

export const supabaseClient = createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY);

export const prismaClient = new PrismaClient();

if (!building) {
	prismaClient.$connect().then(() => console.log('Connected to Prisma'));
}
