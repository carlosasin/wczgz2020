export class Urls {
  getPath(url: string): string {
    const reg = /.+?\:\/\/.+?(\/.+?)?(?:#|\?|)?$/;

    return reg.exec(url)[1];
  }
}
