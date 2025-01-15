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
    <div class="border-2 text-center flex items-center justify-center font-average_sans link ">
      <a href={props.linkUrl}>
        {props.linkText}
        <Sublink linkText="hwhw" />
      </a>
    </div>
  );
};

// TODO hydration issue?

export default Link;
