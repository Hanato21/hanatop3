/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_BWF5RzfA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Highly skilled and experienced law enforcement professional with over two decades of service in various specialized units. Adept at conducting complex investigations, coordinating tactical operations, and providing leadership in high-pressure situations. Known for exceptional problem-solving abilities, strategic thinking, and dedication to upholding the law. Seeking opportunities to leverage expertise in a challenging environment where I can continue to make a meaningful impact.</p>";

				const frontmatter = {"title":"about","name":"Cezar Kelso","designation":"Senior Detective","location":"Los Angeles, CA 90001","pronouns":"he/him/el","website":"http://tafutza.hn/kos"};
				const file = "/home/hanato/hanatop3/src/pages/about/about.md";
				const url = "/about/about";
				function rawContent() {
					return "\nHighly skilled and experienced law enforcement professional with over two decades of service in various specialized units. Adept at conducting complex investigations, coordinating tactical operations, and providing leadership in high-pressure situations. Known for exceptional problem-solving abilities, strategic thinking, and dedication to upholding the law. Seeking opportunities to leverage expertise in a challenging environment where I can continue to make a meaningful impact.\n";
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
