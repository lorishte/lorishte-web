import $ from 'jquery';

const url = 'http://addict-bg.com/api/mailServer.php';
// const url = 'http://localhost:80';

export default {

	sendMail: (state) => {

		let data = processData(state);

		return $.ajax(
			{
				type: 'GET',
				url: url,
				data: data,
				dataType: 'jsonp',
			})
	}
};

function processData (state) {

	Object.keys(state).forEach(e => {
		state[e] = state[e].trim();
	});

	return 'firstName=' + state.firstName
		+ '&lastName=' + state.lastName
		+ '&email=' + state.email
		+ '&phone=' + state.phone
		+ '&subject=' + state.subject
		+ '&message=' + state.message;
}

