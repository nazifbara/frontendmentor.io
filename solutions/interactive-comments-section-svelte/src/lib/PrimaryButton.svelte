<button on:click class="primary-btn">
  <slot></slot>
</button>

<style>
  .primary-btn {
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

  .primary-btn:hover {
    opacity: .5;
  }
</style>