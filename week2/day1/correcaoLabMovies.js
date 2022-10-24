/* 
Iteration 5: Order by year
We need to sort the movies in ascending order by their release year. This should be easy using one of the methods we have just learned. 😉 Create a function orderByYear() that receives an array as parameter and returns a new sorted array.

If two movies have the same year, order them in alphabetical order by their title! ✔️
*/

function orderByYear(moviesArray) {
    let clone = [...moviesArray];
  
    clone.sort((a, b) => {
      if (a.year === b.year) {
        return a.title.localeCompare(b.title);
      }
  
      return a.year - b.year;
    });
  
    return clone;
  }

  