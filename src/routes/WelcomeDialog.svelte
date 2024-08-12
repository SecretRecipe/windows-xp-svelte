<!-- File: src/components/WelcomeDialog.svelte -->
<script>
  export let visible = false;

  function closeDialog() {
    visible = false;
  }
</script>

{#if visible}
  <div class="xp-dialog">
    <div class="xp-dialog-header">
      <span>Welcome</span>
      <button on:click={closeDialog}>X</button>
    </div>
    <div class="xp-dialog-body">
      <p>Welcome to DerpFi</p>
    </div>
  </div>
{/if}

<style>
  .xp-dialog {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 300px;
    background: #c0c0c0;
    border: 2px solid #000;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  }

  .xp-dialog-header {
    background: #000080;
    color: white;
    padding: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
  }

  .xp-dialog-body {
    padding: 20px;
    text-align: center;
    font-size: 14px;
  }

  .xp-dialog-header button {
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    font-size: 14px;
  }

  .xp-dialog-header button:hover {
    color: #ff0000;
  }
</style>
