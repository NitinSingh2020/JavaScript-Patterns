(function (JSP) {

	document.addEventListener("DOMContentLoaded", function(event) {
		console.log("DOM fully loaded and parsed");

		// References to our DOM elements
		var controlCheckbox = document.getElementById( "mainCheckbox" ),
			addBtn = document.getElementById( "addNewObserver" ),
			container = document.getElementById( "observersContainer" );
		
		
		// Concrete Subject
		
		// Extend the controlling checkbox with the Subject class
		JSP.utilityModule.extend( new JSP.observerModule.Subject(), controlCheckbox );

		// Clicking the checkbox will trigger notifications to its observers
		controlCheckbox.onclick = function(){
			controlCheckbox.notify( controlCheckbox.checked );
		};
		
		addBtn.onclick = addNewObserver;
		
		// Concrete Observer
		
		function addNewObserver(){
		
			// Create a new checkbox to be added
			var check  = document.createElement( "input" );
			check.type = "checkbox";
		
			// Extend the checkbox with the Observer class
			JSP.utilityModule.extend( new JSP.observerModule.Observer(), check );
		
			// Override with custom update behaviour
			check.update = function( value ){
				this.checked = value;
			};
		
			// Add the new observer to our list of observers
			// for our main subject
			controlCheckbox.addObserver( check );
		
			// Append the item to the container
			container.appendChild( check );
		}
	});

}(JavaScript_Patterns));