<script>
  import { currentUser, comments } from './data.json'
  import Comment from './lib/Comment.svelte';
  import Avatar from './lib/Avatar.svelte';
</script>

<main class="container">
  <ul>
    {#each comments as comment}
    <li>
      <Comment {comment} />
    </li>
  {/each}
  </ul>
  <form>
    <textarea></textarea>
    <div>
      <Avatar src="{currentUser.image.webp}" alt="Avatar of {currentUser.username}"/>
      <button>send</button>
    </div>
  </form>
</main>

<style>
  .container {
    padding: 0.313rem;
    max-width: 46.875rem;
    margin: 0 auto;
  }

  @media screen and (min-width:  46.875rem) {
    .container {
      padding: 3.75rem 1.25rem;
    }
  }
</style>