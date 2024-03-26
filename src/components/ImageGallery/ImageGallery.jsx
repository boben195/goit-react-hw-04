const ImageGallery = ({ slides }) => {
  if (!Array.isArray(slides) || slides.length === 0) {
    return null;
  }
  return (
    <div>
      <ul>
        {slides.map((slide) => (
          <li key={slide.id}>
            <div>
              <img src={slide.urls.small} alt={slide.slug} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
