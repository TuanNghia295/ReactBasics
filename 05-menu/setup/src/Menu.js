import React from 'react';

const Menu = ({items}) => {
  return <div className='section-center'>
    {
      items.map((item) =>{
        const {id,title,price,desc,img} = item;
        return(
         <article className='menu-item' key={id}>
          <img src={img} alt={title} className='photo'></img>
          <div className='item-info'>
            <header>
              <h4 className='title'>{title}</h4>
              <h4 className='price'>{price}</h4>
            </header>
            <p className='desc'>{desc}</p>
          </div>
         </article>
        )
      })
    }
  </div>;
};

export default Menu;
