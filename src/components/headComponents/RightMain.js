import img2 from '../../assets/img/img2.jpg';
export function RightMain(){
    return (
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src={img2} alt="fotoku"/>
        </div>
    )
}