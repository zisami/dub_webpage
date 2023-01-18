<script>
    import FaCompactDisc from "svelte-icons/fa/FaCompactDisc.svelte";
    import FaGuitar from "svelte-icons/fa/FaGuitar.svelte";
    import FaPrayingHands from "svelte-icons/fa/FaPrayingHands.svelte";
</script>

<section id="lineup">
    <h3 class="title">Line-Up</h3>
    <p>
        Don't miss out on this incredible opportunity to see these amazing
        artists in one night, and be prepared for an unforgettable night of dub
        music!"
    </p>
    <hr />
</section>

<style>
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
