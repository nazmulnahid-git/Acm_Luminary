export const getUserImageSource = (image) => {
  if (image) {
    return { uri: image }
  }
  return require('../assets/images/defaultUser.png')
}