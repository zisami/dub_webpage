<script>
  import OpenMap from "../map/open-map.svelte";
  import Picture from "../elements/picture.svelte";
  import dub1 from "$lib/assets/img/dub_1.jpg?width=320;480;640;768&format=webp;avif;jpg";
  console.log(dub1);
</script>

<section id="about">
  <div
    class="background-image"
    style="background-image: url($lib/assets/img/info_b.webp);"
  />
  <h3 class="title">Info</h3>
  <h4>Hardfacts</h4>
  <ul>
    <li>Open Air Hof Stage</li>
    <li>Open Air Soundsystem Stage</li>
    <li>Workshops</li>
    <li>Holzofenpizza</li>
    <li>Kinderprogramm</li>
  </ul>
  <hr />
  <h4 class="title">Camping</h4>
  <ul>
    <li>
      Respect the nature: Hinterlasse keinen Müll, Zigaretten gehören in die
      Aschenbecher
    </li>

    <li>
      Erlebe eine erfrischende Dusche auf unserem Festival und erfrischt euch
      für weitere Abenteuer.
    </li>
    <li>
      Sowohl Lagerfeuer am Campingplatz als auch das Rauchen in Waldrandnähe ist
      untersagt!
    </li>
    <li>
      Das Aufstellen von eigenen Musikanlagen am Campingplatz ist nicht erlaubt.
    </li>
    <li>
      Bitte erkundige dich beim Check-in, welches Campinggebiet zu deinen
      Bedürfnissen passt.
    </li>
    <li>
      Denk daran, dass Kinder schlafen könnten, also verhalte dich nachts
      möglichst ruhig am Campingplatz.
    </li>
  </ul>
  <hr />
  <ul>
    <h4 class="title">Consens + Sonstiges</h4>

    <li>Es gibt einen Teich im Ort, den man zu Fuß erreichen kann.</li>
    <li>
      Bedenke, dass am Festivalgelände ein landwirtschaftlicher Betrieb ansässig
      ist, darum bitten wir dich, abgesperrte private Flächen zu respektieren.
    </li>
    <li>
      Hunde bitte an die Leine!
      <br />
      Bitte beachte, dass sich andere Menschen durch freilaufende Hunde gestört oder
      bedroht fühlen können, daher den Hund bitte am Festivalgelände an der Leine
      halten.
      <br />
      Wenn möglich, lass dein liebstes Pelzknäuel zuhause.
    </li>
    <li>
      Verzichte auf Fotos am Festivalgelände!
      <br />
      Fotos sind immer eine schöne Erinnerung, aber bedenke bitte, dass es Menschen
      gibt, die sich nicht gerne in öffentlichen Netzwerken wiederfinden wollen.
      Wir bitten dich daher, Rücksicht darauf zu nehmen und die Zeit am Festival
      bestenfalls ohne Handy zu genießen.
    </li>
    <li>
      Denk daran, dass es in der Region, wo das Event stattfindet, nur Empfang
      für A1 Kunden gibt. Dies ist auch bei der Navigation zu bedenken.
    </li>
    <li>
      Jeder ist willkommen! Lade deine liebsten Freunde ein, um mit uns ein
      bezauberndes Wochenende gefüllt mit Musik, Spiel und Genuss zu verbringen.
    </li>
  </ul>
  <hr />
  <p>
    Das Dubstetten Festival wird von dem gemeinnützigen Verein Bele organisiert,
    der Verein dient der Förderung und Bewusstseinsbildung für ein glückliches
    Leben. Wir freuen uns auf ein schönes Festival mit euch.
  </p>
  <h4 class="title">
    Du bist interessiert? <br /> Dann sicher dir ein Ticket für das Dubstetten Festival
    am 21. & 22. Juli 2023.
  </h4>
  <OpenMap />

  <!-- <Picture src={dub1} alt="dub together" /> -->
</section>

<style>
  ul {
    font: 20px dosis;
    padding: 10px;
  }
  li {
    padding-top: 10px;
  }

  h4 {
    font: 28px own;
    text-align: center;
  }
  #about .background-image {
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

  ul {
    list-style: none;
    text-align: center;
  }
</style>
