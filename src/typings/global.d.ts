interface IDictionary<T> {
  [key: string]: T;
}
interface Function {
  before: (beforefn: () => void) => void;
  after: (afterfn: () => void) => void;
}

declare interface Window {
  log:(name:unknown,tip?:string,color?:string)=>void
}