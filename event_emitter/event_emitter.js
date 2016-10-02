/** Customer Event Emitter
 *  Make new emitter from the function constructors. It's prototype contains an 'on' and 'emit' method
 *  We have an event called 'greet'. We are calling it event but it is really a property name.
 *
 *  When a greet event happens respond to it.
 *  Take the emitter and call the on method and pass it the event and a listener.
 *  Manually emit the event. emit finds the array property and loops through it invoking each handler.
 */
/**var Emitter = require('./13_event_emitter');
 var emtr = new Emitter();

 emtr.on('greet', function() {console.log('\nA listener function for greet event'); });
 emtr.on('greet', function() { console.log('A second listener function for greet event'); });
 emtr.emit('greet');*/

//require('./14_node_event_emitter');             //NodeJS Event Emitter
//require('./15_object_create_and_prototypes');   ///object.create and prototypes
//require('./16_inheriting_from_node_event_emitter');
//require('./17_es6_template_literals');
//require('./18_es6_call_and_apply');
//require('./19_inheriting_from_node_event_emitter2');
//require('./20_ES6_Classes');
//require('./21_inheriting_from_node_event_emitter3');