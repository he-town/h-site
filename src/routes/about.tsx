import AboutMeSection from "~/components/About/AboutMeSection";
import { sections } from "~/components/About/data";

export default function About() {
  return (
    <div class="m-4 font-average_sans text-lg">
      <div>
        <span>Hi, I'm Hannah!</span> I'm a recent BSCS grad from Northeastern
        University, and I'm looking for SWE roles in the Boston area. Here's a
        little about me!
      </div>

      <AboutMeSection heading={sections[0].heading} body={sections[0].body} />
    </div>
  );
}
