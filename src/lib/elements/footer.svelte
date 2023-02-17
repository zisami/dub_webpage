<script>
  import Picture from "../elements/picture.svelte";

  import comeon from "$lib/assets/img/come_on.png?width=320;480;640;768&format=webp;avif;jpg";
</script>

<footer>
  <ul>
    <li><a href="impressum"> Impressum</a></li>
    <li><a href="datenschutz"> Datenschutz</a></li>
  </ul>
  <a href="https://www.come-on.at/"
    ><img
      src="/src/lib/assets/img/come_on.png"
      alt="dubstetten home"
      id="logo"
    /></a
  >
</footer>

<style>
  img {
    width: 200px;
  }
  footer {
    display: flex;

    flex-direction: column;
    align-items: center;
    text-align: center;
    background-color: #615a51b1;
    padding: 1rem 1rem;
    z-index: 100;
  }

  ul {
    display: flex;
  }
  li {
    font-family: "dosis";
    list-style-type: none;
    margin: 0 0.5rem;
  }
  a {
    color: rgb(255, 255, 255);
    text-decoration: none;

    text-align: center;
    font: dosis;
  }
</style>
