export class Dates {
  parse(dateString: string): string {
    const dateParsed = new Date(dateString);

    const monthNames = [
      'Enero',
      'Febero',
      'Marzo',
      'Abril',
      'Mayo',
      'Junio',
      'Julio',
      'Agosto',
      'Septiembre',
      'Octubre',
      'Noviembre',
      'Diciembre'
    ];

    return `${dateParsed.getDate()} ${
      monthNames[dateParsed.getMonth()]
    } ${dateParsed.getFullYear()}`;
  }
}
