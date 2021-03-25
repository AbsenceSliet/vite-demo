function log(name: unknown, tip?: string, color?: string) {
  color = color || "#fff";
  tip = tip || "params----";
  console.log(
    `%c info----> %c ${tip} `,
    `color:${color};background:#f00`,
    `font-size:20px;`,
    name
  );
}
function isWechat(): boolean {
  return !!navigator.userAgent.match(/micromessenger/i);
}
function wechatShareUrl(link: string): string {
  let url: string;
  let links = link.split("#");
  url = links[0] + "#" + links[1];
  return url;
}
function getPathParams() {
    let search = window.location.search;
    let regx = /([^&?=]+)=([^&?=]+)/g
    let obj:{[key:string]:unknown} =  {}
    search.replace(regx,(...args:string[])=>{
      if(!obj[args[1]]){
        obj[args[1]] = args[2]
      }else{
        obj[args[1]] = Array.isArray(obj[args[1]])
        ? obj[args[1]]
        : [obj[args[1]]];
      }
      return ''
    })
    return obj
}
export { log, isWechat,wechatShareUrl ,getPathParams};
