<script>
	import '../app.css';
	import { onMount } from 'svelte';
	let { children } = $props();

	const st = $state({ 
		time: '',
		year: new Date().getFullYear()
	});

	// holds your theme state
	let isDark = false;


	// Use onMount so this only runs in the browser
	onMount(() => {
		// Attempt to read from localStorage
		const storedTheme = localStorage.getItem('theme');
		console.log('onMount -> storedTheme:', storedTheme);
		if (storedTheme === 'dark') {
			isDark = true;
			document.documentElement.classList.add('dark');
		}
	});

	// Toggle function
	function toggleTheme() {
		isDark = !isDark;
		document.documentElement.classList.toggle('dark', isDark);
		console.log('toggleTheme -> isDark now', isDark);
	}

	// Runes effect: runs whenever `isDark` changes
	$effect(() => {
		console.log('Effect triggered: isDark changed to', isDark);
		const themeToSet = isDark ? 'dark' : 'light';
		console.log('Setting localStorage theme to', themeToSet);
		localStorage.setItem('theme', themeToSet);
	});
	

	function updateClock() {
		const now = new Date();
		st.time = now.toLocaleTimeString(); 
	}

	onMount(() => {
		updateClock();
		setInterval(updateClock, 1000);
	});

</script>

<main class="flex flex-col min-h-screen h-full bg-white dark:bg-black text-black dark:text-white font-mono px-6 overflow-hidden">
	<!-- Navbar -->
	<nav class=" w-full max-w-3xl flex justify-between items-center py-4 fixed top-0 left-0 right-0 mx-auto bg-white dark:bg-black px-6 border-b border-gray-300 dark:border-gray-700">
	  <a href="/" class="font-bold text-lg">Akhil Sundaram</a>
	  <div class="flex flex-wrap gap-4  text-gray-500 dark:text-gray-400 text-sm">
		<a href="/code">code</a>
		<a href="/work">work</a>
		<a href="/resume">resume</a>
		<a href="/school">courselog</a>
		<a href="/notes">notes</a>
		<button onclick={toggleTheme} class="text-xl relative z-10">🌓</button>
	  </div>
	</nav>
  
	<!-- Page Content -->
	<section class="mt-20">
		{@render children()}
	</section>
  
	<!-- Footer -->
	<footer class="w-full max-w-3xl mx-auto text-sm py-4 border-t border-gray-300 dark:border-gray-700 mt-auto">
	  <div class="flex justify-between">
		<p>&copy; {st.year} Akhil Sundaram, inspired by Michael Andreuzza</p>
		<p id="clock">{st.time}</p>
	  </div>
	</footer>
  </main>
  
  <style>
	a {
	  color: inherit;
	  text-decoration: none;
	}
  
	a:hover {
	  text-decoration: underline;
	}
  </style>
