console.log('welcome object')
let schoole = {
  name: 'aiktc',
  location: 'delhi',
  established: '1971',
  displayInfo: function () {
    console.log(`${schoole.name} was established in ${schoole.established} at ${schoole.location}`);
  }


}
schoole.displayInfo();