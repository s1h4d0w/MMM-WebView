/* Magic Mirror
 * Module: MMM-WebView
 *
 * By lepel
 * MIT Licensed.
 */
 
Module.register("MMM-WebView", {

    // defaults for module
    defaults: {
        url: "https://www.duckduckgo.com",
        opacity: "1"
		},

    // set CSS for module
    getStyles: function() {
       return ["modules/MMM-WebView/css/MMM-WebView.css"];
    },

    // create module elements
    getDom: function() {

      // create the containing div
      var wrapper = document.createElement("div");
      // add class to containing div
      wrapper.classList.add("wv-wrapper");
      
      // create iframe element
      var iframe = document.createElement("iframe");
      // set url of iframe
      iframe.setAttribute("src", this.config.url);
      // remove iframe frameborder
      iframe.setAttribute("frameborder", "0");
      // set opacity of iframe
      iframe.setAttribute("style", "opacity: "+ this.config.opacity +";");
      // set options for iframe element
      iframe.setAttribute("allow", "encrypted-media");
      iframe.setAttribute("allowtransparency", "true");
      
      // add iframe to containing div
      wrapper.appendChild(iframe);
      
      // return container and iframe
      return wrapper;
      
    },

});
