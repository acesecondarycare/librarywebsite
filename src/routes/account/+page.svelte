<script>
	import Navbar from '$lib/Components/Navbar.svelte';
	import { useForm, validators, HintGroup, Hint, email, required } from 'svelte-use-form';
	const form = useForm();
</script>

<Navbar />
<form use:form>
	<h1>Library Website Login</h1>

	<input type="email" name="email" placeholder="Email" use:validators={[required, email]} />
	<HintGroup for="email">
		<Hint on="required">This is a mandatory field. 💀</Hint>
		<Hint on="email" hideWhenRequired>Your email is not valid. 💀</Hint>
	</HintGroup>
	<input type="password" name="password" placeholder="Password" use:validators={[required]} />
	<HintGroup for="password">
		<Hint on="required">This is a mandatory field. 💀</Hint>
	</HintGroup>
	<a href="/"><button disabled={!$form.valid}>Login... Finally 💀</button></a>
</form>

<style>
	:global(.touched:invalid) {
		border-color: red;
		outline-color: red;
	}
</style>
