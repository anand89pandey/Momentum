import React from 'react'
import WhatsApp from './WhatsApp'

function About() {
    return(
        <div>
            <section className="page-section" id="about">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase" style={{color: 'blue', fontWeight: 'bold'}}>About Us</h2> 
                </div>
                <div>
                    <h2 style={{fontWeight: 'bold'}}>Company profile</h2> <br />
                    <p1>We are PARMOD INDIA, an export house of Apparels & Fashion accessories.</p1>
                    <p2>We are serving the various fashion brands and retail in USA and European countries with our
                        customer's satisfaction.
                    </p2> <br /> <br/>
                    <h2 style={{fontWeight: 'bold'}}>Our Motto</h2> 
                    <ul>
                    To satify the customer requirements <br/>
                    To fulfill the supply committments within the stipulated time-frame <br />
                    To maitain the quality standards and supply quality merchandise <br />
                    </ul> <br />
                    <h2 style={{fontWeight: 'bold'}}>Machinery</h2>
    <p>Sweing maching{' '}{'-'}{' '}100 Nos</p> 
                    <p>Overlock{' '}{'-'}{' '}008 Nos</p> 
                    <p>Flat Lock{' '}{'-'}{' '}002 Nos</p> 
                    <p>Pressing Stands{' '}{'-'}{' '}015 Nos</p> 
                    <p>In house paint</p> <br />
                    <h2 style={{fontWeight: 'bold'}}>Our Banker</h2>
    <p><p1 style={{fontWeight:'bold'}}>BENEFICIARY BANK</p1> <p1>{'-'}{' '}PUNJAB NATIONAL BANK</p1></p>
    <p><p1 style={{fontWeight:'bold'}}>BENEFICIARY ACCOUNT NUMBER</p1> <p1>{'-'}{' '}0893002100025554</p1></p>
    <p><p1 style={{fontWeight:'bold'}}>BENEFICIARY SWIFT CODE</p1> <p1>{'-'}{' '}PUNBINBBMBD</p1></p>
    <p><p1 style={{fontWeight:'bold'}}>BENEFICIARY AD CODE</p1> <p1>{'-'}{' '}0303907-2780007</p1></p>
    <p><p1 style={{fontWeight:'bold'}}>BENEFICIARY IFSC CODE</p1> <p1>{'-'}{' '}PUNB0089300</p1></p>
                </div>
            </div>
            <WhatsApp />
        </section>
        </div>
    )
}


export default About