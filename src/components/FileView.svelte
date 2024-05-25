<script>
  import { show, hide } from "../stores";
  import shell from "../assets/shell.png";
  import computer from "../assets/computer.png";
  import folder from "../assets/explorer.png";
  import { draggable } from "@neodrag/svelte";
  import logo from "../assets/win_xp_logo.png";

  function handleClick() {
    show.update((currentValue) => false);
    hide.update((currentValue) => false);
  }
</script>

<!-- Show this DIV if user has double clicked on the Computer -->
{#if $show && $hide}
  <div
    use:draggable={{ bounds: "body" }}
    class={`absolute top-[20%] left-[25%] w-[40%] h-[50%] bg-white border-4 border-[#235CD9]
  rounded-t-lg ${show ? "block" : "hidden"}`}
  >
    <div
      class="relative flex flex-row bg-gradient-to-b from-[#235CD9] to-[#2663E0] text-white text-sm h-7 justify-between"
    >
      <!-- Blue Ribbon  -->
      <div class="flex flex-row items-center ml-2">
        <img src={computer} alt="My Computer" class="w-6 h-6" />
        <p class="pl-1">My Computer</p>
      </div>

      <div class="flex flex-row gap-[2px]">
        <button
          on:click={() => show.update((currentValue) => !currentValue)}
          class="styled-button-blue rounded-md flex flex-row items-center justify-center"
        >
          <p class="mx-1 text-md font-bold mb-1">_</p>
        </button>
        <button
          on:click={() => show.update((currentValue) => !currentValue)}
          class="styled-button-blue rounded-md flex flex-row items-center justify-center"
        >
          <p class="mx-1 text-md font-bold">X</p>
        </button>
        <button
          on:click={handleClick}
          class="styled-button-red rounded-md flex flex-row items-center justify-center"
        >
          <p class="mx-1 text-md font-bold">X</p>
        </button>
      </div>
    </div>
    <!-- First section with Windows Logo -->
    <div
      class="w-full h-6 bg-[#EFECDE] flex flex-row justify-between border-b-[1px] border-[#E3DECB]"
    >
      <div class="h-full ml-2 flex flex-row items-center gap-2">
        <p class="text-xs font-light">File</p>
        <p class="text-xs font-light">Edit</p>
        <p class="text-xs font-light">View</p>
        <p class="text-xs font-light">Favorites</p>
        <p class="text-xs font-light">Tools</p>
        <p class="text-xs font-light">Help</p>
      </div>
      <div
        class="h-full w-8 bg-white border-s-[1px] border-b-[1px] border-[#E3DECB]"
      >
        <img src={logo} alt="Windows logo" class="h-full w-8 object-contain" />
      </div>
    </div>
    <!-- Second section -->
    <div
      class="w-full h-10 bg-[#EFECDE] flex flex-row justify-between border-b-[1px] border-[#E3DECB]"
    >
      <div class="h-full ml-2 flex flex-row items-center gap-2">
        <p class="text-xs font-light">File</p>
        <p class="text-xs font-light">Edit</p>
        <p class="text-xs font-light">View</p>
        <p class="text-xs font-light">Favorites</p>
        <p class="text-xs font-light">Tools</p>
        <p class="text-xs font-light">Help</p>
      </div>
    </div>
  </div>
{/if}

<style>
  .styled-button-red {
    height: 80%;
    padding-left: 2px;
    padding-right: 2px;
    border: 1px solid white;
    margin-top: 2px;
    background: linear-gradient(to bottom right, #f88944, #d43636);
    transition: background 0.3s;
  }
  .styled-button-red:hover {
    background: linear-gradient(to bottom right, #f88944, #ec5858);
  }
  .styled-button-blue {
    height: 80%;
    padding-left: 2px;
    padding-right: 2px;
    border: 1px solid white;
    margin-top: 2px;
    background: linear-gradient(to bottom right, #94b2f9, #004e98);
    transition: background 0.3s;
  }
  .styled-button-blue:hover {
    background: linear-gradient(to bottom right, #94b2f9, #5174c6);
  }
</style>
