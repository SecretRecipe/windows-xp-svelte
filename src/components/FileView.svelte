<script>
  import { show } from "../stores";
  import Close from "../assets/close.svelte";
</script>

{#if $show}
  <div
    class={`absolute top-[20%] left-[25%] w-[40%] h-[50%] bg-white border-2 border-blue-700
  rounded-t-lg ${show ? "block" : "hidden"}`}
  >
    <div
      class="relative flex flex-row bg-blue-700 pl-3 text-white text-sm h-8 justify-between"
    >
      <p class="pt-[6px]">My Computer</p>
      <div>
        <button
          on:click={() => show.update((currentValue) => !currentValue)}
          class="styled-button rounded-md flex flex-row items-center justify-center"
        >
          <p class="mx-1 text-md font-bold">X</p>
        </button>
      </div>
    </div>
  </div>
{/if}

<style>
  .styled-button {
    margin-right: 0.5rem;
    height: 80%;
    padding-left: 5px;
    padding-right: 5px;
    border: 1px solid white;
    margin-top: 2px;
    background: linear-gradient(to bottom right, #f88944, #d43636);
    transition: background 0.3s;
  }
  .styled-button:hover {
    background: linear-gradient(to bottom right, #d43636, #de2b2b);
  }
</style>
