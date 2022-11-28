<script>
  import { createEventDispatcher } from 'svelte';
  import { fly, fade } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';

  import Button from './Button.svelte';

  const dispatch = createEventDispatcher();

  let isOpen = false;

  function confirm() {
    dispatch('confirm');
    close()
  }

  function open() {
    isOpen = true
  }

  function close() {
    isOpen = false
  }
</script>

<div on:click={open} on:keydown={open}>
  <slot/>
</div>

{#if isOpen}
  <div transition:fade="{{easing: cubicOut, duration: 400}}" class="overlay" on:click={close} on:keydown={close}/>

  <article transition:fly="{{y: 200, easing: cubicOut, duration: 400}}" class="content">
    <h2 class="heading">Delete comment</h2>
    <p>
      Are you sure you want to delete is comment? This will remove the comment and can't be undone.
    </p>
    <div class="action"><Button on:click={close}>no, cancel</Button><Button on:click={confirm} variant='danger'>yes, delete</Button></div>
  </article>
{/if}

<style>
  .overlay {
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, .6);
  }

  .heading {
    color: var(--darkBlue);
    font-weight: var(--fontBold);
    font-size: 1.125rem;
  }

  .content {
    z-index: 3;
    display: flex;
    flex-direction: column;
    gap: 0.938rem;
    position: fixed;
    top: 45%;
    right: 1.25rem;
    left: 1.25rem;
    transform: translateY(-50%);
    max-width: 400px;
    margin: 0 auto;
    background-color: var(--white);
    padding: 1.25rem 1.563rem;
    border-radius: 0.625rem;
  }

  .action {
    display: flex;
    gap: 0.938rem;
  }

</style>