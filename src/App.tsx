import Header from './components/navbar';
import Footer from './components/footer';
import { NavLink } from 'react-router';

export default function App() {
  return (
    <main>
     <Header currentRoute="home"/>

      <div className="mn"> 
        <div className="links">
          <NavLink to="" id="inicial">Home</NavLink>
          <NavLink to="">Serviços</NavLink>
          <NavLink to="">Sobre</NavLink>
          <NavLink to="">Ajuda</NavLink>
        </div>
      </div>

      <main>
        <div className="banner bn-1">
          <div className="conteudo">
            <h1>A melhor solução para a sua<span>empresa melhorar</span> e inovar!</h1>
            <p id="descricao">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, asperiores.</p>
            <br/>
            <br/>
            <nav>
              <NavLink to="" id="getstart">Get start the visit</NavLink>
            </nav>
          </div>

          <div className="image">
            <img src="./images/banner.png" alt="banner"/>
          </div>
        </div>

        <div className="container cd-cards" id="cd-cards">
          <div className="theme">
            <h1>Nossos <span>soluções</span></h1>
            <p id="descricao">Lorem ipsum dolor sit amet.</p>
          </div>

          <div className="cards">
            <div className="card">
              <h1><span>Segurança</span></h1>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, obcaecati ullam ratione rerum cumque harum nobis vel voluptates, nostrum accusantium fuga, veniam voluptate neque dolore!</p>
              <br/>
              <nav>
                <NavLink to="#" id="getstart">Get start</NavLink>
              </nav>
            </div>

            <div className="card middle">
              <h1>Flexibilidade</h1>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, obcaecati ullam ratione rerum cumque harum nobis vel voluptates, nostrum accusantium fuga, veniam voluptate neque dolore!</p>
              <br/>
              <nav>
                <NavLink to="#" id="getstart">Get start</NavLink>
              </nav>
            </div>

            <div className="card">
              <h1><span>Dinamismo</span></h1>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, obcaecati ullam ratione rerum cumque harum nobis vel voluptates, nostrum accusantium fuga, veniam voluptate neque dolore!</p>
              <br/>
              <nav>
                <NavLink to="#" id="getstart">Get start</NavLink>
              </nav>
            </div>
          </div>
        </div>

        <div className="banner bn-2" id="bn-2">
          <div className="image">
            <img src="/images/banner 2.png" alt="banner"/>
          </div>

          <div className="conteudo">
            <h1>Precisas de mais informações ? <span>contacte NavLinknossNavLinkassistência</span></h1>
            <p id="descricao">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, asperiores.</p>
            <br/>
            <br/>
            <nav>
              <NavLink to="#" id="getstart">Get start to assistence</NavLink>
            </nav>
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



