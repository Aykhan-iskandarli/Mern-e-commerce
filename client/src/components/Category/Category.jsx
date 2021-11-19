import React from 'react'
import Page from '../Page/Page'
import "./category.css"
import {categories,categories2} from "../../data"
import { Link } from 'react-router-dom'

const Category = () => {
    return (
        <div className="Category_section">
          
                <div className="row ">
                    <Page className="categories">
                    {
                        categories.map(category =>(
                            <div key={category.id} className="category ">
                                <div className="category-img ">
                                    <img src={category.img} alt="" />
                                    <div className="category-content">
                                        <h2>{category.title}</h2>
                                        <Link to="/product">
                                    <div className="category-button">
                                        <button className="btn cat-btn">Shop now</button>
                                    </div></Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </Page>
                </div>
               
                <div className="row mt-2">
                <Page className="categories">
                {
                        categories2.map(category=>(
                            <div key={category.id} className="category ">
                            <div className="category-img-alt ">
                                <img src={category.img} alt="" />
                                <div className="category-content">
                                    <h2>{category.title}</h2>
                                    <Link to="/product">
                                    <div className="category-button">
                                        <button className="btn cat-btn">Shop now</button>
                                    </div></Link>
                                </div>
                            </div>
                        </div>
                        ))
                    }
                        </Page >
                </div>
        
        </div>
    )
}

export default Category
