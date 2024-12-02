import { NavLink } from "react-router";
import Footer from "../components/footer";
import Header from "../components/navbar";

export default function Services(){
  return(
    <main>
      <Header currentRoute="service"/>

      <main>
        <div className="banner bn-1">
          <div className="conteudo">
            <h1>Explore os nosso serviços, e <span>entre em contacto</span> a qualquer altura!</h1>
            <p id="descricao">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, asperiores.</p>
            <br/>
            <br/>
            <nav>
              <NavLink to="" id="getstart">Get start the visit</NavLink>
            </nav>
          </div>
          <div className="image">
            <img src="./images/banner 3.png" alt="banner"/>
          </div>
        </div>

        <div className="container cd-cards" id="cd-cards">
          <div className="theme">
            <h1>Nossos <span>melhores serviços</span></h1>
            <p id="descricao">Lorem ipsum dolor sit amet.</p>
          </div>

          <div className="cards">
            <div className="card">
              <h1><span>Criação de ..</span></h1>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, obcaecati ullam ratione rerum cumque harum nobis vel voluptates, nostrum accusantium fuga, veniam voluptate neque dolore!</p>
              <br/>
              <nav>
                <NavLink to="#" id="getstart">Get start</NavLink>
              </nav>
            </div>

            <div className="card middle">
              <h1>Venda de..</h1>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, obcaecati ullam ratione rerum cumque harum nobis vel voluptates, nostrum accusantium fuga, veniam voluptate neque dolore!</p>
              <br/>
              <nav>
                <NavLink to="#" id="getstart">Get start</NavLink>
              </nav>
            </div>
            
            <div className="card">
              <h1><span>Prestação de ..</span></h1>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, obcaecati ullam ratione rerum cumque harum nobis vel voluptates, nostrum accusantium fuga, veniam voluptate neque dolore!</p>
              <br/>
              <nav>
                <NavLink to="#" id="getstart">Get start</NavLink>
              </nav>
            </div>
          </div>
        </div>

        <div className="arroba">
            <p>th@yone</p>
        </div>
      </main>

      <Footer/>
    </main>
  )
}