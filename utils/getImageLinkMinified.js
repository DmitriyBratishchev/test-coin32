export const getImageLinkMinified = (imageLink) => (
  imageLink?.includes('https://media.rawg.io/media/')
    ? imageLink.replace('https://media.rawg.io/media/', 'https://media.rawg.io/media/crop/600/400/')
    : imageLink === null
      ? '/no-image.jpg'
      : imageLink
);
