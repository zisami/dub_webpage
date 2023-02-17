<script>
</script>

<section id="hero">
  <div class="background-image">
    <img src="src/lib/assets/img/hero2.jpg" alt="home image" />
  </div>

  <div class="wrapper">
    <img src="src/lib/assets/img/logo_baumkreis.svg" alt="logo baumkreis" />
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
    position: fixed;
    background-size: cover;
    top: 0;
    left: 0;

    background-size: cover;
    z-index: -1;
    background-color: #257dc5;
    opacity: 0.6;
  }

  .wrapper {
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    z-index: 1;
    color: #ffffff;

    padding: 40px;
    background-color: #474440ca;
    border-radius: 100%;
  }

  img {
    width: 100%;
    margin-top: -3vw;
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
