import Vue from 'vue/dist/vue.common';
import V from 'vue-v';
import {mount} from '@vue/test-utils';

describe('error handling', () => {
	test('no vnodes', () => {
		const wrapper = mount({
			template: '<span><v /></span>',
			components: {
				V,
			},
		});
		expect(wrapper.html()).toBe('<span></span>');
	});
});

describe('rendering', () => {
	test('render single div', () => {
		const Wrapper = {
			template: '<span><v :nodes="$slots.default" /></span>',
			components: {
				V,
			},
		};

		const wrapper = mount({
			template: '<wrapper><div>Hello world</div></wrapper>',
			components: {
				Wrapper,
			},
		});
		expect(wrapper.html()).toBe('<span><div>Hello world</div></span>');
	});

	test('render multiple divs', () => {
		const Wrapper = {
			template: '<span><v :nodes="$slots.default" /></span>',
			components: {
				V,
			},
		};

		const wrapper = mount({
			template: '<wrapper><div>Hello world</div><div>Goodbye world</div></wrapper>',
			components: {
				Wrapper,
			},
		});
		expect(wrapper.html()).toBe('<span><div>Hello world</div><div>Goodbye world</div></span>');
	});

	test('render text', () => {
		const Wrapper = {
			template: '<span><v :nodes="$slots.default" /></span>',
			components: {
				V,
			},
		};

		const wrapper = mount({
			template: '<wrapper>Hello world</wrapper>',
			components: {
				Wrapper,
			},
		});
		expect(wrapper.html()).toBe('<span>Hello world</span>');
	});
});

test('slot stripping', async () => {
	const Parent = {
		template: '<div><slot /><transition-group><v :nodes="vnodes" /></transition-group></div>',

		components: {
			V,
		},

		data() {
			return {
				vnodes: undefined,
			};
		},

		provide() {
			return {
				api: {
					setVnodes: vnodes => {
						this.vnodes = vnodes;
					},
				},
			};
		},
	};

	const Child = {
		inject: ['api'],
		render(h) {
			this.api.setVnodes([
				h('div', {key: 'a'}, ['Hello']),
				...this.$slots.named,
			]);
		},
	};

	const app = new Vue({
		template: '<parent><child><div slot="named" key="b">Goodbye</div></child></parent>',
		components: {
			Parent,
			Child,
		},
	});

	app.$mount();

	await app.$nextTick();
	expect(app.$el.innerHTML).toBe('<!----><span><div class="v-enter v-enter-active">Hello</div><div class="v-enter v-enter-active">Goodbye</div></span>');
});
