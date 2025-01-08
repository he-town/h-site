type LinkProps = {
  linkText: string;
  linkUrl?: string;
};

const Link = (props: LinkProps) => {
  return (
    <div class="border-2 flex items-center justify-center font-average_sans text-6xl">
      {props.linkText}
    </div>
  );
};

export default Link;
