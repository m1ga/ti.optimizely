// This is a test harness for your module
// You should do something interesting in this harness
// to test out the module and to provide instructions
// to users on how to use it by example.


// open a single window
const win = Ti.UI.createWindow();
const label = Ti.UI.createLabel();
win.add(label);
win.open();

// TODO: write your module tests here
import ti_optimizely  from 'ti.optimizely';
Ti.API.info("module is => " + ti_optimizely);

label.text = ti_optimizely.example();

Ti.API.info("module exampleProp is => " + ti_optimizely.exampleProp);
ti_optimizely.exampleProp = "This is a test value";

if (Ti.Platform.name == "android") {
	const proxy = ti_optimizely.createExample({
		message: "Creating an example Proxy",
		backgroundColor: "red",
		width: 100,
		height: 100,
		top: 100,
		left: 150
	});

	proxy.printMessage("Hello world!");
	proxy.message = "Hi world!.  It's me again.";
	proxy.printMessage("Hello world!");
	win.add(proxy);
}
