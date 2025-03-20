
// const Video = () => {
//   return (
//     <>
//       <div className="boot-container aspect-w-16 aspect-h-9 mt-56">
//         <iframe
//           src="https://player.vimeo.com/video/146022717?color=0c88dd&title=0&byline=0&portrait=0&badge=0"
//           width="1420px"
//           height="800px"
//           allow="autoplay; fullscreen; picture-in-picture"
//           allowfullscreen
//         ></iframe>
//       </div>
//     </>
//   )
// }

// export default Video


const Video = () => {
    return (
      <div className="boot-container mt-32 md:mt-56">
        <div className="relative w-full pb-[56.25%] h-0"> {/* Aspect ratio 16:9 */}
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
            src="https://player.vimeo.com/video/146022717?color=0c88dd&title=0&byline=0&portrait=0&badge=0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    );
  };
  
  export default Video;
  