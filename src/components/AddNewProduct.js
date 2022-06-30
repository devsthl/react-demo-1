import { useState } from "react";

const AddNewProduct = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [size, setSize] = useState(0);
    const [color, setColor] = useState('');

    const [isShowDetail, setisShowDetail] = useState(false);
    const handleClickBtn = () => {
        let object = {
            name: name,
            price: price,
            size: size,
            color: color
        }

        let productList = localStorage.getItem("productList");

        if (productList) {
            let arr = JSON.parse(productList)
            console.log(">>> check productList: ", productList)
            arr.push(object);
            localStorage.setItem("productList", JSON.stringify(arr))
        } else {
            localStorage.setItem("productList", JSON.stringify([object]))
        }

        setName("");
        setPrice(0);
        setSize(0);
        setColor("")
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
            <div>
                List Products:
                <div>
                    {localStorage.getItem("productList")}
                </div>
            </div>
        </div>
    )
}
export default AddNewProduct;