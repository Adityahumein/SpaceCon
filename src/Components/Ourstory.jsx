import React from 'react'
import "./Ourstory.css"
const Ourstory = () => {
  return (
    <div className='Ourstory-parent'>
        <div className='Ourstory-img'>
            <img className = "Ourstory-pic" src = "../src/assets/Ourstorypic.avif" alt = "Ourstory-pic" />
        </div>
        <div className='Ourstory-textborder'>
            <h1>OUR STORY</h1>
            <p className='Ourstory-text'>Our journey began with a bold vision to create a space that wasn’t just a restaurant, but a celebration of intergalactic dining. Located in the heart of the vibrant Mars, adjacent to the cosmic energy of Coors Field, The restaurant has quickly become a beacon of culinary innovation on Mars.</p>
            <p className='Ourstory-text'>Originally designed to channel the charm of a retro diner, we initially served classic meals from Earth’s past. However, as we charted our course into the future, we realized that our true calling lay beyond Earth’s atmosphere, in the unique allure of space-inspired dining. We embraced this cosmic journey and transformed The restaurant into a space-themed, brunch-only destination—a place where relaxation, indulgence, and unity are celebrated among the stars.</p>
            <p className='Ourstory-text'>The change was not simply in our menu, but in our very mission: to transport our guests into an experience that aligns with the infinite possibilities of the universe. With a commitment to innovation and a desire to offer something truly out-of-this-world, we created a space where every meal is a cosmic adventure—a destination where brunch becomes an intergalactic exploration of flavor and connection.</p>
        </div>
    </div>
  )
}

export default Ourstory