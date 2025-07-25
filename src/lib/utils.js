  export function get_date(){
    let date = new Date();
    date = date.toISOString().replace('Z', '').replace('T', ' ')
    return date;
  }