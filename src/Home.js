import {ServicesCaroussel} from "./components/ServicesCaroussel";

const Home = () => {
  return (
      <main className={"home-container"}>
          <div className={"services"}>
              <h2>Services</h2>
              <ServicesCaroussel/>
          </div>
          <div className={"article"}>
              <h2>Articles</h2>
              <div className={"description"}>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ea id iusto minima, minus nihil odit possimus quaerat, quis repellat sapiente soluta ut! Accusantium.</p>
              </div>
              <button onClick={null} className={"article-btn"}>
                  Commencer à lire
                  <span className={"btn-icon"}>
                      <svg className={"btn-icon"} id="arrow-right" width="54" height="85" viewBox="0 0 54 85" fill="none">
                         <path fill={"#000"} d="M52.8311 44.4482L12.0209 0.947431C10.8998 -0.247534 9.02734 -0.321987 7.81494 0.780195L1.24353 6.7542C0.00842297 7.87703 -0.0726697 9.79208 1.0631 11.0153L30.7322 42.9689C31.8985 44.225 31.7771 46.2013 30.4658 47.3052L1.22724 71.9188C-0.0134007 72.9632 -0.199475 74.8045 0.807127 76.076L6.58391 83.373C7.63325 84.6985 9.57002 84.8956 10.8649 83.8086L52.572 48.7985C53.8909 47.6915 54.0092 45.7039 52.8311 44.4482Z"/>
                      </svg>
                  </span>
              </button>
          </div>
      </main>
  )
}

export default Home