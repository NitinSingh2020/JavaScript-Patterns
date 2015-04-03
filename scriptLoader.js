/* Method 1
 * ===== */
function loadScript(url, callback){

	var script = document.createElement("script")
	script.type = "text/javascript";

	if (script.readyState){  //IE
		console.log("Browser type: IE");
		script.onreadystatechange = function(){
			if (script.readyState == "loaded" ||
					script.readyState == "complete"){
				script.onreadystatechange = null;
				callback();
			}
		};
	} else {//Others
		console.log("Browser type: Others");
		script.onload = function(){
			console.log("Script Loaded:" + url);
		callback();
		};
	}

	script.src = url;
	document.body.appendChild(script);
}

loadScript("url_1", function(){
	loadScript("url_1", function(){
		console.log("Both scripts loaded");
	});
});

/* Method 2
 * ===== */
    var Loader = function () {};
    Loader.prototype = {
        require: function (scripts, callback) {
            this.loadCount      = 0;
            this.totalRequired  = scripts.length;
            this.callback       = callback;

            for (var i = 0; i < scripts.length; i++) {
                this.writeScript(scripts[i]);
            }
        },
        loaded: function (evt) {
            this.loadCount++;

            if (this.loadCount == this.totalRequired && typeof this.callback == 'function') this.callback.call();
        },
        writeScript: function (src) {
            var self = this;
            var s = document.createElement('script');
            s.type = "text/javascript";
            s.async = true;
            s.src = src;
            s.addEventListener('load', function (e) { self.loaded(e); }, false);
            var head = document.getElementsByTagName('head')[0];
            head.appendChild(s);
        }
    }

    var l = new Loader();
    var script_list = [
        "${pageContext.request.contextPath}/web/common/js/vendor/socket-io/socket.io.js",
        "${pageContext.request.contextPath}/web/common/js/notification_container.js"];

    function scriptLoaderCallback() {
    	console.log('All Scripts Loaded');
    };

    l.require(script_list, scriptLoaderCallback);