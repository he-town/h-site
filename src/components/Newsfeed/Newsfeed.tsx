import "./News.css";
import horizontalLoop from "./GSAPLoop";
import { onMount } from "solid-js";
import gsap from "gsap";

const Newsfeed = () => {
  let contentRef!: HTMLDivElement;
  onMount(() => {
    const news = gsap.utils.toArray(".news-piece");
    const tl = horizontalLoop(news, { repeat: -1 });
  });

  return (
    <div class="wrapper border-2 mx-4">
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

// note: effect is achieved through flex-shrink: 0
