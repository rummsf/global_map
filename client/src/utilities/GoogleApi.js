export function getGoogleMaps() {
  return new Promise(resolve => {
    window.resolveGoogleMapsPromise = () => {
      resolve(window.google);
      delete window.resolveGoogleMapsPromise;
    };
    const script = document.createElement("script");
    const API = "AIzaSyAkhctyCGwBPnWX617w6g4x6WpeaCMVDLk";
    script.src = `https://maps.googleapis.com/maps/api/js?key=${API}&callback=resolveGoogleMapsPromise`;
    script.async = true;
    document.body.appendChild(script);
  });
}
