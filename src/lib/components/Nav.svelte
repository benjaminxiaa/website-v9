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
		<li class="menu__item"><a class="menu__link" href="/">Home</a></li>
		<li class="menu__item">
			<span class="menu__link menu__parent">Work</span>
			<ul class="submenu">
				<li class="menu__item">
					<a class="menu__link" href="/work/photo">Photo</a>
				</li>
				<li class="menu__item">
					<a class="menu__link" href="/work/video">Video</a>
				</li>
				<li class="menu__item">
					<a class="menu__link" href="/work/programming">Coding</a>
				</li>
			</ul>
		</li>
		<li class="menu__item"><a class="menu__link" href="/about">About</a></li>
		<li class="menu__item">
			<a class="menu__link" href="/contact">Contact</a>
		</li>
	</ul>
</nav>
