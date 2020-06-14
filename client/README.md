# Project Title

Frontend of the public WebApp of DIZCE

## Getting Started

    - Clone/Download the project.
    - Run 'npm install'

### Prerequisites

    NONE

### Modifying

    When trying to add a language: 
        - Add the language to the *languages* [original] and *langToSave* [in English] constants at **Context**.
        - Add the respective language carpet with all the JSON in it: **./src/languages** (The JSON has to be in the same format as in the other languages; and have the same names).
        - Add the respective translation in the 'switch' at **./src/components/Footer.js**, **./src/pages/NotFound.js & Error.js**
    
    When trying to add the header to a page:
        - Just add the 'setHeaderAvailable(true)' from the Context.js on the useEffect part, 
        and * to prevent the header in a page: add 'if(headerAvailable)setHeaderAvailable(false)' on the useEffect part.
         



## Authors

* **Lincol Saenz** - *Initial work* - [LinlSP](https://github.com/LinlSP)


