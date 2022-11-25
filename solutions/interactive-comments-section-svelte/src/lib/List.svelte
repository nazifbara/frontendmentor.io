<script>
  import Comment from "./Comment.svelte";
  import Form from "./Form.svelte";

  export let comments;
</script>

<ul class="list">
  {#each comments as comment}
  <li>
    <Comment {comment} />
  </li>
{/each}
</ul>

<Form/>

<style>
  .list {
    display: flex;
    flex-direction: column;
    gap: 0.938rem;
  }
</style>