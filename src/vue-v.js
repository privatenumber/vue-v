const removeSlotAssociation = v => {
	if (v && v.data) {
		v.data.slot = undefined;
	}

	return v;
};

const vueV = {
	functional: true,
	render: (_, {props}) => (
		Array.isArray(props.nodes) ?
			props.nodes.map(removeSlotAssociation) : // eslint-disable-line unicorn/no-fn-reference-in-iterator
			removeSlotAssociation(props.nodes)
	),
};

export default vueV;
