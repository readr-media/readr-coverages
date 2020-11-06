<section>
  <readr-donate-link class="readr-donate-link" on:click={() => { ga('send', 'event', 'projects', 'click', 'donate', { nonInteraction: false }) }}></readr-donate-link>
  <!--  <RelatedCoverages />-->
  <latest-coverages class="latest-coverages"></latest-coverages>
</section>

<script>
  import RelatedCoverages from './RelatedCoverages.svelte'
</script>

<style>
  section {
    max-width: 600px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 60px 0;
  }

  .readr-donate-link {
    min-width: 400px;
  }
  @media (max-width: 768px) {
    .readr-donate-link {
      min-width: 300px;
    }
  }

  .latest-coverages {
    width: 100%;
    margin: 60px 0 0 0;
    padding: 0 20px;
  }
</style>