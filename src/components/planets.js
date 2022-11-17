import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '../css/planets.css';


function planets(props) {
    const container = [{ img: 'mercurio', def: "Es el primer planeta pues está más cerca del Sol. Como Plutón ya no es un planeta se convirtió en el más pequeño de todo el Sistema Solar. "+
    "Tarda 88 días en dar una vuelta completa alrededor del Sol. Una cara adel mismo le da frente al sol, por lo que una de las partes es muy caliente y la otra extremadamente fría."},
    { img: 'venus', def: "Es el segundo planeta más cercano al Sol, pero el más caliente ya que los gases de su atmósfera casi no dejan escapar el calor. Es más pequeño que la Tierra, " +
    "y tarda unos 255días en terminar una órbita alrededor del Sol. A diferencia de los demás planetas, gira hacia atras, o en dirección contraria a la usual." },
    { img: 'tierra', def: "Es el tercer planeta en orden de cercanía al Sol, y tú lo conoces. Hasta ahora, es el único que tiene seres vivos, océanos de agua, mucho oxígeno e infinidad " +
    "de maravillas naturales. Se formó poco después de que comenzó a formarse el Sol, hace unos 4.5 miles de millones de años"},
    { img: 'marte', def: "Lo llaman planeta rojo, porque su superficie tiene óxido de hierro, un material de color rojizo. Al igual que los tres planetas anteriores, su suelo es de roca "+ 
    "sólida. Los científicos se han interesado en Marte porque creen que pudo o podría albergar vida, incluso esperan que en años futuros algunas personas vayan a vivir allá" },
    { img: 'jupiter', def: "El cinturón de asteroides separa a Marte de Júpiter, que es el planeta más grande del Sistema Solar. Es una enorme bola de gas y tiene más satélites que ningún "+ 
    "otro planeta. La Gran Mancha Roja, una tormenta que parece un remolino, es incluso más grande que la Tierra." },
    { img: 'saturno', def: "Es una bola de gas, pero mejor conocida por tener un impresionante conjunto de anillos compuestos por millones de pedacitos de hielo. Es el sexto más cercano " + 
    "al Sol, y está a una distancia de 1.4 miles de millones de kilometros de distancia de él." },
    { img: 'urano', def: "Tiene unos anillos delgados, pero no son tan visibles como los de Saturno. Es un planeta casi el doble de grande de Neptuno y se ve de color azul porque tiene " + 
    "un gas llamado metano. No gira sobre sí mismo como los demás: en vez de hacerlo de forma similar a la de la Tierra, lo hace de costado." },
    { img: 'neptuno', def: "Es un planeta gaseoso más pequeño y el más lejano del Sol. POr lo tanto, un planeta helado. Tiene vientos sumamente fuertes y tarda 165 años en completar su " + 
    "órbita. Apenas en 2011 terminó su recorrido alrededor del Sol desde que fue descubierto en 1846."}
    ];
    return (
        <div className='carrousel_planets'>
            <Swiper
                spaceBetween={20}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {
                    container.map((item, pos) => (
                        <SwiperSlide key={pos}>
                            <div className='content_planets'>
                                <img className='img_planets'
                                    src={require(`../images/planets-${item.img}.png`)}
                                    alt='' />
                                <p>
                                    {item.def}
                                </p>
                            </div>
                        </SwiperSlide>
                    ))
                }

            </Swiper>


        </div>




    );
}

export default planets;

<div className='content_planets'>

</div>