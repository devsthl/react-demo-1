import { useState } from "react";

const AddNewProduct = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [size, setSize] = useState(0);
    const [color, setColor] = useState('');

    const [isShowDetail, setisShowDetail] = useState(true);
    const handleClickBtn = () => {
        let object = {
            name, price, size, color
        }
        console.log(">>> check data: ", object)
    }
    const handleisShowDetail = () => {
        setisShowDetail(!isShowDetail);
    }
    return (

        <div>
            {
                isShowDetail === true ? <div onClick={handleisShowDetail}>Hide this form</div> : <div onClick={handleisShowDetail}>Show this form</div>
            }

            {
                isShowDetail === true ?
                    <fieldset>
                        <legend>Add New Product</legend>
                        <div className="input-product">
                            <label>Name</label>
                            <input value={name} type='text' onChange={(event) => setName(event.target.value)} />
                        </div>
                        <div className="input-product">
                            <label>Price</label>
                            <input value={price} type='text' onChange={(event) => setPrice(event.target.value)} />
                        </div>
                        <div className="input-product">
                            <label>Size</label>
                            <input value={size} type='text' onChange={(event) => setSize(event.target.value)} />
                        </div>
                        <div className="input-product">
                            <label>Color</label>
                            <input value={color} type='text' onChange={(event) => setColor(event.target.value)} />
                        </div>
                        <div>
                            <button onClick={() => handleClickBtn()}>Add New</button>
                        </div>
                    </fieldset> : null
            }
        </div>

    )
}
export default AddNewProduct;