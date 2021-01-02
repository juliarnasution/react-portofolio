// import img1 from '../assets/img/img1.JPG';
export function About(){
    return (
        <section id="about">
            <div className="bg-gray-100 justify-center p-4 text-gray-700">
                <div className="items-center w-1/3 mx-auto p-2">
                    <h2 className="text-center  font-sans text-3xl mx-auto justify-self-center">ABOUT ME</h2>
                </div>
                
                <figure className=" w-2/4 p-1 mx-auto">
                    {/* <img className="w-32 h-32 rounded-full mx-auto" src={img1} width="384" height="512" alt="my foto"/> */}
                    <div className="pt-0 space-y-4">
                        <blockquote >
                            <p className="text-lg text-center tracking-wide">
                                “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pellentesque egestas mi nec posuere. Cras fermentum nisl at efficitur suscipit. Duis lobortis finibus turpis, vel commodo tellus scelerisque vitae. Aenean venenatis tincidunt erat eu faucibus. Etiam nec metus nisl. Sed nec mollis nibh, at vestibulum dui. Sed nec posuere tortor, id eleifend eros. Nunc posuere, ante id ultricies malesuada, mi turpis tristique metus, id ultricies sem erat ac sapien. Duis at turpis varius, molestie elit nec, fringilla lorem. Aenean ligula est, consequat in ex non, sodales congue leo. Phasellus posuere sagittis metus non venenatis.”
                            </p>
                        </blockquote>
                        <figcaption>
                            <p className="text-center underline text-lg tracking-wide">
                                Juliar Nasution, 2020
                            </p>
                            
                        </figcaption>
                    </div>
                </figure>
            </div>
        </section>
    )
}