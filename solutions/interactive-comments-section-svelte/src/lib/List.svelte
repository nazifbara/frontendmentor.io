<script>
  import Comment from "./Comment.svelte";
  import Avatar from "./Avatar.svelte";
  import { currentUser } from '../data.json'

  export let comments;
</script>

<ul class="list">
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

<style>
  .list {
    display: flex;
    flex-direction: column;
    gap: 0.938rem;
  }
</style>