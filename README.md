# AngularCarbonFormio

This project is an angular library, that renders formio json input with carbon library components

## Development setup
```
#clone this repo 
	[root] == repo dir == angular-carbon-formio
#install dependencies
	cd [root] || cd angular-carbon-formio
	npm install
	npm [root]/projects/angular-carbon-formio || npm  angular-carbon-formio/projects/angular-carbon-formio
	npm install
	*note below commands assume you're in [root] dir*
#build the library
		ng build angular-carbon-formio
#move built library into root dir's `node_modules`  *make sure to remove previous one if exists*
		mv dist/angular-carbon-formio node_modules
*note: combine above two steps*
	ng b angular-carbon-formio && rm -rf node_modules/angular-carbon-formio && mv dist/angular-carbon-formio node_modules

#run demo application
	ng serve demo
```
## Further help

`leafteam`
