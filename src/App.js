import './App.css';
import Galaxy from './components/galaxy';
import Header from './components/header';
import Navbar from './components/navbar';
import Planets from './components/planets';

function App() {
  return (
    <div >
      <div className='fondo_nav_and_head'>
        <Navbar />
        <Header />
      </div>

      <div>
        <section className="galaxy_description">
          <section className="descrp_galax">
            <h1>
              GALAXIA
            </h1>
            <p>
              Agrupación de estrellas, cuerpos celestes y materia cósmica que está concentrada en
              <br />
              una determinada región del espacio por efecto de la atracción gravitatoria y constituye una unidad en el universo.
            </p>
          </section>

          <article class="galaxy_container">
            <Galaxy
              imagen='1'
              titulo='Galaxias en espiral'
              definicion='Parecen a gigantescas molinetes. 
              Los brazos del molinillo están compuestos de estrellas y un montón de gas y polvo. 
              El gas y el polvo son algunos de los ingredientes principales necesarios para formar nuevas estrellas. 
              Las estrellas jóvenes queman mucho más caliente que las estrellas más viejas, así que las galaxias espirales son a menudo algunas de las más brillantes en el universo.
              Alrededor del 60% de las galaxias cercanas son espirales. Nuestra galaxia, la Vía Láctea, es un muy buen ejemplo de una.'
            />

            <Galaxy
              imagen='2'
              titulo='Galaxias elípticas'
              definicion='tienen forma de círculos estirados o elipses. 
              Algunas galaxias elípticas están más estiradas que otras. Uno puede parecer casi perfectamente circular. 
              Otro podría parecer largo y plano. Las galaxias elípticas contienen principalmente estrellas más viejas. 
              Esto significa que a menudo no son tan brillantes como las galaxias espirales. También tienen muy poco polvo y gas. Las galaxias elípticas son las galaxias más grandes y más comunes observadas. 
              Constituyen alrededor del 20% de todas las galaxias cercanas.'
            />

            <Galaxy
              imagen='3'
              titulo='Galaxias irregulares'
              definicion='son sólo eso: irregular. 
              No tienen ni una sola forma común. Las galaxias irregulares están entre las galaxias más pequeñas que los científicos han observado. 
              Sin embargo, también pueden ser muy brillantes. Al igual que las galaxias espirales, las galaxias irregulares suelen estar llenas de gas, polvo y muchas estrellas jóvenes brillantes. 
              Alrededor del 20% de las galaxias cercanas son galaxias irregulares.'
            />

            <Galaxy
              imagen='4'
              titulo='Quásares'
              definicion='Son áreas compactas en el centro de una galaxia. 
              Ellos emiten enormes cantidades de energía. Los quásares son en realidad algunos de los objetos más brillantes del universo. No hay cuásares cerca de nuestra Vía Láctea.'
            />

          </article>
        </section>
      </div>


      <div>
        <section className='planets_description'>
          <section className="descrp_plan">
            <h1>
              PLANETAS
            </h1>
            <p>
            Un planeta es un cuerpo celeste que gira alrededor de una estrella, y que tiene suficiente masa para alcanzar un equilibrio hidrostático.
            Este equilibrio le permite que mantenga su forma de esfera, que domine órbita y que no emita luz propia, sino que refleje la luz de la estrella alrededor de la que gravita.
            </p>
          </section>

          <div className='fondo_plan'>
            <Planets/>
          </div>

        </section>

      </div>
    </div>
  );
}

export default App;
