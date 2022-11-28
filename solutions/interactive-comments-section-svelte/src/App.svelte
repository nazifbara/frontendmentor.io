<script>
  import { data } from './stores';
  import List from './lib/List.svelte';
</script>

<main class="container">
  <List comments={$data.comments} />
</main>

<style>
  .container {
    padding: 2.5rem 0.938rem;
    max-width: 46.875rem;
    margin: 0 auto;
  }

  @media screen and (min-width:  46.875rem) {
    .container {
      padding: 3.75rem 0;
    }
  }
</style>