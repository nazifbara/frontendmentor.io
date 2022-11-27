<script>
  import Avatar from "./Avatar.svelte";
  import Icon from "./Icon.svelte";
  import Form from "./Form.svelte";
  import { data } from "../stores";
  import { voteTypes } from "../utils/constants";

  export let comment;

  const isAuthor = $data.currentUser.username === comment.user.username;
  const idPath = [...comment.parentIds, comment.id];

  $: replyCommentId = $data.replyCommentId;
  $: votes = $data.votes;

  function handleReplyButtonClick() {
    data.showReplyForm(comment.id)
  }

  const  handleReply = (content) => data.reply(content, idPath)
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
          <button class="btn delete"><Icon name='delete'/> Delete</button>
          <button class="btn edit"><Icon name='edit'/> Edit</button>
        {:else}
          <button on:click={handleReplyButtonClick} class="btn reply"><Icon name='reply'/> Reply</button>
        {/if}
      </div>
    </header>
    
    <p>{comment.content}</p>
  
  </div>
  <div class="action">
    <div class="score">
      <button 
        on:click={() => data.vote(voteTypes.UP, idPath)} 
        class:active={votes[comment.id] === voteTypes.UP}
      >
        <Icon name='plus'/>
      </button>
      <span>{comment.score}</span>
      <button 
        on:click={() => data.vote(voteTypes.DOWN, idPath)} 
        class:active={votes[comment.id] === voteTypes.DOWN}
      >
        <Icon name='minus'/>
      </button>
    </div>

    <button on:click={handleReplyButtonClick} class="btn reply"><Icon name='reply'/> Reply</button>
  </div>
</article>

{#if replyCommentId === comment.id} 
  <Form onSubmit={handleReply} isReply />
{/if}

{#if comment.replies.length !== 0 }
<div class="replies">
  <hr/>
  <ul>
    {#each comment.replies as reply }
    <li>
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
    border-color: var(--lightGray);
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
    }

    .header, .comment p {
      grid-column: 2;
    }

    .action {
      grid-column: 1;
      grid-row: 1;
      justify-content: center;
    }

    .action .reply {
      display: none;
    }

    .score {
      flex-direction: column;
      align-items: center;
    }
  }
</style>