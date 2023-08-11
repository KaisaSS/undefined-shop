import React, { useEffect, useState } from 'react'
import styles from "./styles.css"
import Button from '../Button'


const ProductCard = ({ product }) => {
    const {name, images, tags, description, website, shopify_url} = product.fields;

    // like/dislike functionality is not complete
    const [likes, setLikes] = useState(() => {
        const data = localStorage.getItem('likes');
        return data ? JSON.parse(data) : [];
    })

    useEffect(() => {
        localStorage.setItem('likes', JSON.stringify(likes))
    }, [likes])

    const addLike = (name, like) => {
        if (likes.find(like => like.name === name)) {
            console.log('value exists')
          } else {
            setLikes([...likes, {name, like}])
          }
    }

    return (
        <div className='card-container'>
            <div className='image-container'>
                <img className='image' alt='product' src={images[0].url} />
            </div>
            <div className='card-content'>
                <div className='like-container'>
                    <div className='thumb' style={{
                        // add background color if value is found in 'likes' state array
                    }} onClick={() => addLike(name, 'dislike')}>
                        <img height={22} width={22} src={'/thumb-down.svg'} alt='thumb-down'/>
                    </div>
                    <div className='thumb thumb-up' onClick={() => addLike(name, 'like')}>
                        <img height={22} width={22} src={'/thumb-up.svg'} alt='thumb-up'/>
                    </div>
                </div>
                <div className='row'>
                    {tags.map((tag) => (
                        <Button key={tag} title={tag} />
                    ))}
                </div>
                <div>
                    <h3>{ name }</h3>
                    <p className='description'>{ description }</p>
                </div>
                <div className='row'>
                    <Button arrow style={{backgroundColor: 'greenyellow'}} onClick={() => {window.location.href = website}}/>
                    <a style={{marginLeft: '20px', textTransform: 'uppercase'}} href={website}>{shopify_url}</a>
                </div>
            </div>
        </div>
    )
}

export default ProductCard