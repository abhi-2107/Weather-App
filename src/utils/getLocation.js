let currentLocation = {};
export default function getCurrentLocation() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        currentLocation = {
          latitude: +position.coords.latitude.toFixed(2),
          longitude: +position.coords.longitude.toFixed(2),
        };
        // console.log(position)
        resolve(currentLocation);
      },
      () => {
        reject(
          new Error(
            "Unable to get your location. Please turn on location and refresh."
          )
        );
      }
    );
  });
}
