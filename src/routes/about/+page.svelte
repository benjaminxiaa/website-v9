<svelte:head>
  <link rel="stylesheet" href="/css/about.css" />
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
  <h1 class="center">About Me</h1>
</main>
<div class="after-page">
  <p>
    Lorem ipsum dolor sit amet diam rebum aliquyam velit. Gubergren justo
    accumsan ut et stet sit dolor consetetur dolore consetetur labore gubergren
    kasd et. Ipsum ipsum sea lorem sadipscing amet adipiscing et eum suscipit
    sed magna dolore eros magna. Ut et sea. Kasd no vel kasd facilisis gubergren
    ut dolor eos.
  </p>
</div>
