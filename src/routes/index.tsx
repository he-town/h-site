import Body from "~/components/Body/Body";
import Header from "~/components/Header/Header";

export default function Home() {
  return (
    <div class="h-screen flex flex-col">
      <Header />
      <Body />
    </div>
  );
}

// let body take up all the remaining space on the page
