<script>
  import profile from "../assets/github_prof.png";
  import { aboutMe, whyMe, chooseMe, connect } from "../static/aboutme";
</script>

<div class="h-contain px-2">
  <img src={profile} alt="Profile" class="h-20 w-20" />
  <div class="flex flex-col items-center justify-center">
    <h1 class="text-xl underline">Hello, and welcome!</h1>
  </div>
  <h2 class="text-justify">{aboutMe.content}</h2>
  <h1 class="text-center text-lg underline pt-2">{whyMe.title}</h1>
  <ul class="list-disc text-justify px-2 pt-2">
    {#each whyMe.points as point, index}
      <li class="py-2">
        {#if index === 0}
          <span class="font-bold"> Tech Savvy: </span>
        {/if}
        {#if index === 2}
          <span class="font-bold"> AI & Machine Learning: </span>
        {/if}
        {#if index === 3}
          <span class="font-bold"> Versatility: </span>
        {/if}
        {point}
      </li>
    {/each}
  </ul>
  <h1 class="text-center text-lg underline">{chooseMe.title}</h1>
  <ul class="text-justify list-disc px-2">
    {#each chooseMe.points as point, index}
      <li class="py-2">
        {#if index === 0}
          <span class="font-bold"> Proven Track Record: </span>
        {/if}
        {#if index === 1}
          <span class="font-bold"> Collaborative Spirit: </span>
        {/if}
        {#if index === 2 || index === 3}
          <span class="font-bold"> Commitment to Excellence: </span>
        {/if}
        {point}
      </li>
    {/each}
  </ul>
</div>
