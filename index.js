const theBestFeature = ({
  name,
  message
}) => {
  return `${name} thinks Trevor's feature is the best feature in the world! ${message}`;
}

console.log(theBestFeature({
  name: 'Carter',
  message: 'I love this feature.'
}));