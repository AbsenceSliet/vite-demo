interface IProjectEnv extends ImportMetaEnv {
  VITE_HOST?: string;
  VITE_PASSPORT_DOMAIN?:string
  VITE_OPEN_API_HOST?:string
}
const projectEnv: IProjectEnv = import.meta.env;
export { projectEnv };
