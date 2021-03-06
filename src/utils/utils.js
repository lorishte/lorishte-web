// Constants
import { LANGUAGES, USER_PAGES_TEXT } from '../constants/constants';

let months = {
	0: 'януари',
	1: 'февруари',
	2: 'март',
	3: 'април',
	4: 'май',
	5: 'юни',
	6: 'юли',
	7: 'август',
	8: 'септември',
	9: 'октомври',
	10: 'ноември',
	11: 'декември'
};

function calculatePriceAfterDiscount (price, discount) {
	price = Number(price);
	discount = Number(discount);

	return discount > 0 ? price - discount / 100 * price : price;
}

function formatDate (inputDate) {

	let date = new Date(inputDate);

	let years = date.getFullYear();
	let months = date.getMonth() + 1;
	let day = date.getDate();

	return `${('0' + day).slice(-2)}.${('0' + months).slice(-2)}.${years}`;

}

function formatDateYearFirst (inputDate) {

	let date = new Date(inputDate);

	let years = date.getFullYear();
	let months = date.getMonth() + 1;
	let day = date.getDate();

	return `${years}-${('0' + months).slice(-2)}-${('0' + day).slice(-2)}`;

}

function formatDateAndTime (inputDate) {

	let date = new Date(inputDate);

	let years = date.getFullYear();
	let months = date.getMonth() + 1;
	let day = date.getDate();
	let hours = date.getHours();
	let minutes = date.getMinutes();

	return `${('0' + day).slice(-2)}.${('0' + months).slice(-2)}.${years} ${('0' + hours).slice(-2)}:${('0' + minutes).slice(-2)}`;
}

function getDay (inputDate) {
	let date = new Date(inputDate);
	let day = date.getDate();
	return day;
}

function getMonth (inputDate) {
	let date = new Date(inputDate);
	let month = months[date.getMonth()];

	return month;
}

function getYear (inputDate) {
	let date = new Date(inputDate);
	let year = date.getFullYear();

	return year;
}

function getVideoDescription (input) {
	let indexOfDescriptionFirstLetter = getPosition(input, ' ', 2) + 1;

	return input.substr(indexOfDescriptionFirstLetter);
}

function getPosition (string, subString, index) {
	return string.split(subString, index).join(subString).length;
}

function createStateCopy (state) {
	return JSON.parse(JSON.stringify(state));
}

function getLanguage (component) {

	let lang = component.props.match.params.lng;

	if (lang === LANGUAGES.en) {
		component.setState({activeLanguage: LANGUAGES.en});
	} else {
		component.setState({activeLanguage: LANGUAGES.bg});
	}
}

function createMarkup (input) {
	return {__html: input};
}

function generateMarkup (type, props) {

	let {language, pageName, sectionName, subSectionName, subSubSectionName} = props;

	if (sectionName && subSectionName && subSubSectionName) {
		return createMarkup(USER_PAGES_TEXT[pageName][language].sections[sectionName][subSectionName][subSubSectionName][type]);
	}

	if (sectionName && subSectionName) {
		return createMarkup(USER_PAGES_TEXT[pageName][language].sections[sectionName][subSectionName][type]);
	}

	return createMarkup(USER_PAGES_TEXT[pageName][language].sections[sectionName][type]);
}

function generateUrl(folderName, imageName) {
	return '/projectsData/' + folderName + '/' + imageName;
}

export default {
	calculatePriceAfterDiscount,
	formatDate,
	formatDateAndTime,
	formatDateYearFirst,
	getDay,
	getMonth,
	getYear,
	getVideoDescription,
	createStateCopy,
	getLanguage,
	createMarkup,
	generateMarkup,
	generateUrl
};