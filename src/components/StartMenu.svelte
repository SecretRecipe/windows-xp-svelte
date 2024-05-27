<script>
  import userImg from "../assets/github_prof.png";
  import TurnOff from "../assets/turn_off.svelte";
  import { navigate } from "svelte-routing";
  import key from "../assets/key.svg";
</script>

<div
  class="absolute bottom-9 left-0 w-[340px] h-[400px] bg-white rounded-t-md border-2
  border-[#235CD9]"
>
  <div
    class="bg-gradient-to-b from-[#3168D5] from-[50%] to-[95%] to-[#4993E6] h-16 flex border-b-2 border-red-400"
  >
    <div class="flex flex-row ml-2 h-[90%] mt-[2px] items-center gap-2">
      <div class="w-14 border-white border-2 rounded-md">
        <img src={userImg} alt="User" class="h-full w-14" />
      </div>
      <p class="text-white text-lg">Alex</p>
    </div>
  </div>
  <div
    class="absolute bottom-0 w-full h-10 bg-gradient-to-t from-[#3168D5] from-[50%] to-[95%] to-[#4993E6] flex flex-row justify-end items-center gap-2"
  >
    <button
      class="bg-yellow-500 border-[1px] h-[28px] w-[28px] border-white hover:bg-yellow-400 text-gray-800 px-1 rounded flex flex-row items-center"
      on:click={() => navigate("/")}
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
