<script>
  import vision_image from "../assets/computer_vision.webp";
  import { computer_vision, frontend_projects } from "../static/myproject";
  import win_xp from "../assets/win_xp_logo.webp";
</script>

<div class="h-contain px-2 justify-center items-center flex flex-col">
  <h1 class="text-center font-bold text-xl">My Projects</h1>
  <h2 class="text-center text-lg underline">
    Computer Vision & Machine Learning
  </h2>
  <!-- Add your project details here -->
  <div class="grid gap-4 grid-cols-2 place-items-center pt-2">
    <button
      class="w-[200px] h-[245px] bg-[#3168D5] rounded-md flex justify-center hover:scale-105"
      on:click={() => console.log("Hello there!")}
    >
      <div class="items-center flex flex-col text-white">
        <img
          src={vision_image}
          alt={computer_vision.title}
          class="h-1/4 rounded-sm bg-contain"
        />
        <h1 class="text-center font-semibold">{computer_vision.title}</h1>
        <h2 class="text-sm text-center pb-2">{computer_vision.subtitle}</h2>
        <p class="text-center text-xs pb-1 px-1">
          {computer_vision.description}
        </p>
      </div>
    </button>
  </div>
  <h2 class="text-center text-lg underline pt-4">Frontend Development</h2>
  <!-- Add your project details here -->
  <div class="grid gap-4 grid-cols-2 place-items-center pt-2">
    {#each frontend_projects as project}
      <a
        href={project.href}
        class="w-[200px] h-[245px] bg-[#3168D5] rounded-md flex justify-center hover:scale-105"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div class="items-center flex flex-col text-white">
          <img
            src={win_xp}
            alt={project.title}
            class="h-[133px] w-[200px] rounded-sm bg-contain"
          />
          <h1 class="text-center font-semibold">{project.title}</h1>
          <h2 class="text-sm text-center pb-2">{project.subtitle}</h2>
          <p class="text-center text-xs pb-1 px-1">
            {project.description}
          </p>
        </div>
      </a>
    {/each}
  </div>
</div>
