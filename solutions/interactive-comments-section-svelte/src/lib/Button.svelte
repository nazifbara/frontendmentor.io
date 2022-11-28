<script>
  export let variant = '';
</script>

<button on:click class="btn" class:primary={variant === 'primary'} class:danger={variant === 'danger'}>
  <slot></slot>
</button>

<style>
  .btn {
    grid-row: 2;
    justify-self: end;
    background-color: var(--grayishBlue);
    color: var(--white);
    text-transform: uppercase;
    font-size: 0.938rem;
    border: 1px solid var(--grayishBlue);
    border-radius: 0.625rem;
    padding: 0.625rem 1rem;
    transition: opacity 0.3s ease-in;
  }

  .btn.primary {
    background-color: var(--moderateBlue);
    border: 1px solid var(--moderateBlue);
  }

  .btn.danger {
    background-color: var(--softRed);
    border: 1px solid var(--softRed);
  }

  .btn:hover {
    opacity: .5;
  }
</style>