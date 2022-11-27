<script>
  import { data } from "../stores";
  import Avatar from "./Avatar.svelte";

  export let isReply = false;
</script>

<form style:margin-top={isReply ? "0.438rem" : 0} on:submit|preventDefault={() => {}} class="comment-form">
  <textarea placeholder="Add a comment..."></textarea>
    <Avatar src="{$data.currentUser.image.webp}" alt="Avatar of {$data.currentUser.username}"/>
    <button>{isReply ? 'reply' : 'send'}</button>
</form>

<style>
  .comment-form {
    display: grid;
    grid-template-rows: repeat(2, auto);
    gap: 1.25rem;
    background-color: var(--white);
    border-radius: 0.625rem;
    padding: 0.938rem;
  }

  .comment-form textarea {
    grid-column: span 2;
    border-radius: 0.625rem;
    border: 1px solid var(--lightGray);
    resize: none;
    min-height: 6.25rem;
    padding: 0.938rem 1.25rem;
    font-weight: var(--fontMedium);
    outline: none;
    color: var(--darkBlue);
  }

  .comment-form textarea:focus {
    border-color: var(--moderateBlue);
  }

  .comment-form textarea::placeholder {
    color: var(--grayishBlue);
  }

  .comment-form :global(img) {
    grid-row: 2;
  }

  .comment-form button {
    grid-row: 2;
    justify-self: end;
    background-color: var(--moderateBlue);
    color: var(--white);
    text-transform: uppercase;
    border: 1px solid var(--moderateBlue);
    border-radius: 0.625rem;
    padding: 0.625rem 1.25rem;
    transition: opacity 0.3s ease-in;
  }

  .comment-form button:hover {
    opacity: .5;
  }

  @media screen and (min-width:  46.875rem) {
    .comment-form {
      grid-template-columns: auto 1fr auto;
      grid-template-rows: 1fr;
      align-items: start;
    }

    .comment-form :global(img) {
      grid-row: 1;
    }

    .comment-form textarea {
      grid-column: 2;
      grid-row: 1;
    }

    .comment-form button {
      grid-column: 3;
      grid-row: 1;
    }
  }
</style>