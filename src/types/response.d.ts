export default interface ResponseOptions {
  status: number;
  message: string;
  data?: any;
  headers?: Headers;
}
