import Link from "./Link";
import { SublinkProps } from "./Sublink";

const Links = () => {
  const resumeSubLink: SublinkProps = {
    linkText: "+ my resume",
    linkUrl:
      "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Box_model",
  };

  return (
    <div class="border-2 flex-1 h-full grid grid-cols-2 grid-rows-2">
      <Link linkText="link 1" linkUrl="/about" sublink={resumeSubLink} />
      <Link linkText="link 2" linkUrl="/newsfeedtest" />
      <Link linkText="link 3" />
      <Link linkText="link 4" />
    </div>
  );
};

export default Links;
