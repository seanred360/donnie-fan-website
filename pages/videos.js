import Meta from "../components/Meta";
import SectionHeader from "../components/common/SectionHeader";

const videos = () => {
  return (
    <>
      <Meta
        title="Donnie Fan's Medea"
        keywords="@donniefancomedy beijing greek tragedy 77 theatre yy team c&c culture park beijingers 77剧场 美妆妖"
        description="Medea is a modern reimagining of what happens in the aftermath of the original greek tragedy. This two character, one act play explores motive, consequence, and how breakdown of communication is often at the root of tragedy."
      />
      <SectionHeader
        header="Donnie Fan's Medea"
        subHeader="A modern reimagining of the Greek tragedy"
      />
      <video controls muted autoPlay>
        <source src="videos/medea-highlights.mp4" type="video/mp4"></source>
      </video>
      <p>
        Medea is a modern reimagining of what happens in the aftermath of the
        original greek tragedy. This two character, one act play explores
        motive, consequence, and how breakdown of communication is often at the
        root of tragedy. This Chinese language play ran from January 20th to
        21st 2022 at the 77 Theatre in Beijing (北京市东城区美术馆后街77号).
      </p>
      <style jsx>
        {`
          video {
            width: 100%;
            border: 2px solid white;
          }

          p {
            padding: 10px;
            font-size: 16px;
            border-top: 5px solid #f4c203;
            border-radius: 50%:
          }
        `}
      </style>
    </>
  );
};

export default videos;
