# SQL-Employee-Tracker

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

## Description
This repo contains a command-line application to manage a company's employee database using Node.js, Inquirer, and PostgreSQL. It allows users to view and manage the departments, roles, and employees within a company. 


## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)

  ## Installation
  To install the necessary dependencies, clone the repository and run the following command in your terminal: npm install

  Ensure that PostgreSQL is properly installed on your machine.

  Create a new .env file in the root directory containing the following content:

    DB_USER=your_db_user
    DB_PASSWORD=your_db_password
    DB_HOST=your_db_host
    DB_PORT=your_db_port
    DB_DATABASE=your_db_name

Replace with your credentials.


  ## Usage
  Set up the database by running schema and seeds sql files using psql.

  To start the application, run the following command in your terminal: node index.js

  Follow the prompts to manage the departments, roles, and employees in the database.

  ![Screenshot](/images/terminal.png)

  ## License
    
    Please refer to the license in the repo.

  ## Contributing
  
  Useful information about coding, including tutorials and guides as well as the starter code, were provided by the UT Bootcamp GitLab: [https://git.bootcampcontent.com/University-of-Texas-at-Austin/UTA-VIRT-FSF-PT-05-2024-U-LOLC/].
    
  I frequently referred to Mozilla's developer tool blogs (MDN Web Docs) for help identifying the correct code and syntax: [https://developer.mozilla.org/en].
  
  I utilized helpful tips and tutorials from coding websites such as: [https://www.geeksforgeeks.org/], [https://coding-boot-camp.github.io], and [https://www.stackoverflow.com].

  I utiilized the npm tool inquirer, as well as pg, found here: [https://www.npmjs.com/package/pg].
