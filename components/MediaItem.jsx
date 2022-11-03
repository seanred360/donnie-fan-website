import Image from "next/image";

const MediaItem = ({ href, img, text }) => {
  return (
    <div className="max-w-[300px] mb-[24px]">
      <a className="relative" href={href}>
        <Image
          width="300"
          height="150"
          layout="fixed"
          src={img}
          objectFit="cover"
          alt="thumbnail"
        />
      </a>
      <div>
        <span>{text}</span>
      </div>
    </div>
  );
};
export default MediaItem;
