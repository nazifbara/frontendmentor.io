<script>
  import Avatar from "./Avatar.svelte";
  import Icon from "./Icon.svelte";
  import Form from "./Form.svelte";
  import { data } from "../stores";

  export let comment;

  $: replyCommentId = $data.replyCommentId;

  function handleReplyButtonClick() {
    data.showReplyForm(comment.id)
  }

  function handleReply(e) {
    const textarea = e.target[0]
    data.reply(comment.id, textarea.value);
    textarea.value = '';
  }
</script>

<article class="comment">
  <div>
    <header class="header">
      <div class="left"><Avatar src={comment.user.image.webp} alt="Avatar of {comment.user.username}" />
        <h1 class="username">{comment.user.username}</h1>
        <time class='time'>{comment.createdAt}</time></div>
  
      <div class="right">
        <button on:click={handleReplyButtonClick} class="reply-btn"><Icon name='reply'/> Reply</button>
      </div>
    </header>
    
    <p>{comment.content}</p>
  
  </div>
  <div class="action">
    <div class="score">
      <button>
        <Icon name='plus'/>
      </button>
      <span>{comment.score}</span>
      <button>
        <Icon name='minus'/>
      </button>
    </div>

    <button on:click={handleReplyButtonClick} class="reply-btn"><Icon name='reply'/> Reply</button>
  </div>
</article>

{#if replyCommentId === comment.id} 
  <Form on:submit={handleReply} isReply />
{/if}

{#if comment.replies && comment.replies.length !== 0 }
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
    border-radius: 10px;
    font-weight: var(--fontBold);
    color: var(--moderateBlue);
    cursor: pointer;
  }

  .score button {
    border: none;
    background-color: transparent;
  }

  .score button:hover :global(path) {
    fill: var(--moderateBlue);
    transition: fill ease-in 0.3s;
  }

  .score > * {
    padding: 10px;
  }

  .reply-btn {
    display: flex;
    align-items: center;
    gap: 8px;
    border: none;
    background-color: transparent;
    color: var(--moderateBlue);
    transition: opacity ease-in 0.3s;
  }

  .reply-btn:hover {
    opacity: 0.5;
  }

  .replies {
    display: flex;
    gap: 15px;
    padding: 15px 0;
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
    gap: 30px;
    padding: 15px 0 15px 30px;
  }
    .header .right {
      display: initial;
    }

    .header, .comment p {
      grid-column: 2;
    }

    .action {
      grid-column: 1;
      grid-row: 1;
      justify-content: center;
    }

    .action .reply-btn {
      display: none;
    }

    .score {
      flex-direction: column;
      align-items: center;
    }
  }
</style>