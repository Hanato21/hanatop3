/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_BWF5RzfA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"Advanced SWAT Tactics and Leadership Training","location":"FBI Academy","url":"http://ni.sb/mehanad","institute":"FBI Academy","date":"1975-1980","tags":["Conflict Resolution","Strategic Planning","Risk Assessment","Firearms Training","Emergency Response"]};
				const file = "/home/hanato/hanatop3/src/pages/studies/studie2.md";
				const url = "/studies/studie2";
				function rawContent() {
					return "";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
