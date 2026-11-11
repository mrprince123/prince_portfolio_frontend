import { Seo } from "@/components/seo";
import { Work } from "./Work";

export const About = () => {
  return (
    <>
      <Seo
        title="About &amp; Work Portfolio | Prince Kumar Sahni"
        description="Comprehensive career history, engineering philosophy, production impact telemetry, and system architecture of Prince Kumar Sahni matching princesingh.work/#about."
        url="https://princesahni.com/about"
      />
      {/* Exact format matching https://www.princesingh.work/#about */}
      <Work />
    </>
  );
};

export default About;
