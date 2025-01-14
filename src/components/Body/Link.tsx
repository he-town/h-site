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

// wrapped div makes the content flow in blocks instead of inline
// but the sublink needs to somehow "escape" the "items-center" condition

export default Link;
