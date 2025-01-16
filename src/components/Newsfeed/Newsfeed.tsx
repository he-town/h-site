import { gsap } from "gsap";
import horizontalLoop from "./GSAPLoop";
import { onMount } from "solid-js";

const Newsfeed = () => {
  let contentRef!: HTMLDivElement;
  onMount(() => {
    const tl = horizontalLoop(contentRef, { repeat: -1 });
  });

  return (
    <div class="mx-4 p-4 border-2">
      <div ref={contentRef}>My content</div>
    </div>
  );
};

export default Newsfeed;
