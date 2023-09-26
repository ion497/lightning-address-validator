<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/svelte-logo.svg';
	import github from '$lib/images/github.svg';
	import { onMount } from 'svelte';

	onMount( async () => {
		function highlightLinkWhenScrolled() {
			window.addEventListener('scroll', () => {
				if (document.querySelector('.app').getBoundingClientRect().top < -50) {
					document.querySelector('.navbar').classList.add('bg-black');
				} else {
					document.querySelector('.navbar').classList.remove('bg-black');
				}
			});
		}
		highlightLinkWhenScrolled();
	});
</script>

<header class="sticky top-0 z-50">
	<div class="navbar bg-opacity-80 transform-all duration-300">
		<div class="navbar-start">
			<div class="dropdown">
				<label tabindex="0" class="btn btn-ghost btn-circle">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 stroke-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
				</label>
				<ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
					<li><a>Validate an Address</a></li>
					<li><a>About</a></li>
				</ul>
			</div>
		</div>
		<div class="navbar-center">
			<a class="normal-case text-xl text-white font-sans font-bold" href="/">
				<!--<img src={logo} alt="Lightning Address Validator" class="w-8"/>-->
				Lightning Address Validator
			</a>
		</div>
		<div class="navbar-end">
			<a href="https://github.com/ion497/lightning-address-validator">
				<img src={github} alt="GitHub" class="w-8 invert" />
			</a>
		</div>
	</div>
</header>
