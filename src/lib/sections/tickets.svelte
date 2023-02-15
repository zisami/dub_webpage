<script lang="ts">
  import Picture from "../elements/picture.svelte";
  import Background from "$lib/assets/img/tickets.jpg?width=320;480;640;768&format=webp;avif;jpg";

  import { onMount } from "svelte";
  const settings = {
    headers: {
      Authorization: "Bearer ",
    },
  };
  type Ticket = {
    free: number;
    total: number;
  };
  let tickets: Ticket;
  onMount(async () => {
    tickets = await fetch(
      "https://www.eventbriteapi.com/v3/events/509314502387/capacity_tier/",
      settings
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        return {
          free: data.capacity_total - data.capacity_sold,
          total: data.capacity_total,
        };
      });
  });
</script>

<section id="tickets">
  <div class="background-image">
    <Picture src={Background} alt="Background Image" />
  </div>

  <h3 class="title">Tickets</h3>
  <h4>Bald ist es soweit!</h4>
  <p>
    Am Wochenende 21.7.-22.7.2023 wird Dorfstetten, ein kleines Dorf in
    Niederösterreich, wieder zu Dubstetten transformiert! Ein wichtiges Festival
    für alle jene, die das Gute im Leben schätzen und genießen. Das Danubian Dub
    Soundsystem begeistert uns mit internationalen Dub-Künstlern und bester
    Dub-Musik. Außerdem erwartet euch lokale Live-Musik, unzählige Workshops,
    Kinderaktivitäten, leckeres Essen und Jam Sessions im idyllischen,
    naturbelassenen Umfeld des Eichhornhofs. Lasst uns gemeinsam auf dieses
    Abenteuer gehen, indem du dir dein Ticket sicherst!
  </p>
  <hr />
  <!-- {#if tickets}
    {#if tickets.free > 0}
      <p>
        <span class="free-tickets">{tickets.free}</span> Tickets left from total
        available
        <span class="total-tickets">{tickets.total} </span>Weekendpasses
      </p> -->
  <a
    href="https://www.eventbrite.com/e/dubstetten-tickets-509314502387"
    class="btn">Sicher dir ein Ticket</a
  >
  <!-- {:else}
      Sorry we are solde out.
    {/if}
  {/if} -->
</section>

<style>
  h4 {
    font: 28px own;
    text-align: center;
  }
  p {
    font: 20px dosis;
    text-align: center;
  }
  #tickets .background-image {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-color: #2196f3;
    opacity: 0.3;
    z-index: -1;
  }
  .free-tickets {
    color: darkgreen;
    font-weight: bold;
  }
  .total-tickets {
    color: darkslategray;
  }

  .btn {
    font: 28px own;
    background-color: rgb(255, 128, 69);
    color: black;
    border-radius: 50%;
    padding: 20px;
  }

  p {
    text-align: center;
    font: 20px dosis;
  }
</style>
