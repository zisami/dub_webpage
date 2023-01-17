<script>
  import OpenMap from "../map/open-map.svelte";
</script>

<section id="contact" class="contact">
  <h3 class="title">Contact</h3>
  <p>Verein BELE</p>
  <p>Wo auch immer</p>
  <hr />
  <div class="logos">
    <a href="https://eichhornhof.at/index.html">
      <img src="img/eichhorn_icon.png" alt="Eichhornhof Icon" />
    </a>
    <a
      href="https://www.soundsystem.world/soundsystems/danubian-dub-soundsystem/"
    >
      <img src="img/danubian_icon.jpeg" alt="Danubian Icon" />
    </a>
  </div>

  <OpenMap />
</section>

<style>
  .logos {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem 0;
  }
  .logos img {
    width: 10rem;
    margin: 0 1rem;
    border-radius: 50%;
  }
</style>
