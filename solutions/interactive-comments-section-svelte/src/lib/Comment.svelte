<script>
  export let comment;
</script>

<article>
  <header>
    <img src={comment.user.image.webp} alt="Avatar of {comment.user.username}" />
    <h1>{comment.user.username}</h1>
    <time>{comment.createdAt}</time>
  </header>
  
  <p>{comment.content}</p>

  <div>
    <div>
      <button>
        +
      </button>
      <span>{comment.score}</span>
      <button>
        -
      </button>
    </div>

    <button>reply</button>
  </div>
</article>

<ul>
  {#each comment.replies ?? [] as reply }
    <li>
      <svelte:self comment={reply} />
    </li>
  {/each}
</ul>