import "./Product.scss";
import snicker1 from "../assets/images/snicker-1.jpg";
import snicker2 from "../assets/images/snicker-2.jpg";
import snicker3 from "../assets/images/snicker-3.jpg";
import snicker4 from "../assets/images/snicker-4.jpg";
import Lightbox from 'react-image-lightbox';
import { useState } from 'react';


const Product = () => {

    const images = [
        snicker1,
        snicker2,
        snicker3,
        snicker4
    ];

    const [currentUpImg, setcurrentUpImg] = useState(snicker1);
    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setphotoIndex] = useState(0);

    const handleIsOpen = () => {
        let index = images.findIndex(item => item === currentUpImg);
        console.log(index);
        setphotoIndex(index);
        setIsOpen(true);
    }
    return (
        <div>
            <div className="product-container">
                <div className="content-left">
                    <div className="img-up" >
                        <img src={currentUpImg} onClick={() => handleIsOpen()} />
                    </div>
                    <div className="img-down">
                        <div className="img-small">
                            <img src={snicker1} onClick={() => setcurrentUpImg(snicker1)} className={currentUpImg === snicker1 ? "active" : ""} />
                        </div>
                        <div className="img-small">
                            <img src={snicker2} onClick={() => setcurrentUpImg(snicker2)} className={currentUpImg === snicker2 ? "active" : ""} />
                        </div>
                        <div className="img-small">
                            <img src={snicker3} onClick={() => setcurrentUpImg(snicker3)} className={currentUpImg === snicker3 ? "active" : ""} />
                        </div>
                        <div className="img-small">
                            <img src={snicker4} onClick={() => setcurrentUpImg(snicker4)} className={currentUpImg === snicker4 ? "active" : ""} />
                        </div>
                    </div>
                </div>
                <div className="content-right">
                    <div className="title">Giày chạy bộ nam New Balance - M860E11</div>
                    <div className="price">1.478.000 ₫</div>
                    <div className="size">size: 30</div>
                    <div className="action">
                        <label className="quantity">Quantity</label>
                        <input type="number" min={1} className="quantity" value={1} />
                        <button>Choose</button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <Lightbox
                    mainSrc={images[photoIndex]}
                    nextSrc={images[(photoIndex + 1) % images.length]}
                    prevSrc={images[(photoIndex + images.length - 1) % images.length]}

                    onCloseRequest={() => setIsOpen(false)}

                    onMovePrevRequest={() => setphotoIndex((photoIndex + images.length - 1) % images.length)}
                    onMoveNextRequest={() => setphotoIndex((photoIndex + 1) % images.length)}
                    animationDuration={500}
                />
            )}
        </div>
    )
}
export default Product;