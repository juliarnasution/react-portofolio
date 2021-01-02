import logoTwitter from '../assets/icon/logo-twitter.svg';
import logoFacebook from '../assets/icon/logo-facebook.svg';
import logoGithub from '../assets/icon/logo-github.svg';
import mailOutline from '../assets/icon/mail-outline.svg';
export function Contact(){
    return (
        <section id="contact">
            <div className="justify-center p-4 mb-5 text-gray-700">
                <div className="items-center mx-auto p-3">
                    <h2 className="text-center  font-sans text-3xl mx-auto justify-self-center">CONTACT</h2>
                </div>
                <div className="lg:pb-12">
                    <div className="max-w-7xl mx-auto  pt-10 px-4 sm:px-6 lg:pt-10 lg:pb-4 lg:px-8 lg:flex lg:items-center flex justify-center">
                        <div className="flex justify-center">
                            <div className="box-border h-16 w-16 p-4 border-0">
                                <a href="http://www.twitter.com/juliarnasution" target="_blank" rel="noreferrer">
                                    <img src={logoTwitter} alt="twitter"></img>
                                </a>
                                
                            </div>
                            <div className="box-border h-16 w-16 p-4 border-0">
                                <a href="http://www.facebook.com/juliarnasution" target="_blank" rel="noreferrer">
                                    <img src={logoFacebook} alt="facebook"></img>
                                </a>
                                
                            </div>
                            <div className="box-border h-16 w-16 p-4 border-0">
                                <a href="http://www.github.com/juliarnasution" target="_blank" rel="noreferrer">
                                    <img src={logoGithub} alt="github"></img>
                                </a>
                            </div>
                            <div className="box-border h-16 w-16 p-4 border-0">
                                <a href="mailto:juliarnasution@gmail.com" target="_blank" rel="noreferrer">
                                    <img src={mailOutline} alt="email"></img>
                                </a>
                                
                            </div>
                        </div>
                        <br/>
                    </div>
                    <p className="text-center">Juliar Nasution, 2021</p>
                </div>
                
            </div>
        </section>
    )
}