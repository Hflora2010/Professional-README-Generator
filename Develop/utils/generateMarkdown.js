// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) { 
  return `![license badge](https://img.shields.io/badge/license-${license}-orange)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { 
   if (license === 'Apache') {
      return 'https://opensource.org/licenses/Apache-2.0';
  } else if (license === 'MIT') {
      return ' https://opensource.org/licenses/MIT';
  } else if (license === 'Mozilla') {
      return 'https://opensource.org/licenses/MPL-2.0';
  } else if (license === 'Perl') {
      return 'https://opensource.org/licenses/Artistic-2.0';
  } else {
      return '';
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
   return `## License 
   ${license}`
 }


// function to generate markdown for README
function generateMarkdown(data) {
   const licenseBadge = renderLicenseBadge(data.license);
   const licenseLink = renderLicenseLink(data.license);
  return `
<h1 align="center">${data.title}</h1>
  
${licenseBadge}

## Description
   ${data.description}
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
## Installation
   ${data.installation}
## Usage
   ${data.usage}
${renderLicenseSection(licenseLink)}
<br />
This application is legally covered by the ${data.license} license. 
<br />
## Contributing
   ${data.contributing}
## Tests
   ${data.tests}
## Questions
   If you have additional questions,

   You can find me on GitHub: [${data.username}](https://github.com/${data.username})<br />
<br />
   You can also reach me via email at: ${data.email}.
   Please don't hesitate to reach out.
    `;
}

module.exports = generateMarkdown;