import Meta from "../components/Meta";
import ImageGallery from "react-image-gallery";
import SectionHeader from "../components/common/SectionHeader";

const photos = () => {
  const fileDir = "images/slideshow/";
  const thumbnailDir = "images/slideshow/thumbnails/";
  let images = [];
  for (let i = 1; i < 19; i++) {
    images.push({
      original: `${fileDir}${i}.webp`,
      thumbnail: `${thumbnailDir}${i}.webp`,
    });
  }

  return (
    <>
      <Meta
        title="Donnie Fan Photos"
        keywords="@donniefancomedy comedy beijing stand-up donnie fan china comedy club china photos 幽默小区 周托尼 cinker pictures beijingers"
        description="Get a feel for the atmosphere of Donnie Fan's stand-up comedy in Beijing."
      />
      <SectionHeader header="Photos" subHeader="Donnie Fan Comedy in Beijing" />
      <ImageGallery items={images} />
    </>
  );
};

export default photos;
