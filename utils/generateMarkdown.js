// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }

  if (license === 'MIT') {
    return `
    [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
    `;
  }
  else if (license === 'Apache 2.0') {
    return `
    [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
    `;
  }
  else if (license === 'GNU GPLv3') {
    return `
    [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
    `;
  }
  else {
    return `
    [![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
    `;
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }

  if (license === 'MIT') {
    return `
    [https://choosealicense.com/licenses/mit/](https://choosealicense.com/licenses/mit/)
    `;
  }
  else if (license === 'Apache 2.0') {
    return `
    [https://choosealicense.com/licenses/apache-2.0/](https://choosealicense.com/licenses/apache-2.0/)
    `;
  }
  else if (license === 'GNU GPLv3') {
    return `
    [https://choosealicense.com/licenses/gpl-3.0/](https://choosealicense.com/licenses/gpl-3.0/)
    `;
  }
  else {
    return `
    [https://choosealicense.com/licenses/isc/](https://choosealicense.com/licenses/isc/)
    `;
  }

  
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }

  return `
  ## License

  The application is covered under the ${license} license. Read the license details at: ${renderLicenseLink(license)} 
  `;

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.project}
  ${renderLicenseBadge(data.license)}

  ## Description 

  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Questions](#questions)

  ## Installation

  ${data.installation}

  ## Usage 

  ${data.usage}

  ${renderLicenseSection(data.license)}
  ## Contributing
  ${data.contribution}
  
  ## Questions

  Github Username: ${data.github}
  Link: [https://github.com/${data.github}](https://github.com/${data.github})
  Email: ${data.email}
`;
}

module.exports = generateMarkdown;
