
import './loader.scss';

const Loader = () => {

    const span = [];
    for(let i = 0; i < 8; i++)
        span.push( <span key={`span ${i}`}></span> );

    return (
        <div className='loader-container'>
            <div className='jumping-waves'>
                {span}
            </div>
        </div>
    );
};

export default Loader;