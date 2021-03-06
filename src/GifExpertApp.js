import React, { Fragment, useState } from 'react';
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {
    // const categories = ['One Puch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState( ['Dragon Ball']);

    return ( 
        <Fragment >
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr/>

            

            <ul>
                {
                    categories.map( category => (
                        <GifGrid 
                        key={ category }
                        category={ category } 
                        />
                    ))
                }
                
            </ul>
           

        </Fragment>
     );
}
 
export default GifExpertApp;