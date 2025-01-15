export type SublinkProps = {
  linkText: string;
  linkUrl?: string;
};

const Sublink = (props: SublinkProps) => (
  <a href={props.linkUrl} class="sublink">
    {props.linkText}
  </a>
);

export default Sublink;

// todo: change style of parent element based on presence of child?
