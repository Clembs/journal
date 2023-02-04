<script lang="ts">
	import { supabaseClient } from '$lib/db';

	let email: string;
	let loading = false;
	let isComplete = false;

	async function handleLogin() {
		try {
			loading = true;
			const { error } = await supabaseClient.auth.signInWithOtp({ email });
			if (error) {
				throw error;
			}
			isComplete = true;
		} catch (e) {
			throw e;
		} finally {
			loading = false;
		}
	}
</script>

<main class="flex h-full w-full flex-col bg-blue-500 p-20 text-white">
	<div>
		<h1>Login to journal</h1>

		<form class="flex flex-col" on:submit|preventDefault={handleLogin}>
			<label class="text-white" for="email">Email</label>
			<input
				id="email"
				class="mt-0 p-2 text-black hover:border-blue-200"
				type="email"
				required
				bind:value={email}
				placeholder="john.doe@example.com"
			/>

			<input
				disabled={loading || !email}
				class="mt-3 bg-white p-3 text-blue-500 hover:cursor-pointer hover:bg-blue-200"
				type="submit"
				value={loading ? 'Loading...' : 'Send link by email'}
			/>
		</form>
	</div>
</main>
