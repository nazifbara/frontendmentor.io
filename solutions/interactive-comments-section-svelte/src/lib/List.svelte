<script>
  import { flip } from 'svelte/animate';
  import { cubicOut } from 'svelte/easing';
  import { crossfade } from 'svelte/transition';
    
  import Comment from "./Comment.svelte";
  import Form from "./Form.svelte";
  import { data } from "../stores";
  import { getCustomTransition } from '../utils/helpers';


  const [send, receive] = crossfade({
    fallback: getCustomTransition
  });

  export let comments;

  const handleFormSubmit = (content) => data.reply(content)
</script>

<ul class="list">
  {#each comments as comment (comment.id)}
  <li
    in:receive="{{key: comment.id}}"
    out:send="{{key: comment.id}}"
    animate:flip="{{duration: 600, easing: cubicOut}}"
  >
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