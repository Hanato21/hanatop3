/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_BWF5RzfA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"Bachelor of Science in Criminal Justice","location":"University of California, Los Angeles (UCLA)","url":"http://foeberoz.gm/kuj","institute":"University of California","date":"1970-1975","tags":["Criminal Justice","Law Enforcement","Legal Studies","Public Safety","Court System"]};
				const file = "/home/hanato/hanatop3/src/pages/studies/studie1.md";
				const url = "/studies/studie1";
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
