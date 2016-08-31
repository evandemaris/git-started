(function(arbit) {
	arbit.Person = function() {
		this.initialize=function(name, age){
			this.name=name;
			this.age=age;
		}
		this.describe=function(){
			console.log(this.name + " " + this.age);
		}
	}

	arbit.Student = function() {
		arbit.Person.call(this);
		this.learn = function(subject){console.log(this.name + " just learned " + subject + ". Good for you, " + this.name + "!");}
	}

	arbit.Teacher = function() {
		arbit.Student.call(this);
		this.teach = function(subject) {console.log(this.name + " just taught " + subject + ". Good for you, " + this.name + "!");}
	}


})(this.people = {});

/*People Testing*/

//var evan = new people.Student();
//evan.initialize("evan demaris", 29);
//evan.learn("Physics");




