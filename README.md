# MMM-WebView
Magic Mirror module to show a webpage of your choosing using an iframe

## Installation

In your terminal, go to your MagicMirror's Module folder:
````
cd ~/MagicMirror/modules
````

Clone this repository:
````
git clone https://github.com/s1h4d0w/MMM-WebView.git
````

Configure the module in your `config.js` file.

## Using the module

To use this module, add it to the modules array in the `config/config.js` file:
````javascript
{
	module: 'MMM-WebView',
	config: {
		url: "https://www.mywebsite.com",	// any webpage that allows embedding
		opacity: "0.8" 				// opacity of the module, any value between 0.01 and 1
	}
},
````
