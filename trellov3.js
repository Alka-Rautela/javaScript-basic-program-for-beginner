let myTodos = {
    day: 'Monday', 
    meetings: 0,
    meetDone: 0,

    addMeetings: function(num){
        //console.log('Hey, I am a function!');
        //console.log(this); //'this' keyword refers to all the properties in this object
        this.meetings = this.meetings + num;

    },

    meetingDone: function(num){
        this.meetDone = this.meetDone + num;
    },

    reset: function(){
        this.meetings = 0;
        this.meetDone = 0;
    },

    summary: function(){
        return `You had ${this.meetings} meetings today, and you've done ${this.meetDone} and ${this.meetings - this.meetDone} meetings are left. `
    },

}
//myTodos.meetings; //we did not use parantheses here cause it is a property
myTodos.addMeetings(5); //here we are using parantheses cause addMeetings is a Method
myTodos.addMeetings(6);
myTodos.meetingDone(2);

console.log(myTodos.summary());


