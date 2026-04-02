// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import angular from '@analogjs/astro-angular';

export default defineConfig({
  site: 'http://kiripens.co.uk',
  base: '/',
  outDir: '../dist',
  integrations: [mdx(), angular()],
});