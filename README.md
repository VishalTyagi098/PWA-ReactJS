# Chat Screen Progressive Web Application (PWA) using ReactJS

This repository contains a Progressive Web Application (PWA) developed using ReactJS and React Bootstrap. The goal of this assignment was to create a chat screen that functions as a PWA on both Android and iOS devices.

## Problem Description

The task involved developing a single-page PWA that closely resembles the provided UI. The PWA should include a chat screen that displays the most recent chat message. When the user scrolls above a certain threshold, the application should make an API call to retrieve older chats, incrementing the page number each time. However, there is no need to update the chat headers on subsequent API calls.

## Solution Approach

To solve the problem, I used the following approach:

1. **PWA Development**: I built a complete PWA using ReactJS and React Bootstrap. The application is designed to be installable on both desktop and mobile devices, supporting Android and iOS platforms.

2. **Service Workers and Manifest**: I implemented service workers to enable offline functionality and caching of assets. Additionally, I added a manifest.json file to provide app metadata and allow users to install the PWA on their devices.

3. **API Integration**: I used the provided API endpoint (`https://qa.corider.in/assignment/chat?page=0`) to fetch chat data. The application makes an initial API call to retrieve the most recent chat message. As the user scrolls up, the application incrementally calls the API with an incremented page number to fetch older chats.

## Live Demo

You can access the live version of the application at the following URL: [https://pwa-react-js.vercel.app/](https://pwa-react-js.vercel.app/)

Please note that the live demo may vary slightly from the provided UI, as it is a representation of the completed assignment.

## Images

![1](https://github.com/VishalTyagi098/PWA-ReactJS/assets/87750186/5ea4b85d-fcd0-4450-a395-a06bc67a629a)

![2](https://github.com/VishalTyagi098/PWA-ReactJS/assets/87750186/a38feea1-a6f7-4d1e-8d79-df37347df6d3)

![3](https://github.com/VishalTyagi098/PWA-ReactJS/assets/87750186/0b9faaa7-881c-44a6-8fd5-e71fe4523f6d)

Working in Android:-
![4](https://github.com/VishalTyagi098/PWA-ReactJS/assets/87750186/00247100-d318-42f7-a659-3a68c742e394)




## Instructions

To run the application locally, follow these steps:

1. Clone the repository to your local machine.
2. Install Node.js if you haven't already.
3. Navigate to the project directory.
4. Run `npm install` to install the required dependencies.
5. Run `npm start` to start the development server.
6. Open your browser and navigate to `http://localhost:3000` to access the application.

You can also build the application using `npm run build` and deploy it to a hosting platform of your choice.

## Technologies Used

The following technologies were used to develop the Chat Screen PWA:

- ReactJS: JavaScript library for building user interfaces.
- React Bootstrap: UI library for React applications.
- Service Workers: Enables offline functionality and caching of assets.
- Manifest.json: Provides app metadata and enables PWA installation.

Please refer to the `package.json` file for the complete list of dependencies.

## Conclusion

The Chat Screen Progressive Web Application (PWA) developed in this project provides a user-friendly and installable chat experience on both Android and iOS devices. It leverages the capabilities of ReactJS and React Bootstrap to deliver a responsive and efficient user interface.

Feel free to explore the code and test the application locally or on the live demo. Any feedback or suggestions for improvement are greatly appreciated.

Thank you for your attention.
