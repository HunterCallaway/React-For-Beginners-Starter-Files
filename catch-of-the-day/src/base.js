import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp(
	{
		apiKey: "AIzaSyApZyJEhFdkTMfAQkgj5S-bBen3rKlKM4Q",
		authDomain: "catch-of-the-day-h-callaway.firebaseapp.com",
		databaseURL: "https://catch-of-the-day-h-callaway.firebaseio.com"
	}
);

const base = Rebase.createClass(firebaseApp.database());

//This is a named export.
export { firebaseApp };

//This is a default export.
export default base;