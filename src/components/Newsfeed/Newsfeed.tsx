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
    <div class="wrapper mx-4 pb-8">
      <div class="news-piece"> </div>
      <div class="news-piece"> </div>
      <div class="news-piece">Welcome to my page!</div>
      <div class="news-piece"> </div>
      <div class="news-piece"> </div>
      <div class="news-piece">Welcome to my page!</div>
      <div class="news-piece"> </div>
      <div class="news-piece"> </div>
      <div class="news-piece">Welcome to my page!</div>
    </div>
  );
};

export default Newsfeed;

// note: effect is achieved through flex-shrink: 0
