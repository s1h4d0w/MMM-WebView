/* Magic Mirror
 * Module: MMM-WebView
 *
 * By lepel
 * MIT Licensed.
 */
 
Module.register("MMM-WebView", {

    defaults: {
        url: "https://www.duckduckgo.com"
		},

    start: function() {
        //var self = this;
    },

    getStyles: function() {
       return ["modules/MMM-WebView/css/MMM-WebView.css"];
    },

    getDom: function() {

      var wrapper = document.createElement("div");
      wrapper.classList.add("wv-wrapper");
      
      var iframe = document.createElement("iframe");
      iframe.setAttribute("src", this.config.url);
      
      wrapper.appendChild(iframe);
      
      return wrapper;
      
    },

});
