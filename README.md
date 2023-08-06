# **Rock Paper Scissors Lizard Spock**

<img src="/assets/images/rpsls-amiresponsive.png" alt="responsive designs">

Rock Paper Scissors Lizard Spock is an adaption of the classic game of chance, Rock Paper Scissors.

The site is designed purely for entertainment purposes and to be fun and enjoyable to the user. The game is entirely based on chance and has an easy to use interface in order for the user to easily find the rules, the game area and the feedback form.

[View the deployed website here](https://justinperry999.github.io/ci-milestone02-rpslsGame/)

## **User Exerience (UX)**

### **Project Goals**

<ul>
<li>The website interface should be easy to understand and navigate clearly.</li>
<li>Should include an appealing color scheme or theme to engage the user.</li>
<li>To provide easily accessible instructions on how to play the game.</li>
<li>Offer users a form to fill in to provide any feedback.</li>
<li>Should be fully responsive across all platforms.</li>
</ul>

### **Color Scheme/Theme**

I have used a space theme for the website using white for the text color as a contrast against a black background. I have swapped these 2 colors around for hover effects. For the logo I used a a shade of purple (rgb(158, 1, 158)) with a white background to stand out.

### **Typography**

The main font I have used is Kanit with San-Serif being the back-up font if Kanit fails to load. For the logo I have used Rubik Mono One as this is a bold font which stands out. I used Google Fonts to get an idea of what styles would be good to use on my site and I used Fontjoy for appropriate pairings.

### **Wireframes**

**Balsamiq** has been used to showcase the appearance of the site and display the placement of the different elements whitin the pages.

### Home page

<img src="/assets/images/rpsls-homepage-wf.png" alt="home page wireframe">

### Game Page

<img src="/assets/images/rpsls-gamepage-wf.png" alt="game wireframe">

### Feedback Page

<img src="/assets/images/rpsls-feedbackpage-wf.png" alt="feedback wireframe">


## **Features**

- To be responsive across all platforms.

- Space theme maintained throughout all pages for good UX.

### Header - Logo

<img src="/assets/images/rpsls-logo-screenshot.png" alt="Logo">

- The header contains the site logo which links to the home page.

### Header - Navigation Bar

<img src="/assets/images/rpsls-navbar-screenshot.png" alt="Navigation bar">

- The navigation bar is the same on each page of the site and includes links to the pages. Each links also has a hover affect to change color for better UX.

### Home page

<img src="/assets/images/rpsls-homepage-screenshot.png" alt="Home page">

- The home page provides information to the player on how to play the game and shows the user which weapons can be used in the game.

#### Main Buttons

- The start game button has a link to the game section.

- The feedback button has a link to feedback section.

### Game Page

<img src="/assets/images/rpsls-gamepage-Screenshot.png" alt="Game page">

#### Weapon Selection Buttons

- Allows the user to select the desired weapon to be used in the next round.

#### Round Result

- Displays the weapons chosen by the user and the computer on each round and who won and lost.
  
#### Score Board

- Keeps track of the points obtained by the user and the computer and present the current score to the user.

#### Game Result

- Displays if the user or computer won the game by reaching 5 points.

- Once 5 points have been reached and the game result shows, the weapon selection buttons become disabled so the user knows the game has finished.

#### Section Buttons

- The play again button resets the score board to make the game available once again, clearing the last round.

### Feedback Page

<img src="/assets/images/rpsls-feedbackpage-screenshot.png" alt="Feedback page">

- Provides the user a form accessible from the navigation bar and the home section to be able to submit their feedback.

### Footer

<img src="/assets/images/rpsls-footer-Screenshot.png" alt="Footer">

- The footer includes links to the site's social media channels. A hover effect has been added for better UX.

## **Technologies Used**

### Languages Used

- HTML5
- CSS3
- Javascript

### Programs Used

- Google Fonts

  - Google Fonts was used to import the fonts Kanit and Rubik Mono One into the style.css file.

- Fontjoy

  - Fontjoy was used for font pairing to find out what fonts worked well together.

- Font Awesome

  - Font Awesome was used for icons across the site to create a better user experience.

- 4kWallpapers

  - I used 4kWallpapers to find the background image for my site.

- Codeanywhere

  - Codeanywhere was used for writing code, committing, and pushing my work to GitHub.

- GitHub

  - Github was used to store my projects.

- Balsamic

  - I used Balsamic to create wireframes to generate ideas in the design phase of my project.

- Am I Responsive

  - Am I Responsive was used to ensure my project was responsive across all platforms and to create image showing responsiveness.

- Chrome Dev Tools

  - I used Chrome Dev Tools in the debugging part of my project to find sections of code which needed to be fixed. I also used it to test responsiveness.

- W3C Markup Validator

  - W3C Markup Validator was used to validate my HTML code.

- W3C CSS Validator

  - W3C CSS Validator was used to validate my CSS code.

## **Testing**

### **Tools Testing**

- Chrome Dev Tools

  - I used Chrome Dev Tools during the development phase to find and change HTML elements and CSS styles.

- Responsive
  - Chrome Dev Tools was used to test for responsiveness thoughout the site.
  - Am I Responsive was use to test the site was responsive across different devices.

### **Validator Testing**

#### HTML

- I came across 2 errors when testing my HTML code through the official W3C validator.

    <img src="/assets/images/rpsls-htmlw3cerrors.png" alt="errors page W3C validator">
 
- To fix these errors I replaced the button tags with anchor tags.
  
- After debugging, there were no errors shown when passed through the W3C validator.

    <img src="/assets/images/rpsls-htmlw3c.png" alt="No errors page W3C validator">

#### CSS

- No errors were found when passing through the official (Jigsaw) validator

<img src="/assets/images/rpsls-cssw3c.png" alt="No errors page CSS validator">

#### Javascript

- There were 2 warnings when validating my javascript through JSHints JavaScript Code Quality Tool.

<img src="/assets/images/rpsls-jshint.png" alt="JSHint validator">

- I have ignored these warnings as they do not effect the code and changing them may do so.

### Accessibility

- Lighthouse in Chrome DevTools was used to confirm that the website is easy to read and accessible.

- Lighthouse Report

<img src="/assets/images/rpsls-lighthousereport.png" alt="Lighthouse Report">

### **Manual Testing**

- Browser Compatibility

  | **Browser**     | **Outcome**                                             | **Pass/Fail** |
  | --------------- | ------------------------------------------------------- | ------------- |
  | Microsoft Edge  | No appearance, responsiveness nor functionality issues. | Pass          |
  | Google Chrome   | No appearance, responsiveness nor functionality issues. | Pass          |
  | Safari          | No appearance, responsiveness nor functionality issues. | Pass          |
  | Mozilla Firefox | No appearance, responsiveness nor functionality issues. | Pass          |

- Common Elements Testing

  - General

    | **Browser**        | **Outcome**                                                                                   | **Pass/Fail** |
    | ------------------ | --------------------------------------------------------------------------------------------- | ------------- |
    | Header             | The main logo when clicked, navigates to the home page.                                       | Pass          |
    | Navigaton Bar      | Each link navigates to the desired page and hover/underline effect work as expected.          | Pass          |
    | Page Carousel      | Scroll functionality works as expected                                                        | Pass          |
    | Social Media Links | links open up the selected social media page in a new window. Hover effect works as expected. | Pass          |
    | Buttons            | All buttons when clicked recieve the correct outcome.                                         | Pass          |

  - Home page

    | **Browser**        | **Outcome**                                                                                   | **Pass/Fail** |
    | ------------------ | --------------------------------------------------------------------------------------------- | ------------- |
    | Play Game Button   | Both the hover effect and the link to the game work as expected.                              | Pass          |
    | Feedback Button    | Both the hover effect and the link to the feedback section work as expected.                  | Pass          |

  - Game page

    | **Browser**        | **Outcome**                                                                                   | **Pass/Fail** |
    | ------------------ | --------------------------------------------------------------------------------------------- | ------------- |
    | User Choice Buttons | Clicking on the weapon buttons choses the correct weapon and starts the game.                | Pass          |
    | Round Result Text  | Displays the correct text depending which player wins.                                        | Pass          |
    | Score board        | Scoreboard increments 1 point to the winner as expected.                                             | Pass          |
    | Game Result Text  | Displays the correct text depending which player wins the game. User choice buttons are disabled.        | Pass          |
    | Play Again Button  | Hover effect works, scoreboard resets and user choice buttons enable as expected                           | Pass          |

  - Feedback page

    | **Browser**   | **Outcome**                                                | **Pass/Fail** |
    | ------------- | ---------------------------------------------------------- | ------------- |
    | Form          | user is required to complete all fields before submitting. | Pass          |
    | Submit Button | Hover effect works as expected.                            | Pass          |

## Finished Product

    | **Page** | **Image** |
    |----------|-----------|
    | Home page | <img src="/assets/images/rpsls-finishedhomepage.png" alt="Finished home page"> |
    | Game page | <img src="/assets/images/rpsls-finishedgamepage.png" alt="Finished game page"> |
    | Feedback page | <img src="/assets/images/rpsls-finishedfeedbackpage.png" alt="Finished feedback page"> |

## **Deployment**

- The site was deployed to GitHub pages. The steps that I used to deploy are as follows:

  1. In the GitHub repository, navigate to the Settings tab.
  2. From the side menu, select Pages.
  3. On the Github pages screen, under branch click on Main and Save, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.

- The live link can be found here - https://justinperry999.github.io/ci-milestone02-rpslsGame/

  ## **Credits**

### Content

- The instructions were taken from [The Big Bang Theory Wiki](https://bigbangtheory.fandom.com/wiki/Rock,_Paper,_Scissors,_Lizard,_Spock)

### Media

- The background was taken from [4k Wallpapers](https://4kwallpapers.com/space/stars-galaxy-10307.html)

### Code

- W3Schools, Stack Overflow and CSS-Tricks were consulted to help with some parts of my code.

- Youtube was used to find ideas and inspiration on the project and styling.

- The code for the page carousel was found on CSS-Tricks and was modified to best suit the game.