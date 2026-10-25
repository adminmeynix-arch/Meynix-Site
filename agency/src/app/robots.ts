import {site} from '@/config/site';
export const dynamic='force-static';
export default function robots(){return {rules:{userAgent:'*',...(site.domain?{allow:'/'}:{disallow:'/'})},...(site.domain?{sitemap:`${site.domain}/sitemap.xml`}:{})};}
