/**

 IP -- 2 data source (A, B)
 op -- A with B or B with A

*/


// data
var dataSource1 = [
    {
      id: 0,
      firstName: 'Juan',
      lastName: 'Doe',
      age: 32
    },
    {
      id: 1,
      firstName: 'Jane',
      lastName: 'Doe',
      age: 31
    },
    {
      id: 2,
      firstName: 'Janice',
      lastName: 'Doe',
      age: 30
    },
    {
      id: 3,
      firstName: 'Jake',
      lastName: 'Doe',
      age: 29
    },
  ];

var dataSource2 = [
    {
      id: 0,
      occupation: 'architect',
      address: {
        street: '123 Main St',
        city: 'CityTown',
        country: 'USA'
      }
    },
    {
      id: 1,
      occupation: 'architect',
      address: {
        street: '234 Main St',
        city: 'CityTown',
        country: 'USA'
      }
    },
    {
      id: 2,
      occupation: 'architect',
      address: {
        street: '345 Main St',
        city: 'CityTown',
        country: 'USA'
      }
    },
    {
      id: 3,
      occupation: 'architect',
      address: {
        street: '456 Main St',
        city: 'CityTown',
        country: 'USA'
      }
    },
  ];

var results = [];

function mergeDataStreams(stream1, stream2) {
  for (i = 0; i < stream1.length; i++){

    var profileCard = stream1[i];
    for (n = 0; n < stream2.length; n++){
      var profileCard2=stream2[n];
      var id = stream1[i].id; //why do i have to add this one?
      if (profileCard[id] === profileCard2[id]){ //why it doesn't work  if (profileCard[id] === profileCard2[id]){
        for (key in profileCard2){
          console.log (profileCard2[key]);
          profileCard[key] = profileCard2[key]; // why it doesn't work if i write return profileCard[key] = profileCard2[key];
        }
      }
    }
    results.push (profileCard);
  }
}

mergeDataStreams (dataSource1, dataSource2);
console.log (results);


/*

1. stream1
2. var x = stream1.map --> return 
3. 

var x = [

	{ id: 1}
	{ id: 3}
	{ id: 2}

]

var y = [

	{ id: 1}
	{ id: 2}
	{ id: 3}

]



*/


/*


function mergeDataStreams(stream1, stream2) {
	// your code here
	var stream2id = getID(stream2);
	console.log(stream2id)
	for (i=0; i < stream1.length; i++) { // Perfect
		
		debugger

		var id = stream1[i].id;
		console.log("stream1 id", id);



		if(stream2id.indexOf(id)){
			// Is id present, **merge** the value

			console.log(id," id present")


		}else{
			// ID not present , **push** the value
						console.log(id," not id present")
		}
	}
}

function getID(arr){
	return arr.map(function (val, key){
		return val.id;
	})
}



mergeDataStreams(dataSource1, dataSource2)


*/


/* From here down, you are not expected to 
   understand.... for now :)  
   
   
   Nothing to see here!
   
*/

/*

// tests 
function testMergeDataStreams(stream1, stream2) {
  var expected = stream1.map(function(item) {
   return _.assign(
     _.clone(item), stream2.find(function(item2) {return item.id === item2.id;}));
  });
  
  var actual = mergeDataStreams(stream1, stream2);
  
  var passing = actual && expected.map(function(item) {
    return _.isEqual(
      item,
      actual.find(function(_item) {return _item.id === item.id; })
    );
  }).every(function(result) {return result;} );
  
  if (passing) {
    console.log('SUCCESS! mergeDataStreams works');
  }
  
  else {
    console.log('FAILURE! mergeDataStreams not working');
  }
}

testMergeDataStreams(dataSource1, dataSource2);
*/




// function mergeDataStreams(stream1, stream2) {
//   // your code here



//   var n = 0;

// 	  for (i=0; i < stream1.length; i++) { // Perfect
// 	  	if ( stream1.id in stream1 [i] ===  stream2.id in stream2 [n]) {
// 	  		stream1[i].merge (stream2 [n]);
// 	  		n = 0;
// 	  		}
// 	  	else {
// 	  		n++;
// 		  	}
// 	 	 }
// }