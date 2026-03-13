<script>
	import Navbar from '$lib/Components/Navbar.svelte';
</script>

<Navbar />
<div class="update-log-page">
	<h1>Update Log</h1>
	<p>
		Check back here for the latest updates and improvements to our library website. We are committed
		to providing you with the best experience possible, and we regularly make enhancements based on
		your feedback.
	</p>

	<h2>Recent Updates</h2>
	<ul>
		<li>
			<strong>March 5th 2026:</strong> Improved book fonts and loading times.
		</li>
		<li>
			<strong>March 10th 2026:</strong> Created a update-log.
		</li>
		<li>
			<strong>March 15th 2026:</strong> Fixed bugs related to book details page and improved loading times.
		</li>
	</ul>

	<p>
		We appreciate your support and feedback as we continue to enhance our library website. Stay
		tuned for more updates!
	</p>
	<a href="/">Back</a>
</div>

<style>
	a {
		text-decoration: none;
		color: black;
		cursor: pointer;
		padding-left: 10px;
		padding-right: 10px;
	}
</style>
