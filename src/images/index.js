// Use require.context to get all images from the directory
const imageContext = require.context('./', false, /\.(png|jpe?g|svg)$/);

// Create the projectImages object dynamically
export const projectImages = {};

// Fill projectImages with all images from the directory
imageContext.keys().forEach((key) => {
  // Remove './' from start and file extension from end
  const imageName = key.slice(2).replace(/\.(png|jpe?g|svg)$/, '');
  try {
    // Import the image
    const image = require(`./${key.slice(2)}`);
    projectImages[imageName] = image.default || image;
  } catch (err) {
    console.error(`Failed to load image: ${imageName}`, err);
  }
});

// For debugging
console.log('Available images:', Object.keys(projectImages)); 