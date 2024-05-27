<script>
  import userImg from "../assets/github_prof.png";
  import TurnOff from "../assets/turn_off.svelte";
  import { navigate } from "svelte-routing";
  import key from "../assets/key.svg";
  import outlook from "../assets/outlook.png";
  import computer from "../assets/computer.png";
  import { showStart, hide, show } from "../stores";

  let FileView = null;
  async function handleClick() {
    hide.update(() => true);
    show.update(() => true);
    if (!FileView) {
      const module = await import("../components/FileView.svelte");
      FileView = module.default;
    }
    showStart.update((value) => false);
  }
</script>

{#if $showStart}
  <div
    class="flex flex-col absolute bottom-9 left-0 w-[340px] h-[400px] bg-white rounded-t-md border-2
  border-[#235CD9]"
  >
    <div
      class="bg-gradient-to-b from-[#3168D5] from-[50%] to-[95%] to-[#4993E6] h-16 flex border-b-2 border-red-400"
    >
      <!-- Top Div -->
      <div class="flex flex-row ml-2 h-[90%] mt-[2px] items-center gap-2">
        <!-- User Logo div -->
        <div class="w-14 border-white border-[1px] rounded-md">
          <img src={userImg} alt="User" class="h-full w-14" />
        </div>
        <p class="text-white text-lg">Alex</p>
      </div>
    </div>
    <!-- Container Div -->
    <div class="flex flex-grow h-full w-full mt-2">
      <div class="grid grid-cols-2 w-full h-16">
        <!-- Email Button -->
        <button
          class="flex flex-row items-center hover:bg-[#3168D5] hover:text-white"
        >
          <img src={outlook} alt="Email" class="h-16 w-16" />
          <div class="">
            <p class="text-sm text-start">Outlook</p>
            <p class="text-xs font-extralight">Email Application</p>
          </div>
        </button>
        <!-- Computer Button -->
        <button
          class="flex flex-row items-center hover:bg-[#3168D5] hover:text-white"
          on:click={handleClick}
        >
          <img src={computer} alt="Email" class="h-8 w-8" />
          <div class="ml-2">
            <p class="text-sm text-start">My Computer</p>
            <p class="text-xs font-extralight">View my info</p>
          </div>
        </button>
      </div>
    </div>
    <!-- Footer -->
    <div
      class="absolute bottom-0 w-full h-10 bg-gradient-to-t from-[#3168D5] from-[50%] to-[95%] to-[#4993E6] flex flex-row justify-end items-center gap-2"
    >
      <button
        class="bg-yellow-500 border-[1px] h-[28px] w-[28px] border-white hover:bg-yellow-400 text-gray-800 px-1 rounded flex flex-row items-center"
        on:click={() => navigate("/login")}
      >
        <img src={key} alt="Log Off" />
      </button>
      <p class="text-xs text-white font-thin mr-2">Log Off</p>

      <button
        class="bg-red-500 border-[1px] h-[28px] w-[28px] border-white hover:bg-red-400 text-gray-800 px-1 rounded flex flex-row items-center"
        on:click={() => navigate("/")}
      >
        <TurnOff />
      </button>
      <p class="text-xs text-white font-thin mr-2">Turn off computer</p>
    </div>
  </div>
{/if}
