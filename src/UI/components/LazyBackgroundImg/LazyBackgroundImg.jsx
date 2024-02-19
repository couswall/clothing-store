import { useState } from "react"
import { LazyLoadImage } from "react-lazy-load-image-component";

export const LazyBackgroundImg = ({ imgUrl, children, cssClass, imgPosition }) => {
    
    const [loaded, setLoaded] = useState(false);

    const handleLoad = () => {
        setLoaded( true );
    }


    return (
        <section className={ `${cssClass} section` } style={{
            filter: loaded ? "none" : "blur(10px)",
            transition: "filter 0.5s",
          }}>
            <LazyLoadImage 
                className= {`${cssClass}-img`}
                src={ imgUrl } 
                effect="blur" 
                width='100%' 
                height='100%'
                onLoad={ handleLoad }
                style={{
                    objectFit: 'cover', 
                    objectPosition: `${ imgPosition || 'center' }`,
                }}
                />
            { loaded && children }
          </section>
  )
}
