import css from "../ImageCard/ImageCard.module.css";
const ImageCard = ({ image, openModal }) => {
  const handleClick = () => {
    openModal(image.urls.regular);
  };
  return (
    <div>
      <div>
        <img
          onClick={handleClick}
          className={css.img}
          src={image.urls.small}
          alt={image.slug}
        />
        <p className={css.text}>Here can be your comercial</p>
      </div>
    </div>
  );
};

export default ImageCard;
