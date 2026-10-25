import {site} from '@/config/site';
export const dynamic='force-static';
export default function manifest(){return {name:site.name,short_name:site.name,start_url:'/',display:'standalone' as const,background_color:'#f7f8f4',theme_color:'#2459ed',icons:[{src:'/icon.svg',sizes:'any',type:'image/svg+xml'}]};}
