export type SublinkProps = {
  linkText: string;
  linkUrl: string;
};

const Sublink = (props: SublinkProps) => (
  <a href={props.linkUrl}>{props.linkText}</a>
);

export default Sublink;

// todo: needs to escape flexbox conditions and be singularly a child of the "link n" div
