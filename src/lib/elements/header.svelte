<header id="top">
  <nav>
    <ul>
      <li><a href="tickets">Tickets</a></li>
      <li><a href="lineup">Line-Up</a></li>
      <li><a href="about">Info</a></li>
      <li><a href="contact">Contact</a></li>
    </ul>
  </nav>
</header>

<style>
  header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;

    background-color: rgba(0, 0, 0, 0.1);
    z-index: 100;
  }
  nav {
    display: flex;
    justify-content: end;
    align-items: center;
    height: 3rem;
    padding-right: 3rem;
  }
  ul {
    display: flex;
  }

  li {
    list-style-type: none;
    margin: 0 0.5rem;
  }
  a {
    color: #fff;
    text-decoration: none;
  }
</style>
