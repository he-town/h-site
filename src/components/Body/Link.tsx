import "./Link.css";

type LinkProps = {
  linkText: string;
  linkUrl?: string;
};

const Link = (props: LinkProps) => {
  return (
    <a
      href={props.linkUrl}
      class="border-2 flex items-center justify-center font-average_sans link"
    >
      {props.linkText}
    </a>
  );
};

export default Link;
