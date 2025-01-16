import { gsap } from "gsap";
import horizontalLoop from "./GSAPLoop";

const Newsfeed = () => {
  const myContent = <span>My content</span>;
  // const scrollingText = gsap.utils.toArray("span");
  // const tl = horizontalLoop(scrollingText, { repeat: -1 });

  return <div class="mx-4 p-4 border-2">{myContent}</div>;
};

export default Newsfeed;
