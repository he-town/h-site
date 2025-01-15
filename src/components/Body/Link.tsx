import { Accessor, Show } from "solid-js";
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
        <Show when={props.sublink}>
          {(sublink: Accessor<SublinkProps>) => <Sublink {...sublink()} />}
        </Show>
      </div>
    </a>
  );
};

// TODO hydration issue?

export default Link;
