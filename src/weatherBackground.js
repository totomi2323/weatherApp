

const weatherBackground = (() => {
    const displayStatus = (type ) => {
      let picture;
        if (type === "Clouds") {
          picture = "../weatherPics/cloud1.png";
        } else if (type === "Rain") {
          picture = "../weatherPics/rain1.png";
        } else if(type === "Clear") {
          picture = "../weatherPics/sun.png";
        }
        return picture;
    }
    
    return { displayStatus};
  })();
  export { weatherBackground as weatherBackground };
  