const MediaItem = ({ href, img, text }) => {
  return (
    <div className="max-w-[300px]">
      <a href={href}>
        <img className="w-[300px] h-[150px]" src={img} alt="thumbnail" />
      </a>
      <div>
        <span>{text}</span>
      </div>
    </div>
  );
};
export default MediaItem;
