import { Toast } from 'vant'
const Loading = {
    show:()=>{
        Toast({
            className:'system--loading',
            type:'html',
            duration:0,
            iconPrefix:'system--loading__icon',
            icon:'https://source.pahx.com/ext/images/website/pingan/icons/icon-loading_600x600.gif'
        })
    },
    hide:()=>{
        Toast.clear()
    }
}
export default Loading