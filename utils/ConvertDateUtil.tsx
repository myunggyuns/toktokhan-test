export const formatDate = () => {
  var d = new Date(),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear(),
    time = d.getHours() + ":" + d.getMinutes();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day, time].join(`. `);
};

export const addComma = (x: string) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const isNumber = (value: string) => {
  return /^\d+$/.test(value);
};
