export function serialize(list) {
    if (list.length === 0) return '';
  
    list.sort((a, b) => a - b); 
    let result = [];
    let start = list[0];
    let end = list[0];
  
    for (let i = 1; i <= list.length; i++) {
      if (list[i] === end + 1) {
        end = list[i];
      } else {
        result.push(start === end ? `${start}` : `${start}-${end}`);
        start = list[i];
        end = list[i];
      }
    }
  
    return result.join(',');
  }