import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
    return (
        <>
            <li className='cards__item'>
                <Link className='cards__item__link' to={props.path}>
                    <figure className='cards__item__pic-wrap' data-category={props.label}>
                        <img
                            className='cards__item__img'
                            alt='Cyka Blyat'
                            src={props.src}
                        />
                    </figure>
                    <div className='cards__item__info'>
                        <h5 className='cards__item__hteg'>{props.label}</h5>
                        <div className={'card__item__text'}>{props.text}</div>
                    </div>
                    <button className={'card__item__button'}>Підтримати</button>
                </Link>
            </li>
        </>
    );
}

export default CardItem;