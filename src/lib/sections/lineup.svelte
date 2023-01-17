<script>
  import FaCompactDisc from "svelte-icons/fa/FaCompactDisc.svelte";
  import FaGuitar from "svelte-icons/fa/FaGuitar.svelte";
  import FaPrayingHands from "svelte-icons/fa/FaPrayingHands.svelte";
</script>

<section id="lineup">
  <h3 class="title">Line-Up</h3>
  <p>
    Don't miss out on this incredible opportunity to see these amazing artists
    in one night, and be prepared for an unforgettable night of dub music!"
  </p>
  <hr />

  <div class="line-up-box">
    <img src="img/lions_den_icon.jpeg" alt="lion icon" />
    <p>
      Lion’s Den is a label, a sound system, a studio and a production and
      promotion force.
    </p>
    <div>
      <iframe
        title="Lions"
        src="https://bandcamp.com/EmbeddedPlayer/album=677397082/size=small/bgcol=ffffff/linkcol=0687f5/transparent=true/"
        seamless
      >
        <a
          href="https://lionsdensound.bandcamp.com/album/lionschoice004-natural-tribulation-ft-black-omolo-steamers-meditation"
        >
          LIONSCHOICE004 - Natural Tribulation ft. Black Omolo - Steamers
          Meditation by Lion&#39;s Den
        </a>
      </iframe>
    </div>
  </div>

  <div class="line-up-box">
    <img src="img/wckd-nd-bnny.png" alt="wicked icon" />
    <p>
      Lion’s Den is a label, a sound system, a studio and a production and
      promotion force.
    </p>
    <div>
      <iframe
        style="border: 0; width: 100%; height: 42px;"
        src="https://bandcamp.com/EmbeddedPlayer/album=540571743/size=small/bgcol=ffffff/linkcol=0687f5/transparent=true/"
        seamless
        ><a
          href="https://wickedandbonny.bandcamp.com/album/ich-bin-wie-ich-bin-stepwise-records"
          >Ich Bin Wie Ich Bin (Stepwise Records) by Wicked and Bonny feat.
          Benjamin Stötter</a
        ></iframe
      >
    </div>
  </div>
</section>

<style>
  .line-up-box * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: solid;
    margin: 0;
    padding: 0;
  }

  .line-up-box {
    width: 50%;
    text-align: center;
    margin: 0 auto;
    border: solid #0a0909;
    box-shadow: 20px 20px 20px #999999;
    overflow: hidden;
    border-radius: 0;
  }

  .line-up-box img {
    width: 100%;
    float: left;
  }

  .line-up-box p {
    width: 100%;
    text-align: center;
    float: right;
    padding: 1em;
  }

  .line-up-box div {
    text-align: center;
    width: 100%;
  }

  .line-up-box div iframe {
    border: 0;

    width: 98%;
    height: 42px;
  }

  #lineup {
    background-color: #f7f7f7;
  }
</style>
