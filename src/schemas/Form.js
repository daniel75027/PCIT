export default {
	name: "Form",
	properties: {
		type: "string",
		attendee: "Guardian",
		fields: { type: "list", objectType: "Field", optional: true },
		sequences: { type: "list", objectType: "Sequence", optional: true }
	}
};