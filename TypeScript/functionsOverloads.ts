function totalLength1(x: string, y: string): number;
function totalLength1(x: any[], y: any[]): number;
function totalLength1(x: string | any[], y: string | any[]): number {
  var total: number = x.length + y.length;

  x.slice(0);

  if (x instanceof Array) {
    x.push("TypeScript");
  }

  if (x instanceof String) {
    x.substr(0);
  }

  return total;
}

totalLength1("srt", "45");
