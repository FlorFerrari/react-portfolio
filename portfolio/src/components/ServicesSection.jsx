import React from "react";
//Import Icons
import clock from "../img/clock.svg"
import diaphragm from "../img/diaphragm.svg"
import money from "../img/money.svg"
import teamwork from "../img/teamwork.svg"
import home2 from "../img/home2.png"
//Styles
import styled from "styled-components";
import { About, Description, Image } from "../styles";

export default function ServicesSection() {
    return (
        <Services>
            <Description>
                <h2>
                    High <span>quality</span> services
                </h2>
                <Cards>
                    <Card>
                        <div className="icon">
                            <img src={clock} alt="icon" />
                            <h3>Efficient</h3>
                            <div>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={teamwork} alt="icon" />
                            <h3>Teamwork</h3>
                            <div>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={diaphragm} alt="icon" />
                            <h3>Diaphgram</h3>
                            <div>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={money} alt="icon" />
                            <h3>Affordable</h3>
                            <div>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                    </Card>
                </Cards>
            </Description>
            <Image>
                <img src={home2} alt="camera" />
            </Image>
        </Services>
    )
}

const Services = styled(About)`
    h2{
        padding-bottom: 5rem;
    }
    
    p{
        width: 70%;
        padding: 2rem 0rem 4rem 0rem;
    }

    
`;

const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
    
    
`;

const Card = styled.div`
    flex-basis: 15rem;
    .icon {
        
        h3 {
            margin-top: 1rem;
            color: black;
            background-color: white;
            width: 8rem;
            padding: 1rem;
        }
    }
    
    
    
`;