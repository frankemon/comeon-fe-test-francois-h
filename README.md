Markdown

# ComeOn Group Frontend Code Test

## Casino Web Application

This repo is for the ComeOn Group frontend take-home test, a minimal casino web application on frontend. The application allows users to log in, view, filter and search games, and launch individual games (although as of writing 5/26 there is CORS error from their side).

## Features

Requirements set for the test:

* **Login Interface:** A single screen designed to handle user login.
* **User Authentication:** Connects to a mock API for login using predefined credentials.
* **Session Management:** Maintains user's logged-in state across browser sessions (via `localStorage`).
* **Logout Functionality:** Allows users to securely log out.
* **Games List Display:** Fetches and presents a list of available games.
* **Game Categorization:** Displays game categories from the mock API.
* **Filtering & Search:** Enables filtering games by category and searching by game name.
* **Game Launch:** Ability to "launch" a selected game (integrating the provided `comeon.game.launch` function, see above mentioned CORS problem).
* **Responsive Design:** Adapted for use on a range of screen sizes.

## Technologies Stack

* **Frontend:** React (TypeScript)
* **Styling:**
    * Tailwind CSS (for utility-first styling and layout)
    * Material-UI (MUI) (for pre-built, accessible UI components)
    * Material Icons (for visual cues)
* **Backend:** json-server (`0.17.3`)

## Getting Started

### 1. Clone the Repository

### 2. Install packages

#### 2.1 Install json-server 0.17.3
```
npm install json-server@0.17.3
```

### 3. Run project
```
npm run dev
```
### 4. ~~Run mock backend in new terminal from client folder~~
This no longer works because of submodules. I tried to fix but couldn't.


