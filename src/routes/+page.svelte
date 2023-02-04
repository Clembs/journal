<script lang="ts">
	import { supabaseClient } from '$lib/db';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

Logged in as {data.session?.user.user_metadata.email}!
<button
	on:click={async () => await supabaseClient.auth.signOut()}
	class="rounded-lg border-none bg-green-300 text-white">Sign out</button
>
<pre>
  {JSON.stringify(data.session, null, 2)}
</pre>
