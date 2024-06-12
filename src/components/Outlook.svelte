<script>
  import { showOutlook, hideOutlook } from "../stores";
  import { draggable } from "@neodrag/svelte";
  import { resize } from "@svelte-put/resize";
  import outlook from "../assets/outlook.png";
  import window from "../assets/window.svg";
  import logo from "../assets/win_xp_logo.webp";
  let position = { x: 0, y: 0 };
  let storedWidth;
  let storedHeight;
  let isMaximized = false;
  let enabled = true;
  function handleMaximizeClick() {
    if (!isMaximized) {
      position.x = 0;
      position.y = 0;
      storedWidth = document.getElementById("myContainer").style.width;
      storedHeight = document.getElementById("myContainer").style.height;
      document.getElementById("myContainer").style.width = "100%";
      document.getElementById("myContainer").style.height = "100%";
      isMaximized = !isMaximized;
    } else {
      document.getElementById("myContainer").style.width = storedWidth;
      document.getElementById("myContainer").style.height = storedHeight;
      isMaximized = !isMaximized;
    }
  }
  function handleClick() {
    showOutlook.update((currentValue) => false);
    hideOutlook.update((currentValue) => false);
  }
  function handleSend() {
    console.log("Email sent");
  }
</script>

{#if $showOutlook && $hideOutlook}
  <div
    id="myContainer"
    use:draggable={{
      bounds: "body",
      position,
      onDrag: ({ offsetX, offsetY }) => {
        position = { x: offsetX, y: offsetY };
      },
      handle: ".handle",
    }}
    use:resize={{ enabled }}
    class={`absolute resize overflow-auto sm:min-w-[55%] sm:min-h-[40%] md:min-w-[50%] md:min-h-[35%] lg:min-w-[40%]  max-h-[100%] max-w-[100%] ${isMaximized ? "top-0 left-0 w-full h-full" : "top-[20%] left-[25%] w-[50%] h-[50%]"} bg-[#EFECDE] border-4 border-[#235CD9]
  rounded-t-lg flex flex-col`}
  >
    <div class="handle">
      <!-- Blue Ribbon  -->
      <div class="flex flex-row items-center ml-2">
        <img src={outlook} alt="Email" class="w-6 h-6" />
        <p class="pl-1">Outlook</p>
      </div>

      <div class="flex flex-row gap-[2px]">
        <button
          on:click={() => hideOutlook.update((currentValue) => !currentValue)}
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
        <button
          class="text-xs font-light hover:bg-[#3168D5] px-2 h-[95%] hover:text-white"
          >File</button
        >
        <button
          class="text-xs font-light hover:bg-[#3168D5] px-2 h-[95%] hover:text-white"
        >
          Edit
        </button>
        <button
          class="text-xs font-light hover:bg-[#3168D5] px-2 h-[95%] hover:text-white"
        >
          View
        </button>
        <button
          class="text-xs font-light hover:bg-[#3168D5] px-2 h-[95%] hover:text-white"
        >
          Favorites
        </button>
        <button
          class="text-xs font-light hover:bg-[#3168D5] px-2 h-[95%] hover:text-white"
        >
          Tools
        </button>
        <button
          class="text-xs font-light hover:bg-[#3168D5] px-2 h-[95%] hover:text-white"
        >
          Help
        </button>
      </div>
      <div
        class="h-full w-8 bg-white border-s-[1px] border-b-[1px] border-[#E3DECB]"
      >
        <img src={logo} alt="Windows logo" class="h-full w-8 object-contain" />
      </div>
    </div>
    <!-- Send Button -->
    <div
      class="w-full h-10 bg-[#EFECDE] flex flex-row justify-between border-b-[1px] border-[#E3DECB]"
    >
      <button
        class="ml-2 px-2 text-xs font-light hover:bg-[#235CD9] hover:text-white"
        on:click={handleSend}>Send</button
      >
    </div>
    <!-- From, To and Subject -->
    <form
      class="w-full pl-4 pr-2 text-xs font-light flex flex-row items-center h-8 bg-[#EFECDE] justify-between"
    >
      <label for="from_address" class="w-14">From: </label>
      <input
        type="text"
        id="from_address"
        name="from_address"
        class="ml-4 h-6 pl-2 w-full border-t-[1px] border-l-[1px] border-black focus:outline-none"
      />
    </form>
    <!-- TODO: Fix this -->
    <form
      class="w-full pl-4 pr-2 text-xs font-light flex flex-row items-center h-8 bg-[#EFECDE] justify-between"
    >
      <label for="from_address" class="w-14">To: </label>
      <input
        type="text"
        id="from_address"
        name="from_address"
        placeholder="ioan.alex.evangelou@gmail.com"
        class="ml-4 h-6 pl-2 w-full border-t-[1px] border-l-[1px] border-black focus:outline-none"
      />
    </form>
    <!-- TODO: Fix this -->
    <form
      class=" w-full pl-4 pr-2 text-xs font-light flex flex-row items-center h-8 bg-[#EFECDE] justify-between border-b-[1px] border-[#E3DECB]"
    >
      <label for="from_address" class="w-14">Subject: </label>
      <input
        type="text"
        id="from_address"
        name="from_address"
        class="ml-4 h-6 pl-2 w-full border-t-[1px] border-l-[1px] border-black focus:outline-none"
      />
    </form>
    <!-- Textarea for email body -->
    <textarea
      class="w-full h-[156px] border-b-2 border-[#EFECDE] focus:outline-none p-2 resize-none"
      placeholder="Type your message here..."
    ></textarea>
  </div>
{/if}

<style>
  .handle {
    position: relative;
    display: flex;
    flex-direction: row;
    background-image: linear-gradient(to bottom, #235cd9, #2663e0);
    color: white;
    font-size: 0.875rem; /* Equivalent to 14px */
    height: 1.75rem; /* Equivalent to 28px */
    justify-content: space-between;
  }
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
