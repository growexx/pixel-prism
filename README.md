# PIXEL PRISM

## Overview
PIXEL PRISM is a single codebase web application developed using **HTML, CSS, SCSS, JavaScript, and HTMX**. This project is designed for **tutorial purposes**, covering various web development topics while integrating useful tools and interactive features.

## Features
### Main Pages
- **Login Page**: Includes an animated effect where the person avatar closes their eyes while typing the password.
- **Dashboard Page**: The central hub with a sidebar navigation containing 5 main menus.

### Menu Details
1. **Chat Vault - Chat with AI**
   - Integrated with Google Gemini API for server-based AI-powered searches.
2. **Playground - Code Playground**
   - Write and preview HTML, CSS, and SCSS code in three separate blocks.
   - Renders the output in an iframe dynamically.
3. **Grid Genesis - CSS 8-Point Grid Layout**
   - Detailed theoretical explanation along with practical examples.
4. **Layout Lab - Modern CSS Features**
   - Comprehensive breakdown of the latest CSS features with examples.
5. **Design Drip - SCSS Guide**
   - **Setup - SCSS Setup**: Steps to set up SCSS with plain JavaScript, including pros and cons.
   - **Features - SCSS Features**: Overview of SCSS features with hands-on examples.

## UI/UX Enhancements
- **Material Theme Implementation**:
  - A settings button for enabling **dark mode**, changing theme colors, and resetting to default.
- **Animations & Effects**:
  - CSS-based person avatar animation while entering the password.
  - Smooth transitions and interactive UI elements.

## Project Structure
```
pixel-prism/
├── assets/
    ├── components/
        ├── common/
            ├── header.html
            ├── setting.html
            ├── sidebar.html
        ├── chatVault.html
        ├── eightPointGrid.html
        ├── modernCss.html
        ├── playground.html
        ├── sassfeatures.html
        ├── sassSetup.html
    ├── script/
        ├── script.js
        ├── switching.js
    ├── style/
        ├── headerfooter.css
        ├── login.css
        ├── person.css
        ├── setting.css
        ├── sidebar.css
        ├── style.css
├── dashboard.html
└── index.html
```

## Technologies Used
- **HTML, CSS, SCSS**: Structure and styling
- **JavaScript, HTMX**: Interactivity and dynamic content
- **Google Gemini API**: AI-powered chat functionality
- **CSS Animations**: Enhancing the visual experience
- **Material UI Concepts**: Theming and dark mode settings

## Getting Started
1. Clone the repository.
2. Navigate to the project directory:
   ```sh
   cd pixel-prism
   ```
3. Open `index.html` in your preferred browser to explore the features.

## Contributing
Feel free to fork the repository, raise issues, or submit pull requests to improve the project further!

## License
This project is licensed under the **MIT License**.

```
MIT License

Copyright (c) 2025 [Uddeshya Kumar]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```