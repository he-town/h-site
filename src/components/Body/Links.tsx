import Link from "./Link";

const Links = () => {
  return (
    <div class="border-2 flex-1 h-full grid grid-cols-2 grid-rows-2">
      <Link linkText="link 1" linkUrl="/about" />
      <Link linkText="link 2" />
      <Link linkText="link 3" />
      <Link linkText="link 4" />
    </div>
  );
};

export default Links;

// TODO abstract code reuse
// TODO should linkText be a prop or child? ...

/*
Saturday Jan 18, 10am - 12:30pm  (Ryder 354)
Saturday Feb 8, 9;30am – 11:30am (Ryder 354)
Tuesday Mar. 18, 6pm - 8:15pm  (Fenway Center)
*/
