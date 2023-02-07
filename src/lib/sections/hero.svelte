<section id="hero">
  <div
    class="background-image"
    style="background-image: url(src/lib/assets/img/hero.jpeg);"
  />

  <div class="wrapper">
    <img
      alt="Dubstetten Baumkreis"
      src="src/lib/assets/img/Logo_Dubstetten_smallbaumkreis.svg"
    />
    <h2>nature - music -family</h2>
    <h3>21. &amp; 22. July 2023</h3>
  </div>
</section>

<style>
  #hero {
    width: 100%;
    flex-grow: 1;
    background-size: cover;
    overflow: hidden;

    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr;
    justify-items: center;
    background-repeat: no-repeat;
    align-items: center;

    position: relative;
  }

  #hero .background-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-color: #2196f3;
    opacity: 0.6;
    z-index: -1;
  }

  .wrapper {
    width: 50vw;
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    z-index: 1;
    color: #ffffff;
  }

  h1 {
    text-align: center;
    font: 80px own;
  }

  h2 {
    text-align: center;
    font: 30px own;
  }
  h3 {
    text-align: center;
    font: 25px own;
  }
</style>
