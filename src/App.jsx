import "./App.css";
import ArrowDown from "./assets/arrow-down.svg";
import { useEffect, useState } from "react";
import Header from "./Componentes/Header.jsx";
import Footer from "./Componentes/Footer.jsx";
import Main from "./Componentes/Main.jsx";
import {ApolloProvider} from "@apollo/client";
import {client} from "./Componentes/ApolloClient.jsx";

function App() {
  const [scrolling, setScrolling] = useState(false);

  const onPageScroll = () => {
    if(window.scrollY > 200) {
      setScrolling(true)
    } else {
      setScrolling(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", onPageScroll)
    return() => {
      window.removeEventListener("scroll", onPageScroll)
    }
  }, [])

  return (
    <ApolloProvider client={client}>
      <div className="max-w-4xl m-auto relative">
        <Header />
        <Main />
        <Footer />
        {
          scrolling && (
            <button className="fixed block right-8 bottom-0 w-24 max-sm:bottom-12" onClick={() => {
              window.scrollTo(0,0);
            }}>
              <img src={ArrowDown}  alt={"ArrowDown"} />
            </button>
          )
        }
      </div>
    </ApolloProvider>
  );
}

export default App;
