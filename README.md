# Link to Pitch Video

https://drive.google.com/file/d/1cPgyyQxNSYTYsC3Zm-L_JNUqNS5BBQqT/view?usp=sharing

# Expense Tracker

This is an expense tracker that will allow you to look at your finance data from many angles such as line charts and most purchased items. It even includes additional features such as a progress bar to show the proportions of their spending, a 2 way currency converter with a wide range of currencies and, and a section that shows business news.

With such a finance oriented website, people would be more money minded and reach their goal, be it to save more money or be more aware of their finances.
 
## Design Process
 
I wanted to have more of a younger, modern target audience which explains the default light grays for a colour scheme. It is also the information age and people would be more attracted to extra tools and features, which is why I implemented 2 external APIs.
The tile design is very popular now from visually appealing sites like tumblr and pinterest

User Type:
- I want to be more aware of my spending habits to know more about myself
- I want to save money so that I can purchase something
- I want to have more information at one place so I would not have to switch constantly



## Features

- Sub-heading updates as the months go by
- Filler transactions (can be disabled in script.js)
- Wallet section that gets wallet data from localstorage (budget/icon)
- Information tiles get transaction data and present them in an understandable way, there is also a currency converter and business news
 
### Existing Features
- Wallet section allows user to see wallets
- Information tiles allow transaction data to be formatted in an understandable way
- Currency converter allows for 2 way currency conversion
- Business news allows users to see headlines quickly and conveniently



### Features Left to Implement (In addition, you may also use this section to discuss plans for additional features to be implemented in the future:)
- Themes
- Popup that would let you add new transactions
- Ability to view and modify wallet icon, name, budget(in popup)
- Animated charts
- Hue picker for theme
- allow user to search transactions
- reorder tiles based on user's preferences

## Technologies Used

- [JQuery](https://jquery.com)
    - The project uses **JQuery** to simplify DOM manipulation
- [HTML](https://html.spec.whatwg.org/)
    - The project uses **HTML** to describe the structure and presentation of information
- [Bootstrap](https://getbootstrap.com/)
    - The project uses **Bootstrap** to design websites faster and easier
- [CSS](https://www.w3.org/TR/CSS/#css)
    - The project uses **CSS** to describe the presentation of a document


## Testing

1. Currency Converter:
    1. Click on dropoup button
    2. Click on wanted currency
    3. Type currency in input (automatically formatted)
    4. Click convert
    5. Converted value appears in other input box

## Credits
I did not lift much expect for the money formatter, proxy url when fetching API, and google line chart, (all commented next to code) but I did study many sites before workin on the website. Here they are:
https://www.w3schools.com/bootstrap/bootstrap_panels.asp                   understanding panels
https://www.w3schools.com/css/css3_multiple_columns.asp                     the system I used to flexbox my tiles
https://getbootstrap.com/docs/4.0/components/progress/#multiple-            understanding progress bars
https://codepen.io/559wade/pen/LRzEjj                                       for money formatting
https://developers.google.com/chart/interactive/docs/gallery/linechart      formatting google charts  
https://www.reliablepsd.com/ultimate-google-font-pairings/(31)              finding out what fonts to use
https://getbootstrap.com/docs/4.0/components/dropdowns/                     understanding bootstrap dropdowns/ups
https://www.flaticon.com/free-icon/draw_61456                               edit icon (unused)
https://www.flaticon.com/packs/daily-routine-objects-actions                icon pack I used
https://www.json-generator.com/                                              used to generate default values
https://secure.mas.gov.sg/api/APIDescPage.aspx?resource_id=95932927-c8bc-4e7a-b484-68a66a24edfe         api for currency
https://www.channelnewsasia.com/rssfeeds/8395954                             CNA rss feed for business news
https://cors-anywhere.herokuapp.com/                                           proxy url         
### Content
- overcoming cors https://stackoverflow.com/questions/61951713/problem-with-cors-policy-when-making-a-request-to-https-newsapi-org
- formatting currency https://codepen.io/559wade/pen/LRzEjj
- modifying line graph https://developers.google.com/chart/interactive/docs/gallery/linechart*/
### Media
- all icons are from https://www.flaticon.com. Specifically, edit[https://www.flaticon.com/free-icon/draw_61456], wallet icons[https://www.flaticon.com/packs/daily-routine-objects-actions]

### Acknowledgements

- I received inspiration for this project from my mother, who is an accountant and gave me some advice on what to put in

