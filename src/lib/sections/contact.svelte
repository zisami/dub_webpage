<script>
  import OpenMap from "../map/open-map.svelte";
  import Picture from "../elements/picture.svelte";
  import eichhorn from "$lib/assets/img/eichhorn_icon.png?width=320;480;640;768&format=webp;avif;jpg";
  import danubian from "$lib/assets/img/danubian_icon.jpeg?width=320;480;640;768&format=webp;avif;jpg";
</script>

<section id="contact" class="contact">
  <div
    class="background-image"
    style="background-image: url(src/lib/assets/img/kontakt.webp);"
  />
  <h3 class="title">Contact</h3>
  <h4>Verein BELE</h4>
  <p>
    Verein zur Förderung und Bewusstseinsbildung <br /> für ein glückliches
    Leben
    <br />
    Wimbergeramt 22
    <br />
    4392 Dorfstetten
  </p>
  <hr />

  <h4>Eichhornhof - Gemüse mit Herz</h4>
  <p>
    Wimbergeramt 22
    <br />
    4392 Dorfstetten
    <br />
    Gemüsehandwerk aus dem Waldviertel
    <br />
    Wir vom Eichhornhof haben uns vor 2 Jahren der Landwirtschaft zugewandt, mit
    dem Wunsch sinnvolle Arbeit zu tun und gut mit der Erde umzugehen.
  </p>
  <a class="logos" href="https://eichhornhof.at/index.html">
    <Picture src={eichhorn} alt="Eichhornhof" />
  </a>

  <h4>Danubian Dub <br />Soundsystem</h4>
  <p>
    DANUBIAN DUB SOUNDSYSTEM is an upcomming sound system, located in Vienna,
    Austria.
    <br />
    The Danubian Dub Soundsystem itself is a handmade, custom built speakerstack,
    trying to achieve sonic perfection with a solid, massive bass performance. We
    think that speakers can be built a certain way, leading to a whole new level
    of appreciation.
  </p>
  <a
    class="logos"
    href="https://instagram.com/danubian_dub_soundsystem?igshid=YmMyMTA2M2Y="
  >
    <Picture src={danubian} alt="Danubian Dub" />
  </a>
  <OpenMap />
</section>

<style>
  #contact .background-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-color: #2196f3;
    opacity: 0.15;
    z-index: -1;
  }
  h4 {
    font: 28px own;
    text-align: center;
  }
  p {
    font: 20px dosis;
    text-align: center;
  }
  .logos {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 3rem 0;
    border-radius: 50%;
  }
</style>
