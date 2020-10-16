const vueV = {
	functional: true,
	render: (h, ctx) => (ctx.props.nodes || []).map(v => {
		if (v.data) {
			v.data.slot = undefined;
		}

		return v;
	}),
};

export default vueV;
