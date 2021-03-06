# myWardrobe

## Overview

Get your style sorted with My Wardrobe - an application that lets you plan, save and create your outfits at the touch of a button.

The simple way to stay organised, build you wardrobe by snapping pictures of your clothes and save them straight to the app. My Wardrobe also has an built-in calendar so you can schedule what you're going to wear and when. Making sure you never wear the same thing twice.

## Table of contents

- [About](#about)
  - [Built using](#built-using)
- [Link to application](#link-to-deployed-application)
- [Contributors](#contributors)
- [Installation](#installation)
- [Functionality](#functionality)
- [Further Development](#further-development)
- [Learning](#learning)
- [License](#license)

---

## About

From personal experience, we know that organising what to wear is never a fun task. You forget about clothes that have been shoved in the back of your wardrobe for months, you decide you want to wear something that's in the wash, or you don't want to wear the same thing twice in one week.

This app aims to solve these issues.

#### User story

**AS A** busy professional,  
**I WANT** an app that I can organise my clothes to plan what I will be wearing each week,  
**SO THAT** I can save time choosing from my outfits and see what I have recently worn. I can also get full use out of all of my clothes. 

## Built using

- Javascript
- Node.js
- Express
- Express-handlebars
- MySQL
- Sequelize
- cKey
- Cloudinary

---

## Link to deployed application

View the live application on [Heroku](https://mywardrobeproject.herokuapp.com/).

---

## Contributors

- [@CoreyJay98](https://github.com/coreyjay98)
- [@Samwakelam](https://github.com/Samwakelam)
- [@markleonard84](https://github.com/markleonard84)
- [@HannahSones](https://github.com/HannahSones)

---

## Installation

- Clone the Git repository onto your local machine
- Navigate to the folder where the repository exists
- Run the command `$ npm init` and `$ npm i`
- From the server folder
- Then run the command `$ node app`
- Open your browser and search for `localhost:5000`
- You can also use nodemon using the command `$ npm run dev` or checking the scripts in your package.json file.

---

## Functionality

1. My Wardrobe page:  

![My Wardrobe Page](./public/assets/img/extras/Screen-shot-my-wardrobe.png)

    From this page you create the outfit you want to wear.    

    Click on the items displayed in the carousels to add them to the creator view at the top of the page. If you select the wrong item or an item twice you can click on the incorrect item in the creator and it will immediatly be removed from selection. 

    If (like me) you have too many clothes you can filter the carousels by category using the drop down filter menu. You will have to filter `View All` to resume the full selection. 

    If you want to start again with your creation, you can hit the clear outfit button. 

    Once you have finished type a name for your outfit into the Outfit name field and hit the create outfit button. 

    If you do not provide a name or create an outfit with no items, the message box at the top of the screen will alert you, and instruct with how to proceed creating outfits. 

    Look out for these message bars as they will display useage tips while you are creating.

    When you have created an outfit the creator will clear, indicating the action has been registered and you can create again.

2. Saved Outfits.
![SavedOutfits Page](./public/assets/img/extras/Screen-shotsaved-outfits.png)

    When you have created an outfit they are displayed in this tab. Scroll left and right to view all of your creations. 

    If you wish to plan an outfit for a particular day, select the outfit and the day followed by the add to calander button. 

    If you select a day that already has an outfit saved, the current outfit will be replaced with the new one. 

    The calander bar displays the name of the outfit you have saved for that day.

    To remove the outfit, select the calander day with the outfit listed and hit the remove from calander button. 

    To delete an outfit, select the outfit and click the delete button. If the outfit is stored in the calander when you delete an outfit, the messages bar will ask you to remove it from the planner first. 

    If you hit any of the buttons without making a selection, or not enough selections as described above the messages bar will alert you to how to proceed. 

3. Add New Item. 

![Add New Item](./public/assets/img/extras/Screen-sho-new-item.png)

    This page allows you to add to your wardrobe. 

    You must fill in the boxes, name of the item, colour, pattern, weight. You must also upload an image to go with your selection or the create feature will not work. 

    Advice: weight should be Heavy, Light, Medium, Sheer, Thick, but it is not restricted. This property currently has no feature attached. 

    Select from the drop down menu, tops bottoms or overalls. Overalls are dresses and dungeree, over categories could be added through the development tools manually. Such as Jumpsuit and onsie could be added to overalls. They will also need to be added to the dropdown menus manually. 

    These 3 options will sort the item in the carousel and further display a category list for the type of garment. Please pick only one, though there is no restriction.

4. My Account. 

![SavedOutfits Page](./public/assets/img/extras/Screen-shot-my-account.png)
   
   This is the first thing you must do to create your wardrobe. Each item you add will subsequently be added alongside your user name and called forward in the carousels. Your outfits similarly. 
   

---

## Further Development

Moving forward with this application, these are the key areas we'd like to develop to improve....

- **Unique user id creation**
  Currently you cannot add a same username as another user but there is not id generator to create a unique user code allowing for users to input a name. 

- **Delete an item**
  You can add new items as you buy more but there is currently no feature to remove old and worn out items from your wardrobe. 

- **Delete a planned outfit**
  You must manually remove the outfits from the planner to delete an item. A feature needs to be added where the system purges Outfits before a set date before the current day. 

- **Save when items are selected**
  There is a column to save the day an item is worn. Future development could see statistics added to the application for number of times an item is worn or when it was last worn; how many times this month; or even when the item will become available for selection again (ie. has been processed through the laundry). 

- **Calander rotation**
  You can currently flick through the months of the full year, however you cannot go beyond the current year you are in. The next year will be available on Jan 1st.  

  A further feature could be to restrict planning to 3 months ahead and see Outfits from a single month behind. 

- **Upload image background remover**
    In Our screenshots We have uploaded graphics of the clothes in our wardrobe. The user can choose what images they upload. 

    Future defvelopement would see the use of a background remover api so the user can have a cleaner display of their own clothes. 

---

## Learning

As a team we have been able to develop skills in working in a close enviroment on the same files and functions. We started by splitting the tasks by front or back-end set up to help contain 'toe stepping' and cross coding. 

We quickly changed this way of working after the initial design and layout of the application was generated, and the database, basic routing and functionality were in place.

We each developed a different functionality of the web page through from front end to back end, maintaining seperation of concerns and organised code to avoid major conflicts.

## License

Licensed under the [MIT License](https://choosealicense.com/licenses/mit/). 

A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.  

![MIT license](https://img.shields.io/badge/license-MIT-brightgreen)
