<script>
  import { onMount } from 'svelte'

  import { currentUser, comments } from './data.json'
  import Comment from './lib/Comment.svelte';
</script>

<main>
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
      <img src="{currentUser.image.webp}" alt="Avatar of {currentUser.username}"/>
      <button>send</button>
    </div>
  </form>
</main>
