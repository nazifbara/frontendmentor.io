<script>
  import Comment from "./Comment.svelte";
  import Form from "./Form.svelte";
  import { data } from "../stores";

  export let comments;

  function handleFormSubmit(e) {
    const textarea = e.target[0]
    data.addComment(textarea.value);
    textarea.value = '';
  }
</script>

<ul class="list">
  {#each comments as comment}
  <li>
    <Comment {comment} />
  </li>
{/each}
</ul>

<Form on:submit={handleFormSubmit}/>

<style>
  .list {
    display: flex;
    flex-direction: column;
    gap: 0.938rem;
  }
</style>