import requester from '../requester';

const module = 'appdata';
const basicAuth = 'basicAuth';
const sessionAuth = 'adminAuth';
let endPoint = 'categories';

export default {

	createCategory: (state) => {

		let project = createCategoryInfo(state);

		return requester
			.post(sessionAuth, module, endPoint, project);
	},


	loadAllCategories: () => {
		return requester
			.get(sessionAuth, module, endPoint);
	},


	loadCategoryData: (id) => {

		let endPointId = endPoint + '/' + id;

		return requester
			.get(sessionAuth, module, endPointId);
	},


	editCategory: (id, state) => {

		let endPointId = endPoint + '/' + id;

		let project = createCategoryInfo(state);

		return requester
			.put(sessionAuth, module, endPointId, project);
	}
};

function createCategoryInfo (state) {

	return {
		name: state.name,
	};

}

