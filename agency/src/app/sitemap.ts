import type {MetadataRoute} from 'next';
import {site} from '@/config/site';
import {services} from '@/config/services';
export const dynamic='force-static';
export default function sitemap():MetadataRoute.Sitemap{return site.domain?['',...services.map(s=>s.slug),'services','industries','our-approach','contact','privacy','terms'].map(p=>({url:`${site.domain}/${p}${p?'/':''}`})):[];}
