<script>
  import { flip } from 'svelte/animate';
  import { cubicOut } from 'svelte/easing';
  import { crossfade } from 'svelte/transition';
  
  import Avatar from "./Avatar.svelte";
  import Icon from "./Icon.svelte";
  import Form from "./Form.svelte";
  import Button from "./Button.svelte";
  import ConfirmationDialog from "./ConfirmationDialog.svelte";
  import { data } from "../stores";
  import { voteTypes } from "../utils/constants";
  import { getCustomTransition } from '../utils/helpers';

  const [send, receive] = crossfade({
  fallback: getCustomTransition
});

  export let comment;

  const isAuthor = $data.currentUser.username === comment.user.username;
  let content;

  $: replying = $data.replyCommentId === comment.id;
  $: editing = $data.editCommentId === comment.id;
  $: votes = $data.votes;

  function handleReplyButtonClick() {
    data.showReplyForm(comment)
  }

  function updateContent() {
    if (content.textContent.length === 0) return;
    data.updateComment(content.textContent, comment)
  }

  function deleteComment() {
    data.deleteComment(comment)
  }

  function toggleEdit() {
    data.editComment(comment)
    content.focus()
  }

  const  handleReply = (content) => data.reply(content, comment)
</script>

<article class="comment">
  <div>
    <header class="header">
      <div class="left"><Avatar src={comment.user.image.webp} alt="Avatar of {comment.user.username}" />
        <h1 class="username">{comment.user.username}</h1>
        {#if isAuthor}
          <span class="you">you</span>
        {/if}
        <time class='time'>{comment.createdAt}</time></div>
  
      <div class="right">
        {#if isAuthor}
          <ConfirmationDialog on:confirm={deleteComment}> 
            <button class="btn delete"><Icon name='delete'/> Delete</button>
          </ConfirmationDialog >
          <button on:click={toggleEdit} class="btn edit"><Icon name='edit'/> Edit</button>
        {:else}
          <button on:click={handleReplyButtonClick} class="btn reply"><Icon name='reply'/> Reply</button>
        {/if}
      </div>
    </header>
    
    <p bind:this={content} contenteditable={editing} class='content' class:edit={editing}>
      {@html comment.content.replace(/(^|\s)(@\w+)\b/g, "$1<strong>$2</strong>")}
    </p>
  
    {#if editing}
      <div style:text-align='right' style:margin-top="0.938rem">
        <Button variant='primary' on:click={updateContent} >update</Button>
      </div>
    {/if}
  </div>
  <div class="action">
    <div class="score">
      <button 
        on:click={() => data.vote(voteTypes.UP, comment)} 
        class:active={votes[comment.id] === voteTypes.UP}
      >
        <Icon name='plus'/>
      </button>
      <span>{comment.score}</span>
      <button 
        on:click={() => data.vote(voteTypes.DOWN, comment)} 
        class:active={votes[comment.id] === voteTypes.DOWN}
      >
        <Icon name='minus'/>
      </button>
    </div>

    <div class="right">
      {#if isAuthor}
      <ConfirmationDialog on:confirm={deleteComment}> 
        <button class="btn delete"><Icon name='delete'/> Delete</button>
      </ConfirmationDialog>
        <button on:click={toggleEdit} class="btn edit"><Icon name='edit'/> Edit</button>
      {:else}
        <button on:click={handleReplyButtonClick} class="btn reply"><Icon name='reply'/> Reply</button>
      {/if}
    </div>
  </div>
</article>

{#if replying} 
  <Form onSubmit={handleReply} isReply />
{/if}

{#if comment.replies.length !== 0 }
<div class="replies">
  <hr/>
  <ul>
    {#each comment.replies as reply (reply.id)}
    <li
      in:receive="{{key: reply.id}}"
      out:send="{{key: reply.id}}"
      animate:flip="{{duration: 600, easing: cubicOut}}"
      >
      <svelte:self comment={reply} />
    </li>
  {/each}
  </ul>
</div>
{/if}


<style>
  .comment {
    display: grid;
    gap: 0.938rem;
    background-color: var(--white);
    padding: 1.25rem;
    border-radius: 0.625rem;
  }

  .content.edit {
    border: 1px solid var(--moderateBlue);
    padding: 10px 20px;
    border-radius: 10px;
    color: var(--darkBlue);
  }

  .content :global(strong) {
    color: var(--moderateBlue);
    cursor: pointer;
  }

  .header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.938rem;
  }

  .header .left {
    display: flex;
    align-items: center;
    gap: 0.938rem;
  }

  .you {
    background-color: var(--moderateBlue);
    color: var(--white);
    font-weight: var(--fontMedium);
    padding-inline: 0.313rem;
  }

  .header .right {
    display: none;
  }

  .username {
    font-size: 1rem;
    color: var(--darkBlue);
    font-weight: var(--fontBold);
  }

  .time {
    font-weight: var(--fontMedium);
  }

  .action {
    display: flex;
    justify-content: space-between;
  }

  .action .right {
    display: flex;
    align-items: center;
  }

  .score {
    display: flex;
    align-items: stretch;
    background-color: var(--veryLightGray);
    border-radius: 0.625rem;
    font-weight: var(--fontBold);
    color: var(--moderateBlue);
    cursor: pointer;
  }

  .score button {
    border: none;
    background-color: transparent;
  }

  .score button.active :global(path) {
    fill: var(--moderateBlue);
  }

  .score button:hover :global(path) {
    fill: var(--moderateBlue);
    transition: fill ease-in 0.3s;
  }

  .score > * {
    padding: 0.625rem;
  }

  .btn {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    border: none;
    background-color: transparent;
    transition: opacity ease-in 0.3s;
  }

  .btn:hover {
    opacity: 0.5;
  }

  .btn.reply {
    color: var(--moderateBlue);
  }

  .btn.delete {
    color: var(--softRed);
  }

  .btn.edit {
    color: var(--moderateBlue);
  }

  .replies {
    display: flex;
    gap: 0.938rem;
    padding: 0.938rem 0;
  }

  .replies ul {
    display: flex;
    flex-direction: column;
    gap: 0.938rem;
    width: 100%;
  }

  .replies hr {
    border-color: var(--veryLightGray);
    border-width: 0.031rem;
  }

  @media screen and (min-width:  46.875rem) {
    .comment {
      grid-template-columns: 3.125rem 1fr;
      grid-template-rows: repeat(1, 1fr);
      align-items: start;
    }

    .replies {
    gap: 1.875rem;
    padding: 0.938rem 0 0.938rem 1.875rem;
  }
    .header .right {
      display: flex;
      gap: 0.625rem;
      align-items: center;
    }

    .header, .comment p {
      grid-column: 2;
    }

    .action {
      grid-column: 1;
      grid-row: 1;
      justify-content: center;
    }

    .action .right {
      display: none;
    }

    .score {
      flex-direction: column;
      align-items: center;
    }
  }
</style>