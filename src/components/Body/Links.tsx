import Link from "./Link";
import { SublinkProps } from "./Sublink";

const Links = () => {
  const resumeSubLink: SublinkProps = {
    linkText: "+ my resume",
    linkUrl:
      "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Box_model",
  };

  return (
    <div class="flex-1 h-full grid grid-cols-2 grid-rows-2">
      <Link linkText="about me" linkUrl="/about" sublink={resumeSubLink} />
      <Link linkText="my github" linkUrl="https://github.com/he-town" />
      <Link linkText="learn with me!" />
      <Link
        linkText="reach me! ✉"
        linkUrl="mailto:hannaheichinger@outlook.com"
      />
    </div>
  );
};

export default Links;
