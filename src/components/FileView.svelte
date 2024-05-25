<script>
  import { show, hide } from "../stores";
  import computer from "../assets/computer.png";
  import folder from "../assets/explorer.png";
  import { draggable } from "@neodrag/svelte";
  import logo from "../assets/win_xp_logo.png";
  import arrow_left from "../assets/arrow_left.svg";
  import arrow_down from "../assets/arrow_down.svg";
  import arrow_right from "../assets/arrow_right.svg";
  import search from "../assets/search.png";
  import window from "../assets/window.svg";

  let isSearchPressed = false;
  let isFolderSelected = false;
  let isMaximized = false;
  let offsetX = 0;
  let offsetY = 0;
  let position = { x: 0, y: 0 };
  function handleMaximizeClick() {
    isMaximized = !isMaximized;
    position.x = 0;
    position.y = 0;
  }
  function handleClick() {
    show.update((currentValue) => false);
    hide.update((currentValue) => false);
  }
  function handleSearchClick() {
    isSearchPressed = !isSearchPressed;
    console.log(isSearchPressed);
  }
  function handleFolderClick() {
    isFolderSelected = !isFolderSelected;
  }
</script>

<!-- Show this DIV if user has double clicked on the Computer -->
{#if $show && $hide}
  <div
    use:draggable={{
      bounds: "body",
      position,
      onDrag: ({ offsetX, offsetY }) => {
        position = { x: offsetX, y: offsetY };
      },
    }}
    class={`absolute  ${isMaximized ? "top-0 left-0 w-full h-full" : "top-[20%] left-[25%] w-[40%] h-[50%]"} bg-white border-4 border-[#235CD9]
  rounded-t-lg flex flex-col`}
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
          on:click={() => hide.update((currentValue) => !currentValue)}
          class="styled-button-blue rounded-md flex flex-row items-center justify-center"
        >
          <p class="mx-1 text-md font-bold mb-1">_</p>
        </button>
        <button
          on:click={handleMaximizeClick}
          class="styled-button-blue rounded-md flex flex-row items-center justify-center"
        >
          <img src={window} alt="Maximize" class="h-full w-4" />
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
        <!-- Back Button -->
        <button
          class="text-xs px-1 font-light inline-flex items-center active:bg-white h-full w-contain rounded-md"
        >
          <img
            src={arrow_left}
            alt="Back Button"
            class="w-5 h-5 object-contain mr-1"
          />
          Back
          <img
            src={arrow_down}
            alt="Expand"
            class="w-2 h-2 object-contain mt-[2px] ml-1"
          />
        </button>
        <!-- Forward Button -->
        <button class="text-xs font-light inline-flex items-center">
          <img
            src={arrow_right}
            alt="Back Button"
            class="w-5 h-5 object-contain mr-1"
          />
          <img
            src={arrow_down}
            alt="Expand"
            class="w-2 h-2 object-contain mt-[2px] ml-1"
          />
        </button>
        <!-- Search Button -->
        <button
          class={` rounded-sm py-1 px-1 w-[72px] h-[37px] text-xs font-light inline-flex items-center ${isSearchPressed ? "bg-white border-[0.5px] border-black" : "bg-transparent"} `}
          on:click={handleSearchClick}
        >
          <img
            src={search}
            alt="Back Button"
            class="w-5 h-5 object-contain mr-1"
          /> Search
        </button>
      </div>
    </div>
    <!-- Main Content -->
    <div
      class="flex-grow flex flex-col w-full justify-items-center px-4 pt-2 pb-4 gap-2"
    >
      <!-- Folder Buttons -->
      <button
        class={`object-contain w-[170px] rounded-sm py-1 px-1 w-contain h-[37px] text-sm inline-flex items-center `}
        on:click={handleFolderClick}
      >
        <img src={folder} alt="Folder" class={`w-10 h-10 object-contain`} />
        <p
          class={`${isFolderSelected ? "bg-blue-400 text-white border-[1px] border-dotted border-white" : "bg-transparent"} mx-2`}
        >
          About Me
        </p>
      </button>
      <!-- Second folder button -->
      <button
        class={`object-contain w-[170px] rounded-sm py-1 px-1 w-contain h-[37px] text-sm inline-flex items-center `}
        on:click={handleFolderClick}
      >
        <img src={folder} alt="Folder" class={`w-10 h-10 object-contain`} />
        <p
          class={`${isFolderSelected ? "bg-blue-400 text-white border-[1px] border-dotted border-white" : "bg-transparent"} mx-2`}
        >
          My Projects
        </p>
      </button>
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
