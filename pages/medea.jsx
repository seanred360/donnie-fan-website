import Meta from "../components/Meta";
import { Icon } from "@iconify/react";

const medea = () => {
  return (
    <section>
      <Meta
        title="Donnie Fan's Medea"
        keywords="@donniefancomedy beijing greek tragedy 77 theatre yy team c&c culture park beijingers 77剧场 美妆妖"
        description="Medea is a modern reimagining of what happens in the aftermath of the original greek tragedy. This two character, one act play explores motive, consequence, and how breakdown of communication is often at the root of tragedy."
      />
      <h1 className="h-auto">Donnie Fan's Medea</h1>
      <span className="font-[300] text-[14px]">
        A modern reimagining of the Greek tragedy
      </span>
      <video className="my-[24px] mx-auto" controls muted autoPlay>
        <source src="videos/medea-highlights.mp4" type="video/mp4"></source>
      </video>
      <p className="max-w-[900px]">
        Medea is a modern reimagining of what happens in the aftermath of the
        original greek tragedy. This two character, one act play explores
        motive, consequence, and how breakdown of communication is often at the
        root of tragedy. This Chinese language play ran from January 20th to
        21st 2022 at the 77 Theatre in Beijing (北京市东城区美术馆后街77号).
      </p>
      <a
        className="hover:text-yellow transition-all"
        href="https://youtu.be/nouHLnKanyU"
      >
        <Icon width="50" icon="fa:youtube" />
      </a>
    </section>
  );
};

export default medea;
