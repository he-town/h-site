import "./News.css";
import horizontalLoop from "./GSAPLoop";
import { onMount } from "solid-js";

const Newsfeed = () => {
  let contentRef!: HTMLDivElement;
  onMount(() => {
    const tl = horizontalLoop(".news-piece", { repeat: -1 });
  });

  return (
    <div class="border-2 flex overflow-hidden mx-4 p-4 items-center justify-between">
      <div class="news-piece">Coffee</div>
      <div class="news-piece">Latte</div>
      <div class="news-piece">Espresso</div>
      <div class="news-piece">Mocha</div>
      <div class="news-piece">Cortado</div>
      <div class="news-piece">Macchiato</div>
      <div class="news-piece">Flat White</div>
      <div class="news-piece">Cold Brew</div>
      <div class="news-piece">Nitro</div>
      <div class="news-piece">Dunks</div>
    </div>
  );
};

export default Newsfeed;
