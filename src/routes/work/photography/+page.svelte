<svelte:head>
	<link rel="stylesheet" href="/css/photography.css" />
</svelte:head>

<input
	type="checkbox"
	id="main-navigation-toggle"
	class="btn btn--close"
	title="Toggle main navigation"
/>
<label for="main-navigation-toggle">
	<span>menu</span>
</label>

<nav id="main-navigation" class="nav-main">
	<ul class="menu">
		<li class="menu__item">
			<a class="menu__link" href="/">Home</a>
		</li>
		<li class="menu__item">
			<span class="menu__link menu__parent">Work</span>
			<ul class="submenu">
				<li class="menu__item">
					<a class="menu__link" href="/work/photography">Photography</a>
				</li>
				<li class="menu__item">
					<a class="menu__link" href="/work/programming">Programming</a>
				</li>
			</ul>
		</li>
		<li class="menu__item">
			<a class="menu__link" href="/about">About</a>
		</li>
		<li class="menu__item">
			<a class="menu__link" href="/contact">Contact</a>
		</li>
	</ul>
</nav>

<main class="page-container">
	<h1 class="center">Photography</h1>
</main>
<div class="outer-container">
	<div class="after-page">
		<h2>2022</h2>
		<a class="link" href="/work/photography/2022/death-valley">death valley</a>
		<br />
		<h2>2023</h2>
		<a class="link" href="/work/photography/2023/big-sur">big sur</a>
		<a class="link" href="/work/photography/2023/hakone-gardens">hakone gardens</a>
		<a class="link" href="/work/photography/2023/new-mexico">new mexico</a>
		<br />
		<h2>2024</h2>
		<p>In Progress</p>
		<!--
		<span><a class="link" href="/work/photography/2024/south-korea">south korea - seoul</a></span>
		<span><a class="link" href="/work/photography/2024/fukuoka">japan - fukuoka</a></span>
		<span><a class="link" href="/work/photography/2024/fukuoka">japan - osaka</a></span> -->
	</div>
</div>
