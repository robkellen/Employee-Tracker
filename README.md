
# Employee Tracker
![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)
  
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
    
  
## Description
This is a CLI app that allows the user to manage their company's employees in a database that includes the department, role, name, salary, and manager (if applicable) for each individual employee.  It also provides functions for the user to change an employees role/department, as well as add new departments, roles, and employees.


## Installation 
This app utilizes the Inquirer and MySQL npm packages.  To install the packages the user needs to open an integrated terminal and enter the command `npm i` to install these dependencies.  

## Usage
To use the app the user needs to enter the command `node start.js` within their integrated terminal after installing the dependencies.  The user is then presented with a prompt of options to start utilizing the various functions of the app.  For each listed choice there will be additional prompts asking the user to submit info pertaining to the function they chose.  Once the function is completed a message is logged to the console, and they are presented with the main options menu again.  If the user is finished with the application they can select 'Quit' and their connection to the app will be closed.  The user can then restart the app in the same manner as previously noted.

## License
Copyright (c) 2020 robkellen
  
MIT License
    
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
    
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
  
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Contributing
To contribute to this app please email me at rob.h.kellen@gmail.com.

## Tests
To test the app's functionality I utilized a list of mock employees as seen in the 'seeds.sql' file, and inserted them into the MySQL database.  This allowed me to test each function option associated with the main menu.  
  
## Questions
Please email me at rob.h.kellen@gmail.com with any questions about this project.  You can also see more of my work by visiting my GitHub profile at [robkellen](https://github.com{userName}).

