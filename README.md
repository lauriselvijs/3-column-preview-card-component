# Frontend Mentor - 3-column preview card component solution

This is a solution to the [3-column preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/3column-preview-card-component-pH92eAR2-). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - 3-column preview card component solution](#frontend-mentor---3-column-preview-card-component-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [Installation](#installation)
    - [Steps to Setup](#steps-to-setup)
    - [Steps to Run](#steps-to-run)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
  - [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements

### Screenshot

![Three cards unchecked](https://user-images.githubusercontent.com/85683069/163214826-346b61a0-521e-42b3-8dca-9da5cc873795.png)

![Three cards checked](https://user-images.githubusercontent.com/85683069/163214824-71144aaf-c178-4df9-b5dd-63a1c48f30f7.png)

![Three cards unchecked mobile](https://user-images.githubusercontent.com/85683069/163214818-e470d051-a5bf-41d0-83ae-d47cf6bf49ae.png)

![Three cards checked mobile](https://user-images.githubusercontent.com/85683069/163214822-869c4ca0-099c-48b5-aef1-888b77b9a416.png)

## Installation

### Steps to Setup

1. Have node JS installed.
2. In the project root directory, run <code>npm install</code>

### Steps to Run

1. In the project root directory, run <code>npm run start</code>

### Links

- Solution URL: [Github](https://github.com/lauriselvijs/3-column-preview-card-component)
- Live Site URL: [Netlify](https://b81b96-3-column-preview-card-component.netlify.app/)

## My process

### Built with

- HTML5 markup
- [SCSS](https://sass-lang.com/) - advanced variant of CSS
- [React](https://reactjs.org/) - JS library
- [React Icons](https://react-icons.github.io/react-icons/) - Include popular icons in your React projects easily with react-icons
- [TypeScript](https://www.typescriptlang.org/) - Strongly typed programming language for JS

### What I learned

Using render props to implement DRY approach

```js
  <MainWrapper>
        <LearnMoreClickedWrapper
          render={(learnMoreClicked, onLearnMoreBtnClick) => (
            <Sedan
              learnMoreClicked={learnMoreClicked}
              onLearnMoreBtnClick={onLearnMoreBtnClick}
            />
          )}
        />
        <LearnMoreClickedWrapper
          render={(learnMoreClicked, onLearnMoreBtnClick) => (
            <Suv
              learnMoreClicked={learnMoreClicked}
              onLearnMoreBtnClick={onLearnMoreBtnClick}
            />
          )}
        />
        <LearnMoreClickedWrapper
          render={(learnMoreClicked, onLearnMoreBtnClick) => (
            <Luxury
              learnMoreClicked={learnMoreClicked}
              onLearnMoreBtnClick={onLearnMoreBtnClick}
            />
          )}
        />
      </MainWrapper>
```

```js
  const LearnMoreClickedWrapper = ({ render }: ILearnMoreClickedWrapper) => {
  const [learnMoreClicked, setLearnMoreClicked] = useState<boolean>(false);

  const onLearnMoreBtnClick = (): void => {
    setLearnMoreClicked(!learnMoreClicked);
  };

  return (
    <div className="learn-more-clicked-wrapper">
      {render(learnMoreClicked, onLearnMoreBtnClick)}
    </div>
  );
};
```


### Continued development

Learning more about SCSS and using it in future projects

### Useful resources

- [TypeScript Docs](https://www.typescriptlang.org/docs/) - Docs to better understand typescript
- [JavaScript Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - JS docs
- [w3schools CSS docs](https://www.w3schools.com/css/default.asp) - Great documentation to understand CSS
- [w3schools HTML docs](https://www.w3schools.com/html/default.asp) - Great documentation to understand HTML
- [ReactJS](https://reactjs.org/docs/getting-started.html) - Great documentation to understand ReactJS

## Author

- Website - [Lauris](https://portfolio-rouge-seven.vercel.app/)
- Frontend Mentor - [lauriselvijs](https://www.frontendmentor.io/profile/lauriselvijs)
