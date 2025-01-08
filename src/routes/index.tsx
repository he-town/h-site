import { A } from "@solidjs/router";
import Counter from "~/components/Counter";
import Header from "~/components/Header/Header";
import Newsfeed from "~/components/Newsfeed/Newsfeed";

export default function Home() {
  return (
    <>
      <Header />
      <Newsfeed />
    </>
  );
}
