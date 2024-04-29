import * as stylex from "@stylexjs/stylex"
import { useRef, useState } from "react"
import profileImage from "./assets/20220715_130009.jpg"

const spin = stylex.keyframes({
  from: { transform: "rotate(0deg)" },
  to: { transform: "rotate(360deg)" },
})

const fadeIn = stylex.keyframes({
  "0%": { opacity: "0" },
  "100%": { opacity: "1" },
})

const styles = stylex.create({
  container: {
    width: "100%",
    boxSizing: "border-box",
    height: "100%",
  },
  header: {
    width: "100%",
    height: "3rem",
    background: "#2962ff",
  },

  imageContainer: (clicked) => ({
    width: "10rem",
    height: "10rem",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: !clicked ? "0.7rem" : "0rem",
    position: !clicked ? "absolute" : "relative",
    transform: !clicked ? "translate(-50%,-50%)" : "translate(0%,0%)",
    transition: "position 10s",
    ":hover::after": {
      content: "",
      position: "absolute",
      width: "10rem",
      height: "10rem",
      borderRadius: "50%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "0.7rem",
      borderTop: !clicked && "1px solid red",
      animationName: !clicked && spin,
      animationDuration: !clicked && "1s",
      animationTiminfFunction: !clicked && "linear",
    },
    cursor: "pointer",
  }),
  img: (clicked) => ({
    width: "10rem",
    aspectRatio: "1:1",
    height: "10rem",
    borderRadius: !clicked ? "50%" : "0",
    zIndex: "1",
    transition: "all 500ms",
    ":hover": {
      transform: !clicked && "scale(1.1)",
      transition: "transform 1s",
    },
  }),
  mainBase: (isClicked) => ({
    display: "flex",
    justifyContent: !isClicked ? "center" : "flex-start",
    alignItems: "center",
    transition: "all 10s !important",
    height: !isClicked ? "100vh" : "100%",
    padding: "2rem",
  }),
  name: (clicked) => ({
    display: clicked ? "block" : "none",
    // -webkit-animation: 3s ease 0s normal forwards 1 fadein;
    // animation: 3s ease 0s normal forwards 1 fadein;
    animationName: clicked && fadeIn,
    animationDuration: clicked && "10s",
    animationTimingFunction: clicked && "ease",
    animationDelay: clicked && "10s",
    animationIterationCount: clicked && "normal",
    animationDirection: clicked && "forwards",
    animationFillMode: clicked && "forwards",
    animationPlayState: clicked && "paused",
  }),
})

function App() {
  const [clicked, setClicked] = useState(false)
  const clickRef = useRef(null)

  return (
    <div {...stylex.props(styles.container)}>
      <header {...stylex.props(styles.header)}>
        <nav></nav>
      </header>
      <main {...stylex.props(styles.mainBase(clicked))}>
        <section>
          <aside {...stylex.props(styles.imageContainer(clicked))}>
            <img
              src={profileImage}
              {...stylex.props(styles.img(clicked))}
              onClick={() => {
                if (!clickRef.current) {
                  setClicked(true)
                  clickRef.current = true
                  console.log("Hello")
                }
              }}
            />
          </aside>
          <span {...stylex.props(styles.name(clicked))}>Karthik Gowda L</span>
        </section>
      </main>
    </div>
  )
}

export default App
