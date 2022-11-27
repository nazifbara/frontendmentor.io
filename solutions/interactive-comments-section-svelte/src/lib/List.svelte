<script>
  import Comment from "./Comment.svelte";
  import Form from "./Form.svelte";
  import { data } from "../stores";

  export let comments;

  const handleFormSubmit = (content) => data.reply(content)
</script>

<ul class="list">
  {#each comments as comment}
  <li>
    <Comment {comment} />
  </li>
{/each}
</ul>

<Form onSubmit={handleFormSubmit} />

<style>
  .list {
    display: flex;
    flex-direction: column;
    gap: 0.938rem;
  }
</style>