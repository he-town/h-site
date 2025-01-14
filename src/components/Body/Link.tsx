import "./Link.css";
import Sublink, { SublinkProps } from "./Sublink";

type LinkProps = {
  linkText: string;
  linkUrl?: string;
  sublink?: SublinkProps;
};

const Link = (props: LinkProps) => {
  return (
    <a
      href={props.linkUrl}
      class="border-2 flex items-center justify-center font-average_sans link"
    >
      <div>
        <div class="text-center">{props.linkText}</div>
        {props.sublink && <Sublink {...props.sublink} />}
      </div>
    </a>
  );
};

export default Link;
