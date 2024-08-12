<script>
  export let visible = false;
  export let gifSrc = "astro.gif"; // Path to the GIF

  function closeDialog() {
    visible = false;
  }
</script>

{#if visible}
  <div class="dialog-overlay">
    <div class="dialog-box">
      <div class="dialog-header">
        <span class="dialog-title">Decentralized Earnings Resiliency Protocol</span>
        <button class="close-button" on:click={closeDialog}>X</button>
      </div>
      <div class="dialog-content">
        <img src={gifSrc} alt="Welcome GIF" class="welcome-gif" />
        <p>Welcome to DerpFi</p>
      </div>
      <div class="dialog-footer">
        <button class="ok-button" on:click={closeDialog}>OK</button>
      </div>
    </div>
  </div>
{/if}

<style>
  .dialog-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }

  .dialog-box {
    width: 300px;
    background: #c0c0c0;
    border: 2px solid #000080;
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    text-align: center;
  }

  .dialog-header {
    background: #000080;
    color: white;
    padding: 4px;
    border-bottom: 2px solid #000080;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .dialog-title {
    font-weight: bold;
    margin-left: 8px;
  }

  .close-button {
    background: #ff0000;
    color: white;
    border: none;
    padding: 2px 6px;
    cursor: pointer;
  }

  .dialog-content {
    padding: 16px;
    font-family: "Tahoma", sans-serif;
    font-size: 12px;
  }

  .welcome-gif {
    width: 100px; /* Adjust size as needed */
    height: auto;
    margin-bottom: 12px;
  }

  .dialog-footer {
    text-align: right;
    padding: 4px;
    border-top: 2px solid #000080;
  }

  .ok-button {
    background: #000080;
    color: white;
    border: none;
    padding: 4px 8px;
    cursor: pointer;
  }

  .ok-button:hover {
    background: #0000ff;
  }
</style>
