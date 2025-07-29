export function get_now(){
    let date = new Date();
    date = date.toISOString().replace('Z', '').replace('T', ' ')
    return date;
  }