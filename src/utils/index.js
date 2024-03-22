function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const typeHandle = (types) => {
    if (types[1]){
      return  capitalizeFirstLetter(types[0].type.name + " and " + types[1].type.name);
    }
    return  capitalizeFirstLetter(types[0].type.name);
  };