let umbrella = {
  color: 'pink',
  isOpen: false,
  open: () =>{
    if(umbrella.isOpen === 'true'){
      return "The umbrella is already opened";
    }
    else {
      umbrella.isOpen = true;
      return "Julia opens the umbrella";
    }
  }
}