import React from 'react'
import './Product2.css'
const Product2 = ({productSOCK}) => {
    return (
        <div className='totalbody2'>
            {productSOCK.map((item1) => {
                return (
                    <>
                        <div className="containerCard2">
                           <img src={item1.image} className="imageShoe2"/>
                            <h3 className="headingShoe2">{item1.name}</h3>
                            <div className="priceContainerShoe2"> <h4 className="priceShoe">${item1.price}</h4> &nbsp;
                                <strike className="strikeShoe2">${item1.strikePrice}</strike></div>
                            <button className="buttonShoe2">  BUY NOW</button>

                        </div>
                    </>
                )
            })}

        </div>
    )
}

export default Product2