<script>
	import BtnStart from "./BtnStart.svelte";
	import Auth from "./Auth.svelte";
	import Username from "./Username.svelte";

	export let name;
</script>

<main>
	<h2>WAS IST DAZZZZ HIA</h2>
	<p>{name}</p>
	<div class="d-flex col">
		<Auth />
		<div style="margin-top:8px;"></div>
		<Username />
		<div class="d-flex">
			<BtnStart />
		</div>
	</div>
</main>

<style>
	main {
		padding: 4px;
		color: #fff;
		font-family: monospace;
		position: fixed;
		width: 250px;
		background-color: #222;
		top: 150px;
		left: 50%;
		z-index: 999999999;
	}

	.d-flex {
		display: flex;
		justify-content: center;
	}

	.col {
		flex-direction: column;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
