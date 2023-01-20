<script>
  import Picture from "../elements/picture.svelte";
  import dub1 from "$lib/assets/img/dub_1.jpg?width=320;480;640;768&format=webp;avif;jpg";
  console.log(dub1);
</script>

<section id="about">
  <h3 class="title">About Dubstetten</h3>
  <p>
    Dubstetten is a family festival organised from the BELE association in
    cooperation with the Danubian Dub Soundsystem crew.
  </p>
  <Picture src={dub1} alt="dub together" />
  <hr />
</section>

<style>
  #about {
    background-color: #fff;
  }
</style>
