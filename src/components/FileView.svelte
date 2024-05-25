<script>
  import { show } from "../stores";
  import shell from "../assets/shell.png";
  import computer from "../assets/computer.png";
  import folder from "../assets/explorer.png";
  import { draggable } from "@neodrag/svelte";
  import logo from "../assets/win_xp_logo.png";
</script>

{#if $show}
  <div
    use:draggable={{ bounds: "body" }}
    class={`absolute top-[20%] left-[25%] w-[40%] h-[50%] bg-white border-4 border-[#235CD9]
  rounded-t-lg ${show ? "block" : "hidden"}`}
  >
    <div
      class="relative flex flex-row bg-gradient-to-b from-[#235CD9] to-[#2663E0] pl-3 text-white text-sm h-8 justify-between"
    >
      <div class="flex flex-row items-center">
        <img src={computer} alt="My Computer" class="w-6 h-6" />
        <p class="pl-1">My Computer</p>
      </div>

      <div class="-mr-2">
        <button
          on:click={() => show.update((currentValue) => !currentValue)}
          class="styled-button rounded-md flex flex-row items-center justify-center"
        >
          <p class="mx-1 text-md font-bold">X</p>
        </button>
      </div>
    </div>
    <div
      class="w-full h-6 bg-[#EFECDE] flex flex-row justify-between border-b-[1px] border-[#E3DECB]"
    >
      <div class="h-full ml-2 flex flex-row items-center gap-2">
        <p class="text-sm font-light">File</p>
        <p class="text-sm font-light">Edit</p>
        <p class="text-sm font-light">View</p>
        <p class="text-sm font-light">Favorites</p>
        <p class="text-sm font-light">Tools</p>
        <p class="text-sm font-light">Help</p>
      </div>
      <div
        class="h-full w-8 bg-white border-s-[1px] border-b-[1px] border-[#E3DECB]"
      >
        <img src={logo} alt="Windows logo" class="h-full w-8 object-contain" />
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
    background: linear-gradient(to bottom right, #f88944, #ec5858);
  }
</style>
