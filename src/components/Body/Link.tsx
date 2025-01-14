import "./Link.css";

export type SubLinkProps = {
  linkText: string;
  linkUrl: string;
};

type LinkProps = {
  linkText: string;
  linkUrl?: string;
  subLink?: SubLinkProps;
};

const Link = (props: LinkProps) => {
  return (
    <a
      href={props.linkUrl}
      class="border-2 flex items-center justify-center font-average_sans link"
    >
      <div>
        <div class="text-center">{props.linkText}</div>
        {props.subLink && <div />}
      </div>
    </a>
  );
};

export default Link;
