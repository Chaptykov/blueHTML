//@module shortjsdoc.html
//@class MethodView @extends AbstractView
var MethodView = AbstractView.extend({

	className: 'method-view'

,	template: 'method'

,	initialize: function(application, methodName) 
	{
		this.application = application;

		var className = this.getClassName(methodName);
		// var propertySimpleName = a[2];
		var methodSimpleName = this.getSimpleName(methodName);
		
		// var a = methodName.split('.');
		// var className = a[0] + '.' + a[1]; 
		var class_ = this.application.data.classes[className];
		// var methodSimpleName = a[2];
		if(!isNaN(parseInt(methodSimpleName, 10)))
		{
			this.jsdoc = class_.constructors[parseInt(methodSimpleName, 10)]; 
			this.isConstructor = true;
		}
		else
		{			
			this.jsdoc = class_.methods[methodSimpleName]; 
			this.isConstructor = false;
		}
		if(!this.jsdoc)
		{
			this.resourceNotFound = true;
			return;
		}

		this.jsdoc.textHtml = this.getTextHtml(this.jsdoc);
		this.ownerClass = this.application.data.classes[this.jsdoc.ownerClass]; 
	}

});

