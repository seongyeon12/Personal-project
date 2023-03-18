import styles from '@css/main.module.css'
import HeaderView from '@pages/header/HeaderView'
import { useState, useEffect, useRef } from "react"; 

// 6페이지
import MainHome from '@component/main/MainHome'
import MainWill from '@component/main/MainWill'
import MainIdea from '@component/main/MainIdea'
import MainStyle from '@component/main/MainStyle'
import MainEdge from '@component/main/MainEdge'

const MainView = (): JSX.Element => {
  const mainRef = useRef<HTMLElement>(null)
  let i = 0

  useEffect(() => {
    const wheelHandler = (e: any) => {
      e.preventDefault();
      const deltaY = e.deltaY;
      const pageHeight = window.innerHeight;
      
      const tmp = mainRef.current
      console.log(mainRef, "t")
      console.log(deltaY)
      console.log(tmp, "tmp")
      console.log(pageHeight, "h")
      console.log(e)
      if (deltaY > 0) {
        mainRef.current?.scrollTo({
          top: pageHeight * 1,
          left: 0,
          behavior: "smooth",
        });
      } else {
        mainRef.current?.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      }
    };
    const outerDivRefCurrent = mainRef.current;
    outerDivRefCurrent?.addEventListener("wheel", wheelHandler);
    return () => {
      outerDivRefCurrent?.removeEventListener("wheel", wheelHandler);
    };
  }, []);
  
  return (
    <>
    <HeaderView />
      <main className={styles.container} ref={mainRef}>
          <MainHome />
          <MainWill />
          <MainIdea />
          <MainStyle />
          <MainEdge />
      </main>
    </>
  )
}

export default MainView