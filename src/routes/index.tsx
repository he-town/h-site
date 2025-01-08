import Body from "~/components/Body/Body";
import Header from "~/components/Header/Header";

export default function Home() {
  return (
    <div class="h-screen flex flex-col mx-24 pb-12">
      <Header />
      <Body />
    </div>
  );
}
