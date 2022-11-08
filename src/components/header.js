import React from 'react';
import '../css/style.css';
import nombre from '../images/nombre.jpg';  
import styled from 'styled-components';

const Header =()=>{
    return(  
        <Head>    
        <section class='home'>
            <section>
                <img src={nombre} alt=""/>            
            </section>
            <section class="description_home">
                <section>
                    <h1>
                        APRENDE
                    </h1>
                    <br/>
                    <h1>
                        GALÁCTICAMENTE
                    </h1>
                    <br/>
                </section>
                <section>
                    <p>
                        "En Space te encontarás con curiosidades y conceptos básicos <br/>relacionados con la astronomía."
                    </p>
                </section>
            </section>   
        </section>
        </Head>  
    )
}

export default Header;

const Head = styled.section`
.home{
    display: flex;
    flex-direction: row;
    align-items: center;   
    justify-content:space-between;
    height: 400px;
}

img{
    width: 600px; 
    height: 300px; 
    margin-top: 100px;
    margin-left: 20px; 
}

.description_home{
    display: flex;
    flex-direction: column;
    align-items: baseline;   
    justify-content:flex-start;
    margin-right: 80px;
    padding-right: 80px;
    font-size: 20px;
}

h1{
    font-size: 30px;
    font-family: 'Courier', sans-serif;
}
`;
