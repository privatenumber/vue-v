import V from 'vue-v';
import {mount} from '@vue/test-utils';

describe('error handling', () => {
	test('no vnodes', () => {
		const usage = {
			template: '<span><v /></span>',
			components: {
				V,
			},
		};

		const wrapper = mount(usage);
		expect(wrapper.html()).toBe('<span><!----></span>');
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

		const usage = {
			template: '<wrapper><div>Hello world</div></wrapper>',
			components: {
				Wrapper,
			},
		};

		const wrapper = mount(usage);
		expect(wrapper.html()).toBe('<span><div>Hello world</div></span>');
	});

	test('render multiple divs', () => {
		const Wrapper = {
			template: '<span><v :nodes="$slots.default" /></span>',
			components: {
				V,
			},
		};

		const usage = {
			template: '<wrapper><div>Hello world</div><div>Goodbye world</div></wrapper>',
			components: {
				Wrapper,
			},
		};

		const wrapper = mount(usage);
		expect(wrapper.html()).toBe('<span><div>Hello world</div><div>Goodbye world</div></span>');
	});

	test('render text', () => {
		const Wrapper = {
			template: '<span><v :nodes="$slots.default" /></span>',
			components: {
				V,
			},
		};

		const usage = {
			template: '<wrapper>Hello world</wrapper>',
			components: {
				Wrapper,
			},
		};

		const wrapper = mount(usage);
		expect(wrapper.html()).toBe('<span>Hello world</span>');
	});
});
