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
    <>
      <div class="border-2 text-center flex flex-col items-center justify-center font-average_sans rounded-lg link ">
        <a href={props.linkUrl}>{props.linkText}</a>
        <Show when={props.sublink}>
          {(sublink: Accessor<SublinkProps>) => <Sublink {...sublink()} />}
        </Show>
      </div>
    </>
  );
};

// TODO hydration issue?

export default Link;
