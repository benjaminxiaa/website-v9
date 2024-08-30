<script>
  import Gallery from 'svelte-gallery';

  const images = [
    {}
	];
</script>

<svelte:head>
  <link rel="stylesheet" href="/css/gallery.css" />
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

<nav class="top-right-navbar">
	<ul>
		<li><a href="/work/photography/2022/death-valley">[Death Valley]</a></li>
		<li><a href="/work/photography/2023/big-sur">[Big Sur]</a></li>
		<li><a href="/work/photography/2023/hakone-gardens">[Hakone Gardens]</a></li>
		<li><a href="/work/photography/2023/new-mexico">[New Mexico]</a></li>
    <li><a href="/work/photography/2024/south-korea">[South Korea]</a></li>
    <li><a href="/work/photography/2024/japan">[Japan]</a></li>
	</ul>
</nav>

<main class="page-container">
  <h1 class="center">South Korea</h1>
</main>
<div class="after-page">
  <h2>In Progress!</h2>
</div>