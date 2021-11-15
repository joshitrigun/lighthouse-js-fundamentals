const instructorWithLongestName = instructors => {
    let len = 0;
    let result;
    for(i = 0; i < instructors.length; i++){
        if(instructors[i].name.length > len) {
            result = i;
            len = instructors[i].name.length;
        }
    }
    return instructors[result]
}
console.log(
    instructorWithLongestName([
      { name: 'Samuel', course: 'iOS' },
      { name: 'Jeremiah', course: 'Web' },
      { name: 'Ophilia', course: 'Web' },
      { name: 'Donald', course: 'Web' },
    ])
  );
  console.log(
    instructorWithLongestName([
      { name: 'Matthew', course: 'Web' },
      { name: 'David', course: 'iOS' },
      { name: 'Domascus', course: 'Web' },
    ])
  );