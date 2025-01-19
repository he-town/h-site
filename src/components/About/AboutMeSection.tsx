type AboutMeSectionProps = {
  heading: string;
  body: string;
};

const AboutMeSection = (props: AboutMeSectionProps) => {
  return (
    <div class="my-6">
      <div class="mb-3 font-average_sans text-2xl">{props.heading}</div>
      <div>{props.body}</div>
    </div>
  );
};

export default AboutMeSection;
