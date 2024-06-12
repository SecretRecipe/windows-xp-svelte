<script>
  import { hide, show } from "../stores";
  import pc from "../assets/computer.webp";

  let hideValue;

  function handleClick() {
    hide.update((currentValue) => !currentValue);
  }
  //Check the value of hide in order to condentionally render
  hide.subscribe((value) => {
    hideValue = value;
  });
</script>

<!-- File Explorer -->
{#if $show}
  <button
    class={`ml-2 pl-3 ${hideValue ? "bg-blue-800" : "bg-blue-500"} h-[80%] w-40 rounded-md items-center inline-flex text-white`}
    on:click={handleClick}
  >
    <img src={pc} alt="Windows Logo" class="mr-2 h-4 w-4 object-fill" />
    <p class="text-xs text-nowrap">My Computer</p>
  </button>
{/if}
