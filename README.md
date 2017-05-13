# Sotto.js

---

## What is Sotto?
- A Straightfoward template generator.
- Layout for webpack + Todd Motto style Guide for Angularjs 1.5+
- Follows ES15 
- Still in development!

---

## Default files created  
By default Sotto creates the following files all in a new folder named after the given argument (in this case, the name of the file is <filename>). Each file automatically is setup to import the other files created with this tool. (less work for you!)

-- <filename>.component.js  - a basic component 
-- <filename>.html  - the component html
-- <filename>.module.js  - a basic module 
-- <filename>.scss   - a mostly empty .scss file
-- <filename>.spec.js   - test file

---
## Adding custom Templates and Configuration

Sotto **currently** reads the sotto.config.js file from its installation directory (usually './node_modules/sotto/sotto.config.js') to determine what files to create. The current files are placed into the template within any {{}} characters. View any of the default templates to see how the system works.

### Variables parsed, and replaced
- **username** - the username, currently defaults to USER_NAME **will be updated**
- **date** - the current date and time, basic new Date() return, **will be updated**
- **filename** - the exact name given as a command line arg **will be depreciated**
- **camelName** - "camelCase" naming variant of the given filename 
- **lispName** - "lisp-name" naming variant of the given filename
- **titleName** - **currently not support, currently replaced by filename**
---

## Sample Commands
```bash
npm install sotto  
sotto navbar-button   
# creates a folder with the name navbar-button 
# along with the templates inside of the newly created folder.
```

You can create multiple folders in the current working directory by giving sotto more arguments.

```bash
npm install sotto
sotto searchbar navbar
# creates 2 folders, searchbar and navbar
# with each folder having the default templates
```

---
## lisp-case naming convention
Sotto **currently** only supports lisp-case, or dash-case, or words with dashes in between, with all lower case. 
